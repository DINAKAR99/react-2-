import { Data } from "./Data";
const CLEAR_ALL = "CLEAR_ALL";
const RESET_ALL = "RESET_ALL";
const CLEAR_SINGLE = "CLEAR_SINGLE";

const reducer = (state, action) => {
  if (action.type === CLEAR_ALL) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_ALL) {
    return { ...state, people: Data };
  }
  if (action.type === CLEAR_SINGLE) {
    const newpeps = state.people.filter((p) => p.id !== action.id);

    return { ...state, people: newpeps };
  }
};
export default reducer;
