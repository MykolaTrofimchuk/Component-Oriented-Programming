import { useState, useEffect, useRef } from 'react';
import './AudioPlayer.css';
import useAudio from './hooks/useAudio';

function AudioPlayer() {
    const audioRef = useRef(null);
    const {
        isPlaying,
        play,
        pause,
        changeVolume,
        volume,
        currentTime,
        seek,
    } = useAudio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3');

    const [seekTime, setSeekTime] = useState(0);

    const handleSeek = () => {
        seek(seekTime);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3';
        }
    }, []);

    const handlePlay = () => {
        if (!isPlaying) {
            play();
        }
    };

    const handlePause = () => {
        if (isPlaying) {
            pause();
        }
    };

    return (
        <div>
            <button onClick={handlePlay} disabled={isPlaying}>Play</button>
            <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
            <div>
                <label>
                    Volume:
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => changeVolume(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Seek (seconds):
                    <input
                        type="number"
                        value={seekTime}
                        onChange={(e) => setSeekTime(Number(e.target.value))}
                    />
                    <button onClick={handleSeek}>Seek</button>
                </label>
            </div>
            <p>Current Time: {currentTime.toFixed(2)}s</p>
            <audio ref={audioRef} preload="auto" />
        </div>
    );
}

export default AudioPlayer;
