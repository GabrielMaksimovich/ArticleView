import React, { useState } from 'react';
import { Button, View } from 'react-native';
import Sound from 'react-native-sound';

interface SoundPlayerProps {
    soundFile: string;
}

const SoundPlayer: React.FC<SoundPlayerProps> = ({ soundFile }) => {
    const [sound, setSound] = useState<Sound | null>(null);

    // Load the sound file
    React.useEffect(() => {
        const soundInstance = new Sound(soundFile, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                setSound(soundInstance);
            }
        });

        return () => {
            soundInstance.release(); // Release the Sound instance when it's not needed
        };
    }, [soundFile]);

    const handlePlay = () => {
        sound?.play((success) => {
            if (!success) {
                console.log('playback failed due to audio decoding errors');
            }
        });
    };

    const handlePause = () => {
        sound?.pause();
    };

    const handleStop = () => {
        sound?.stop();
    };

    return (
        <View>
            <Button title="Play" onPress={handlePlay} />
            <Button title="Pause" onPress={handlePause} />
            <Button title="Stop" onPress={handleStop} />
        </View>
    );
};

export default SoundPlayer;
