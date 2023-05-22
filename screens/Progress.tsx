import * as ProgressBar from 'react-native-progress';
import {StyleSheet, View} from "react-native";

const ProgressComponent = () => {
    return (
        <View style={styles.container}>
            <ProgressBar.Bar progress={0.7} width={200} animated={true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProgressComponent;
