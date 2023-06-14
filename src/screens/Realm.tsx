import React, { useState } from 'react';
import { Button, Text, TextInput, ScrollView } from 'react-native';
import { useRealm } from '../contexts/RealmContext';
import User from '../models/User';

const RealmExampleScreen = () => {
    const [inputValue, setInputValue] = useState("");
    const realm = useRealm();
    const users = realm.objects<User>(User.schema.name);

    const addUser = () => {
        realm.write(() => {
            const newUser = realm.create<User>(User.schema.name, {
                _id: new Realm.BSON.ObjectId(),
                name: inputValue,
            });
        });
        setInputValue("");
    }

    return (
        <ScrollView>
            <TextInput
                value={inputValue}
                onChangeText={setInputValue}
                placeholder={'Name'}
            />
            <Button onPress={addUser} title="Add User" />
            {users.map(user => (
                <Text key={user._id.toString()}>
                    {`ID: ${user._id.toString()}, Name: ${user.name}`}
                </Text>
            ))}
        </ScrollView>
    );
}

export default RealmExampleScreen;
