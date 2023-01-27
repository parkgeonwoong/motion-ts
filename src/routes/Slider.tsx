/**
 * @desc:
 * TODO:
 * 1. AnimatePresence
 */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

// Variants
const boxVariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    x: -500,
    transition: {
      duration: 0.3,
    },
  },
};

function Slider() {
  const [visible, setVisible] = useState(1);
  const next = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));

  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          visible === i ? (
            <Box
              key={i}
              variants={boxVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={next}>Click</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default Slider;
