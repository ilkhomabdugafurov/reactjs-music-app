import React, {useState, useRef, useEffect} from 'react';
import Details from "./Details";
import Controls from "./Controls";

const Player = ({songs, currentSongIndex, nextSongIndex, setCurrentSongIndex}) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPLaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }
                return temp;
            })
        }
    }

    return (
        <div className="c-player">
            <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <Details song={songs[currentSongIndex]}/>
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPLaying} skipSong={SkipSong}/>
            <p>Next up: <span>{songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</span></p>
        </div>
    );
};

export default Player;