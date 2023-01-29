import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./layStyle";

export const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggled = () => setIsOn((prev) => !prev);

  return (
    <Wrapper>
      <BoxSwitch
        onClick={toggled}
        style={{ alignItems: isOn ? "flex-end" : "flex-start" }}
      >
        <Handle layout transition={{ type: "spring", damping: 15 }} />
      </BoxSwitch>

      <span>Switch</span>
    </Wrapper>
  );
};

const BoxSwitch = styled(motion.div)`
  width: 200px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
`;

const Handle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 40px;
`;
