import { useState, useRef, useEffect } from 'react';

function useAudio(url) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1.0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(new Audio(url));

    useEffect(() => {
        const audio = audioRef.current;
        isPlaying ? audio.play() : audio.pause();
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        const audio = audioRef.current;
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

        audio.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio.currentTime !== currentTime) {
            audio.currentTime = currentTime;
        }
    }, [currentTime]);

    useEffect(() => {
        const audio = audioRef.current;
        const handleEnd = () => setIsPlaying(false);
        audio.addEventListener('ended', handleEnd);
        return () => {
            audio.removeEventListener('ended', handleEnd);
        };
    }, []);

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);
    const togglePlayPause = () => setIsPlaying(!isPlaying);
    const changeVolume = (newVolume) => {
        if (newVolume >= 0 && newVolume <= 1) {
            setVolume(newVolume);
        }
    };

    const seek = (time) => {
        if (time >= 0 && time <= audioRef.current.duration) {
            setCurrentTime(time);
        }
    };

    return {
        isPlaying,
        play,
        pause,
        togglePlayPause,
        changeVolume,
        volume,
        currentTime,
        seek,
    };
}

export default useAudio;