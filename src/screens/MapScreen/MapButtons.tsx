import React from 'react';
import {Block} from "../../components/SimpleComponents/Block";
import {Button} from "../../components/SimpleComponents/Button";
import {Text} from "../../components/SimpleComponents/Text";

interface MapButtonsProps {
    onStartTracking: () => void;
    onStopTracking: () => void;
    onShowRoutes: () => void;
    isTracking: boolean;
}

export const MapButtons: React.FC<MapButtonsProps> = ({ onStartTracking, onStopTracking, onShowRoutes, isTracking }) => {
    return (
        <Block
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'flex-end'}
            paddingHorizontal={20}
            paddingVertical={20}
        >
            <Button
                onPress={onStartTracking}
                isDisabled={isTracking}
                paddingVertical={10}
                paddingHorizontal={10}
                borderRadius={'25px'}
                bg={'rgba(0, 0, 0, 0.5)'}
            >
                <Text color={'#fff'}>Start Tracking</Text>
            </Button>
            <Button
                onPress={onShowRoutes}
                paddingVertical={10}
                paddingHorizontal={10}
                borderRadius={'25px'}
                bg={'rgba(0, 0, 0, 0.5)'}
            >
                <Text color={'#fff'}>Show Routes</Text>
            </Button>
            <Button
                onPress={onStopTracking}
                isDisabled={!isTracking}
                paddingVertical={10}
                paddingHorizontal={10}
                borderRadius={'25px'}
                bg={'rgba(0, 0, 0, 0.5)'}
            >
                <Text color={'#fff'}>Stop Tracking</Text>
            </Button>
        </Block>
    );
}
