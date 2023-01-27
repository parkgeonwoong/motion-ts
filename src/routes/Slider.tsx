/**
 * @desc:
 * TODO:
 * 1. AnimatePresence
 */

import { useState } from "react";
import { Box, Wrapper } from "../Components/Motions/Style";
import { AnimatePresence } from "framer-motion";

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
    y: 20,
  },
};

function Slider() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);

  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? (
          <Box
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

export default Slider;
