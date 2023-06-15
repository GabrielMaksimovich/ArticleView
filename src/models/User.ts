import Realm from 'realm';

class User extends Realm.Object<User> {
    _id!: Realm.BSON.ObjectId;
    name!: string;

    static schema = {
        name: 'User',
        properties: {
            _id: 'objectId',
            name: 'string',
        },
        primaryKey: '_id',
    };
}

export default User;
