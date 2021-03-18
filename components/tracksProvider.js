import { createContext, useReducer } from "react";

const initialState = {};
const trackCtx = createContext(initialState);
const { Provider } = trackCtx;

const sounds = [
  "https://actions.google.com/sounds/v1/cartoon/xylophone_tip_toe_scale_up.ogg",
  "https://actions.google.com/sounds/v1/cartoon/cartoon_ringing_hit.ogg",
  "https://actions.google.com/sounds/v1/cartoon/drum_roll.ogg"
];

const initializeTasks = () => {
  const ob = Object.fromEntries(
    ["Assume control", "Beget aesthetic", "Continue ascension", ""].map(
      (x, i) => [
        i,
        {
          title: x,
          time: 99621,
          url: sounds?.[i] || null
        }
      ]
    )
  );
  return ob;
};

const TracksProvider = ({ children }) => {
  const _dispatch = (state, action) => {
    switch (action.type) {
      case "reset":
        return { ...state, tracks: initializeTasks() };
      case "add":
        // const newState = // do something with the action
        return initialState;
      case "update":
        const [key, value] = action.args;
        var { tracks } = state;
        tracks = { ...tracks, ...{ [key]: value } };
        return { ...state, ...tracks };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(
    _dispatch,
    _dispatch({}, { type: "reset" })
  );
  console.log("ContextProv", state);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { trackCtx, TracksProvider };
