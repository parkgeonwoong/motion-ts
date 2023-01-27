import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Box, Wrapper } from "./preStyle";

/**
 * Variants
 * TODO:
 * - Custom variants
 * - 함수로 바꿔야 변수를 사용가능
 */

const boxVariants = {
  initial: (isBack: boolean) => {
    return {
      x: isBack ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

const Slice = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const next = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const prev = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence mode="sync" custom={back}>
        <Box
          custom={back}
          key={visible}
          variants={boxVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>

      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </Wrapper>
  );
};

export default Slice;
