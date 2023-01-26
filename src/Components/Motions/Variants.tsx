import { Box, Circle, Wrapper } from "./Style";

const boxVariants = {
  start: {
    scale: 0,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.2,
      bounce: 0.5,
      // TODO: 자식 애니메이션까지 컨트롤
      delayChildren: 0.3,
      staggerChildren: 0.3,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const Variants = () => {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        {/* TODO: 부모의 initial, animate를 상속받는데 variants만 지정 */}
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
      <span>Variants</span>
    </Wrapper>
  );
};
