import PlayButton from "./svgs/playButton";
import PauseButton from "./svgs/pauseButton";
import { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";

import { int_as_time } from "./utils";

const TaskTimer = ({ track, onPrevious, onNext }) => {
  const player = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(track.time || 0);

  useEffect(() => {
    setPlaying(false);
    setDuration(track.time || 0);
  }, [track]);

  const syncDuration = () => {
    const howler = player.current?.howler;
    const nextDuration = howler?.duration?.() || track.time || 0;
    setDuration(nextDuration);
  };

  return (
    <div className="tasktimer reader-panel">
      <div className="reader-copy">
        <span className="reader-kicker">Now reading</span>
        <h2>{track.title}</h2>
        <p>{track.excerpt}</p>
      </div>
      <div className="tasktime">
        <span>{int_as_time(duration)}</span>
      </div>
      <div className="reader-controls">
        <button className="lt-button" type="button" onClick={onPrevious}>
          Previous
        </button>
        <button
          className="pp-button"
          type="button"
          onClick={() => setPlaying((value) => !value)}
          disabled={!track.url}
        >
          {playing ? <PauseButton /> : <PlayButton />}
        </button>
        <button className="rt-button" type="button" onClick={onNext}>
          Next
        </button>
      </div>
      <ReactHowler
        src={track.url}
        playing={playing && Boolean(track.url)}
        ref={player}
        onLoad={syncDuration}
        onStop={() => setPlaying(false)}
        onEnd={() => setPlaying(false)}
      />
    </div>
  );
};
export default TaskTimer;
