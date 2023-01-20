/**
 * @desc: Framer Motion
 * TODO:
 * 1. 사용법 - 컴포넌트기반, animate props
 * 2. Variants
 * 3. 상속받는 애니메이션
 * 4. 자식 애니메이션 컨트롤
 * 5. Gestures
 * 6. Drag
 */

import styled from "styled-components";
import { motion, Variants } from "framer-motion";

// TODO: Variants
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

const boxVariants: Variants = {
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

const gestureVariants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  return (
    <Grid>
      {/* TODO: animate */}
      <Wrapper>
        <Box variants={myVars} initial="start" animate="end" />
        <span>Animation</span>
      </Wrapper>

      {/* TODO: 상속  */}
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

      {/* TODO: gesture */}
      <Wrapper>
        <Box
          variants={gestureVariants}
          whileHover={"hover"}
          whileTap={"click"}
        ></Box>
        <span>Gestures</span>
      </Wrapper>

      {/* TODO: drag */}
      <Wrapper>
        <Box
          drag
          variants={gestureVariants}
          whileHover={"hover"}
          whileDrag={{
            backgroundColor: "#fbc531",
            transition: { duration: 1 },
          }}
          whileTap={"click"}
        ></Box>
        <span>Drag</span>
      </Wrapper>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  height: 100vh;
  width: 100vw;
  place-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px;

  span {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    color: white;
  }
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #fbc531;
  height: 60px;
  width: 60px;
  place-self: center;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
