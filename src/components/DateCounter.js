import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incrementCount":
      return { ...state, count: Number(state.count) + Number(state.step) };
    case "decrementCount":
      return { ...state, count: Number(state.count) - Number(state.step) };
    case "step":
      return { ...state, step: Number(action.playload.stepValue) };
    case "count":
      return { ...state, count: Number(action.playload.countValue) };
    case "reset":
      return { step: 1, count: 0 };
    default:
      return state;
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={(e) =>
            dispatch({ type: "step", playload: { stepValue: e.target.value } })
          }
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "decrementCount" })}>-</button>
        <input
          value={state.count}
          onChange={(e) =>
            dispatch({
              type: "count",
              playload: { countValue: e.target.value },
            })
          }
        />
        <button onClick={() => dispatch({ type: "incrementCount" })}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
