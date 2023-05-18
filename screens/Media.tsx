import React, { useEffect } from 'react';
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player';
import {Text, View, Button} from 'react-native';

const MusicPlayer = () => {
    useEffect(() => {
        setupPlayer();
    }, []);

    const setupPlayer = async () => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop,
            ],
            compactCapabilities: [
                Capability.Play,
                Capability.Pause,
            ],
        });
    };

    const startPlayback = async () => {
        // You should replace this URL with your own audio file
        await TrackPlayer.add({
            id: '1',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            title: 'Test Track',
            artist: 'Test Artist',
            artwork: 'https://example.com/cover.png',
        });
        await TrackPlayer.play();
    };

    const { position, buffered, duration } = useProgress();

    return (
        <View>
            <Button title="Play Track" onPress={startPlayback} />
            <Text>Current Position: {position}</Text>
            <Text>Buffered Position: {buffered}</Text>
            <Text>Duration: {duration}</Text>
        </View>
    );
};

export default MusicPlayer;
