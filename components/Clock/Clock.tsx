import React, { useEffect, useState } from "react";
import StyledText from "../StyledText/StyledText";
import { nowToHHMM } from "../../services/data-service";

const Clock = () => {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    const interval = setInterval(() => setTime(nowToHHMM()), 1000);
    return () => clearInterval(interval);
  }, [time]);
  return <StyledText>{nowToHHMM()}</StyledText>;
};

export default Clock;
