/**
 * @핵심 : layoutId
 */

import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./layStyle";

export const Between = () => {
  const [clicked, setClicked] = useState(false);
  const toggled = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <BoxLayout onClick={toggled}>
        <Box>
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 0 }} />
          ) : null}
        </Box>

        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 30 }} />
          ) : null}
        </Box>
      </BoxLayout>

      <span>Between Components</span>
    </Wrapper>
  );
};

const BoxLayout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 1);
  margin: 0px 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
