import { createContext, useReducer } from "react";

const sounds = [
  "https://actions.google.com/sounds/v1/cartoon/xylophone_tip_toe_scale_up.ogg",
  "https://actions.google.com/sounds/v1/cartoon/cartoon_ringing_hit.ogg",
  "https://actions.google.com/sounds/v1/cartoon/drum_roll.ogg"
];

const initializeTracks = () => {
  const ob = Object.fromEntries(
    [
      "Assume control",
      "Beget aesthetic",
      "Continue ascension",
      "Open the next page"
    ].map((title, i) => [
      i,
      {
        title,
        excerpt:
          "A chapter-sized section that reads like a page and can also play audio.",
        time: 99621,
        url: sounds?.[i] || null
      }
    ])
  );
  return ob;
};

const initialState = {
  tracks: initializeTracks(),
  activeTrackId: 0
};

const trackCtx = createContext(initialState);
const { Provider } = trackCtx;

const TracksProvider = ({ children }) => {
  const _dispatch = (state, action) => {
    switch (action.type) {
      case "reset":
        return initialState;
      case "select":
        return { ...state, activeTrackId: action.id };
      case "add":
        return state;
      case "update":
        const [key, value] = action.args;
        return {
          ...state,
          tracks: {
            ...state.tracks,
            [key]: {
              ...state.tracks[key],
              ...value
            }
          }
        };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(_dispatch, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { trackCtx, TracksProvider };
