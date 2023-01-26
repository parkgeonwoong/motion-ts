import { Box, Wrapper } from "./Style";

const myVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
      duration: 2.5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const Animation = () => {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
      <span>Animation</span>
    </Wrapper>
  );
};
