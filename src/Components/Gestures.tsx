import { Box, Wrapper } from "./Style";

const gestureVariants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

export const Gestures = () => {
  return (
    <Wrapper>
      <Box
        variants={gestureVariants}
        whileHover={"hover"}
        whileTap={"click"}
      ></Box>
      <span>Gestures</span>
    </Wrapper>
  );
};
