import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';
import {Block} from "../components/SimpleComponents/Block";
import {Button} from "../components/SimpleComponents/Button";
import {Text} from "../components/SimpleComponents/Text";

const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Block
            alignItems={'center'}
            marginTop={50}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <Block
                    flex={1}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={'green'}
                >
                    <Block
                    >
                        <Text
                            fontSize={40}
                            marginBottom={10}
                        >
                            Hello World!
                        </Text>

                        <Button
                            bg={'#fff'}
                            paddingVertical={5}
                            paddingHorizontal={5}
                            borderRadius={'5px'}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text
                                textAlign={'center'}
                            >
                                Hide Modal
                            </Text>
                        </Button>
                    </Block>
                </Block>
            </Modal>

            <Button
                bg={'purple'}
                paddingHorizontal={5}
                paddingVertical={5}
                borderRadius={'5px'}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text
                    color={"#fff"}
                >
                    Show Modal
                </Text>
            </Button>
        </Block>
    );
};

export default ModalScreen;
