import Realm from 'realm';

const RouteSchema = {
    name: 'Route',
    primaryKey: 'id',
    properties: {
        id: 'string',
        startTime: 'date',
        endTime: 'date?',
        locations: 'Location[]',
    },
};

const LocationSchema = {
    name: 'Location',
    properties: {
        latitude: 'double',
        longitude: 'double',
        timestamp: 'double',
    },
};

const realm = new Realm({schema: [RouteSchema, LocationSchema]});

export default realm;
