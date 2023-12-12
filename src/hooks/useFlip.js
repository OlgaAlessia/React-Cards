import { useState } from "react";

/* making a function to change flipState from t/f or f/t */
const useFlip = (initilState = true) => {
  const [flipState, setFlipState] = useState(initilState);
  const flipCard = () => {
    setFlipState(flipState => !flipState);
  };

  return [flipState, flipCard]

}

export default useFlip;