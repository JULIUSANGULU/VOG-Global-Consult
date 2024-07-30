import { useState } from "react";

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);

  const toggle = (index) => {
    setState(state.map((item, i) => (i === index ? !item : item)));
  };

  return [state, toggle];
};

export default useToggle;
