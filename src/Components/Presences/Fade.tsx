import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Box, Wrapper } from "./preStyle";

// Variants
const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  exit: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function Fade() {
  const [showing, setShowing] = useState(true);
  const toggleShowing = () => setShowing((prev) => !prev);

  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? (
          <BoxFade
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="exit"
          />
        ) : null}
      </AnimatePresence>

      <button onClick={toggleShowing} style={{ marginTop: "50px" }}>
        Click
      </button>
    </Wrapper>
  );
}

const BoxFade = styled(Box)`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50%;
`;

export default Fade;
