import React from 'react';
import {FaPlay, FaPause, FaForward, FaBackward} from "react-icons/fa";

const Controls = ({isPlaying, setIsPlaying, skipSong}) => {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => skipSong(false)}>
                <FaBackward/>
            </button>
            <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
            <button className="skip-btn" onClick={() => skipSong()}>
                <FaForward/>
            </button>
        </div>
    );
};

export default Controls;