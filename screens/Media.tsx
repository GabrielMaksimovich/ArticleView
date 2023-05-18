import React, { useEffect } from 'react';
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player';
import { Button } from 'react-native';
import {Block} from "../components/SimpleComponents/Block";
import {Text} from "../components/SimpleComponents/Text";

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
                Capability.SkipToNext,
                Capability.SkipToPrevious,
            ],
        });
        await TrackPlayer.add([
            {
                id: '1',
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                title: 'Test Track',
                artist: 'Test Artist',
                artwork: 'https://example.com/cover.png',
            },
            {
                id: '2',
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                title: 'Test Track 2',
                artist: 'Test Artist',
                artwork: 'https://example.com/cover.png',
            },
            {
                id: '3',
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
                title: 'Test Track 3',
                artist: 'Test Artist',
                artwork: 'https://example.com/cover.png',
            },
        ]);
    };

    const startPlayback = async () => {
        await TrackPlayer.play();
    };

    const pausePlayback = async () => {
        await TrackPlayer.pause();
    };

    const stopPlayback = async () => {
        await TrackPlayer.pause();
        await TrackPlayer.seekTo(0);
    };

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const { position, buffered, duration } = useProgress();

    return (
        <Block>
            <Button title="Play Track" onPress={startPlayback} />
            <Button title="Pause Track" onPress={pausePlayback} />
            <Button title="Stop Track" onPress={stopPlayback} />
            <Button title="Next Track" onPress={skipToNext} />
            <Button title="Previous Track" onPress={skipToPrevious} />
            <Text>Current Position: {position}</Text>
            <Text>Buffered Position: {buffered}</Text>
            <Text>Duration: {duration}</Text>
        </Block>
    );
};

export default MusicPlayer;
