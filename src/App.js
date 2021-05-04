import React, {useState, useEffect} from "react";
import Player from "./components/Player/Player";
import {data} from "./data";

function App() {
    const [songs] = useState(data);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex, songs.length]);

    return (
        <div className="App">
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
        </div>
    );
}

export default App;
