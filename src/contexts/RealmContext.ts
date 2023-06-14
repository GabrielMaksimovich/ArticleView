import {createRealmContext} from '@realm/react';
import User from '../models/User';

const realmConfig: Realm.Configuration = {
    schema: [User],
};

export const {RealmProvider, useRealm } = createRealmContext(realmConfig);
