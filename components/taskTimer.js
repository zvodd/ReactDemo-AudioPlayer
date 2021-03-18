import PlayButton from "./svgs/playButton";
import PauseButton from "./svgs/pauseButton";
import { useEffect, useReducer, useRef, useState } from "react";
import ReactHowler from "react-howler";

function int_as_time(it) {
  var s = it % 60;
  var m = ((it - s) % 3600) / 60;
  var h = (it - s - m * 60) / 3600;
  return `${h}:${m}:${s}`;
}

const TaskTimer = ({ track }) => {
  const player = useRef(null);
  // const [audio, setAudio] = useState();
  // const [lastTrack, setLastTrack] = useState(null);
  // const cleanUpEffect = () => {
  //   window.AuTrkEl[track.url].pause();
  //   // del window.AuTrkEl[track.url]
  // };
  // useEffect(() => {
  //   // New Audio Track
  //   if (track && lastTrack !== track) {
  //     window["AuTrkEl"] = window?.AuTrkEl || {};
  //     const au = new Audio(track.url);
  //     window.AuTrkEl[track.url] = au;
  //     au.preload = true;
  //     // setAudio(track.url);
  //     setLastTrack(track.url);
  //     console.log("load audio", au);
  //   } else {
  //     // Same Track

  //     for (const [url, au] of window["AuTrkEl"]) {
  //       delete window["AuTrkEl"]["url"];
  //     }
  //   }
  //   // Clean Up / Dismount
  //   return cleanUpEffect;
  // }, [track, lastTrack]);

  // const [playing, setPlaying] = useReducer(() => {
  //   const au = window.AuTrkEl[track.url];
  //   au.play();
  // });

  const howler = player.current?.howler || {};
  const duration = howler.pos();
  // const duration = window.Howler.pos() || 0;
  const [playing, setPlaying] = useReducer((state, input) => {
    console.log(howler);
    if (howler?.state() === "loaded" || false) {
      return input;
    }
    return false;
  }, false);

  return (
    <div className="tasktimer">
      <div className="tasktime">
        <span>{int_as_time(duration)}</span>
      </div>
      <div className="tasktitle">
        <span>{track.title}</span>
      </div>
      <button className="lt-button">-</button>
      <div className="pp-button" onClick={() => setPlaying(!playing)}>
        {playing ? <PauseButton /> : <PlayButton />}
      </div>
      <button className="rt-button">+</button>
      <ReactHowler
        src={track.url}
        playing={playing}
        ref={player}
        onStop={() => setPlaying(false)}
      />
    </div>
  );
};
export default TaskTimer;
