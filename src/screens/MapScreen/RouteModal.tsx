import React from 'react';

import {Modal, FlatList, TouchableOpacity} from "react-native";
import {Route} from "../../types/Route";
import {Block} from "../../components/SimpleComponents/Block";
import {Button} from "../../components/SimpleComponents/Button";
import {Text} from "../../components/SimpleComponents/Text";


interface RouteModalProps {
    modalVisible: boolean;
    onClose: () => void;
    routes: Route[];
    onRouteClick: (selectedRoute: Route) => void;
    onRouteRemove: (routeId: string) => void;
}

export const RouteModal: React.FC<RouteModalProps> = ({
    modalVisible,
    onClose,
    routes,
    onRouteClick,
    onRouteRemove,
    }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <Block flex={1} justifyContent={'center'} alignItems={'center'}>
                <Block
                    bg={'white'}
                    marginVertical={90}
                    paddingVertical={20}
                    paddingHorizontal={20}
                    borderRadius={'10px'}
                >
                    <FlatList
                        data={routes}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Block flexDirection="row" alignItems="center">
                                <TouchableOpacity onPress={() => onRouteClick(item)}>
                                    <Text>{item.startTime.toISOString()}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => onRouteRemove(item.id)}>
                                    <Text style={{ color: 'red', marginLeft: 10 }}>Remove</Text>
                                </TouchableOpacity>
                            </Block>
                        )}
                    />
                    <Button onPress={onClose}>
                        <Text>Close</Text>
                    </Button>
                </Block>
            </Block>
        </Modal>
    );
}
