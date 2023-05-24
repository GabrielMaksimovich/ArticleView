import React, { useState } from 'react';
import { Button, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker: React.FC = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        console.warn("A date has been picked: ", date);
        setSelectedDate(date);
        hideDatePicker();
    };

    return (
        <View>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DatePicker;
