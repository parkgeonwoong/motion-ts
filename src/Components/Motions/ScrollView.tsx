import { useScroll, useTransform } from "framer-motion";
import { Box, Wrapper } from "./Style";

export const ScrollView = () => {
  const { scrollYProgress } = useScroll();
  const scrollScale = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <Wrapper>
      <Box
        style={{
          rotateZ: scrollScale,
          transition: "all 1s",
          transitionDuration: "1s",
        }}
        dragSnapToOrigin
      />
      <span>⇣ ScrollView</span>
    </Wrapper>
  );
};
