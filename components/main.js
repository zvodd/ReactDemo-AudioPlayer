import { useContext } from "react";
import { trackCtx } from "../components/tracksProvider";
import TaskTimer from "./taskTimer";
import { int_as_time } from "./utils";

const Main = () => {
  const { state, dispatch } = useContext(trackCtx);
  const activeTrack = state.tracks?.[state.activeTrackId] || state.tracks?.[0];
  const selectTrack = (id) => dispatch({ type: "select", id });
  const goToPrevious = () => {
    const keys = Object.keys(state.tracks || {});
    const currentIndex = keys.indexOf(String(state.activeTrackId));
    const previousIndex = currentIndex <= 0 ? keys.length - 1 : currentIndex - 1;
    selectTrack(Number(keys[previousIndex]));
  };
  const goToNext = () => {
    const keys = Object.keys(state.tracks || {});
    const currentIndex = keys.indexOf(String(state.activeTrackId));
    const nextIndex = currentIndex >= keys.length - 1 ? 0 : currentIndex + 1;
    selectTrack(Number(keys[nextIndex]));
  };

  return (
    <div className="appwrap reader-shell">
      <header className="reader-header">
        <p className="reader-kicker">Read / listen</p>
        <h1>Chapter player</h1>
        <p>
          A minimal ebook-style reader that keeps the currently selected chapter
          in sync with the audio player.
        </p>
      </header>

      {activeTrack ? (
        <TaskTimer
          track={activeTrack}
          onPrevious={goToPrevious}
          onNext={goToNext}
          key={state.activeTrackId}
        />
      ) : (
        <span>Loader</span>
      )}

      <section>
        <ul className="chapterlist">
          {Object.entries(state.tracks || {}).map(([num, chapter]) => (
            <Chapter
              key={num}
              chap={chapter}
              selected={String(state.activeTrackId) === num}
              onSelect={() => selectTrack(Number(num))}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

const Chapter = ({ chap, selected, onSelect }) => {
  return (
    <li className="chapteritem">
      <button
        type="button"
        className={`chapter-button ${selected ? "is-active" : ""}`}
        onClick={onSelect}
      >
        <span className="chapter-label">{chap.title}</span>
        <span className="chapter-excerpt">{chap.excerpt}</span>
        <span className="chapter-duration">[{int_as_time(chap.time)}]</span>
      </button>
    </li>
  );
};

export default Main;
