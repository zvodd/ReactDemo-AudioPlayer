import PlayButton from "./svgs/playButton";
import PauseButton from "./svgs/pauseButton";
import { useEffect, useReducer, useState } from "react";

function int_as_time(it) {
  var s = it % 60;
  var m = ((it - s) % 3600) / 60;
  var h = (it - s - m * 60) / 3600;
  return `${h}:${m}:${s}`;
}

const TaskTimer = ({ track }) => {
  // const [audio, setAudio] = useState();
  const [lastTrack, setLastTrack] = useState(null);
  const [cTime, setcTime] = useState(track.time);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // if (lastTrack){
    //   for(window["AuTrkEl"]
    // }

    // New Audio Track
    if (track && lastTrack !== track) {
      window["AuTrkEl"] = window?.AuTrkEl || {};
      const au = new Audio(track.url);
      window.AuTrkEl[track.url] = au;
      au.preload = true;
      // setAudio(track.url);
      setLastTrack(track.url);
      console.log("load audio", au);
    } else {
      // Same Track
    }
    // Clean Up / Dismount
    return () => {
      window.AuTrkEl[track.url].pause();
      // del window.AuTrkEl[track.url]
    };
  }, [track]);
  // const auplay = (ev) => {
  //   console.log("auplay", ev);
  //   ev.target.play();
  // };
  // const [qplay, play] = useReducer((state, ev) => {
  //   console.log("qp", state, window.AuTrkEl);
  //   if (ev == 1 && !state) {
  //     window.AuTrkEl[audio].addEventListener("canplay", auplay);
  //     return true;
  //   }
  //   return state;
  // }, false);

  // const doplay = () => play(1);
  const doplay = () => {
    const au = window.AuTrkEl[track.url];
    au.play();
  };
  return (
    <div className="tasktimer">
      <div className="tasktime">
        <span>{int_as_time(track.time)}</span>
      </div>
      <div className="tasktitle">
        <span>{track.title}</span>
      </div>
      <button className="lt-button">-</button>
      <div className="ss-button" onClick={doplay}>
        <PlayButton className="ss-inner" />
      </div>
      <button className="rt-button">+</button>
    </div>
  );
};
export default TaskTimer;
