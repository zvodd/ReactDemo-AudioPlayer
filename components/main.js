import { useContext, useEffect, useState } from "react";
import { trackCtx } from "../components/tracksProvider";
import TaskTimer from "./taskTimer";
import { int_as_time } from "./utils";

const Main = () => {
  const { state, dispatch } = useContext(trackCtx);
  console.log(state);

  // const [curTask, setCurTask] = useState(trackCtx[0]);
  const replaceTask = (args) => dispatch({ type: "update", args });

  // useEffect(() => initializeTasks(setTracks), []);
  useEffect(() => console.log("Tasks ∆"), []);

  return (
    <div className="appwrap">
      <div
        style={{
          fontSize: "40%",
          position: "absolute",
          right: "0",
          margin: "2em"
        }}
      >
        <pre> {JSON.stringify(/*Object.entries(*/ state /*)*/, null, 2)}</pre>
      </div>

      <div>Plays Audio.</div>
      {state.tracks?.[0] ? (
        <TaskTimer track={state.tracks?.[0]} key={0} />
      ) : (
        <span>Loader</span>
      )}
      <div>
        <ul className="tasklist">
          {Object.entries(state.tracks).map(([num, task]) => (
            <Chapter
              key={num}
              chap={task}
              update={(v) => replaceTask(num, v)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Chapter = ({ chap, update }) => {
  return (
    <li>
      <marquee style={{ display: "inline" }}> {chap.title} - </marquee>
      <span> [{int_as_time(chap.time)}] </span>
    </li>
  );
};

export default Main;
