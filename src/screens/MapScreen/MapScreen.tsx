import React, {useEffect, useState} from 'react';
import MapView, {LatLng, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import realm from '../../models/Route';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {Block} from "../../components/SimpleComponents/Block";
import {Route} from "../../types/Route";
import {MapButtons} from "./MapButtons";
import {RouteModal} from "./RouteModal";
import useGeoLocation from "../../hooks/useGeolocation";
import { requestLocationPermission } from './permissions';

const MapTracker: React.FC = () => {
    const [watchId, setWatchId] = useState<number | null>(null);
    const [routeId, setRouteId] = useState<string | null>(null);
    const [lastFirestoreUpdate, setLastFirestoreUpdate] = useState<number>(Date.now());
    const [motionlessTimeout, setMotionlessTimeout] = useState<number | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [routes, setRoutes] = useState<Route[]>([]);
    const location = useGeoLocation();
    const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

    useEffect(() => {
        setRoutes(getRoutes());
    }, []);

    useEffect(() => {
        return () => {
            if (motionlessTimeout) {
                clearTimeout(motionlessTimeout);
            }
        };
    }, [motionlessTimeout]);

    const getRoutes = (): Route[] => {
        const routes = realm.objects<Route>('Route');

        return Array.from(routes);
    };

    const startTracking = async () => {
        const hasLocationPermission = await requestLocationPermission();
        if (!hasLocationPermission) {
            return;
        }

        // Create a new document ID for the current route
        const newRouteId = Math.random().toString(36).substring(2, 15); // You can generate your own unique ID here.

        const startTime = new Date();
        realm.write(() => {
            realm.create('Route', {
                id: newRouteId,
                startTime: startTime,
            });
        });

        if (location) {
            const { latitude, longitude, timestamp } = location;

            await addToRealm(newRouteId, latitude, longitude, timestamp);

            // Cancel the previous motionless timeout
            if (motionlessTimeout) {
                clearTimeout(motionlessTimeout);
            }

            // Set a new motionless timeout
            const MOTIONLESS_TIMEOUT_DURATION = 5 * 60 * 1000;
            const timeoutId = setTimeout(() => {
                Alert.alert('You have been motionless for 5 minutes. Stopping tracking.');
                stopTracking(newRouteId);
            }, MOTIONLESS_TIMEOUT_DURATION);

            setMotionlessTimeout(timeoutId);
        } else {
            console.log('Location data is null');
            return;
        }

        Alert.alert('Tracking is now active.');
    };

    const addToRealm = async (newRouteId: string, latitude: number, longitude: number, timestamp: number) => {
        if (timestamp - lastFirestoreUpdate >= 10000) {
            realm.write(() => {
                const route = realm.objects<Route>('Route').filtered(`id == "${newRouteId}"`)[0];
                route.locations.push({ latitude, longitude, timestamp });
            });
            setLastFirestoreUpdate(timestamp);
        }
    };

    const stopTracking = async (idToStop?: string) => {
        if (watchId !== null) {
            setWatchId(null);

            const id = idToStop ?? routeId;
            if (id !== null) {
                const endTime = new Date();
                realm.write(() => {
                    const route = realm.objects<Route>('Route').filtered(`id == "${id}"`)[0];
                    route.endTime = endTime;
                });
                setRouteId(null);
            }
        }

        if (motionlessTimeout) {
            clearTimeout(motionlessTimeout);
        }

        Alert.alert('Tracking has been stopped.');
    };

    const GOOGLE_API_KEY = 'AIzaSyA8MaCkBYt1zdFYWbo-e-hud_IoF-c_W4I';

    const handleRouteClick = (route: Route) => {
        setSelectedRoute(route);
        setModalVisible(false); // Close the modal after selecting a route
    };

    const removeRoute = (routeId: string) => {
        realm.write(() => {
            const route = realm.objects<Route>('Route').filtered(`id == "${routeId}"`)[0];
            realm.delete(route);
        });
        setRoutes(getRoutes());
    };

    return (
        <Block flex={1}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsUserLocation={true}
                zoomControlEnabled={true}
            >
                {selectedRoute && selectedRoute.locations.length > 0 && (
                    <>
                        {selectedRoute.locations[0] && (
                            <Marker
                                coordinate={{
                                    latitude: selectedRoute.locations[0].latitude,
                                    longitude: selectedRoute.locations[0].longitude,
                                }}
                            />
                        )}
                        {selectedRoute.locations[selectedRoute.locations.length - 1] && (
                            <Marker
                                coordinate={{
                                    latitude: selectedRoute.locations[selectedRoute.locations.length - 1].latitude,
                                    longitude: selectedRoute.locations[selectedRoute.locations.length - 1].longitude,
                                }}
                            />
                        )}
                        {selectedRoute.locations[0] && selectedRoute.locations[selectedRoute.locations.length - 1] && (
                            <MapViewDirections
                                origin={{
                                    latitude: selectedRoute.locations[0].latitude,
                                    longitude: selectedRoute.locations[0].longitude,
                                }}
                                destination={{
                                    latitude: selectedRoute.locations[selectedRoute.locations.length - 1].latitude,
                                    longitude: selectedRoute.locations[selectedRoute.locations.length - 1].longitude,
                                }}
                                apikey={GOOGLE_API_KEY}
                                strokeWidth={4}
                                strokeColor="#111111"
                            />
                        )}
                    </>
                )}
            </MapView>
            <MapButtons
                onStartTracking={startTracking}
                onStopTracking={stopTracking}
                onShowRoutes={() => setModalVisible(true)}
            />
            <RouteModal
                modalVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                routes={routes}
                onRouteClick={handleRouteClick}
                onRouteRemove={removeRoute}
            />
        </Block>
    );

};

export default MapTracker;
