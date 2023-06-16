import React from 'react';

import {Modal, FlatList} from "react-native";
import {Route} from "../../types/Route";
import {Block} from "../../components/SimpleComponents/Block";
import {Button} from "../../components/SimpleComponents/Button";
import {Text} from "../../components/SimpleComponents/Text";


interface RouteModalProps {
    modalVisible: boolean;
    onClose: () => void;
    routes: Route[];
}

export const RouteModal: React.FC<RouteModalProps> = ({ modalVisible, onClose, routes }) => {
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
                        renderItem={({item}) => <Text>{item.startTime.toISOString()}</Text>} // Render route data however you want
                    />
                    <Button onPress={onClose}>
                        <Text>Close</Text>
                    </Button>
                </Block>
            </Block>
        </Modal>
    );
}
