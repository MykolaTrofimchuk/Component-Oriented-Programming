import { useState } from 'react'
import './App.css'
import useAudio from './hooks/useAudio';

function App() {
    const {
        isPlaying,
        play,
        pause,
        togglePlayPause,
        changeVolume,
        volume,
    } = useAudio('');

    return (
        <div>
            <button onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
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
        </div>
    );
}

export default App
