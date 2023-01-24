/**
 * @desc: Framer Motion
 * TODO:
 * 1. 사용법 - 컴포넌트기반, animate props
 * 2. Variants
 * 3. 상속받는 애니메이션
 * 4. 자식 애니메이션 컨트롤
 * 5. Gestures
 * 6. Drag, 제약
 * 7. MotionValue
 */

import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

import { Animation } from "./Components/Animation";
import { Variants } from "./Components/Variants";
import { Gestures } from "./Components/Gestures";
import { Drag } from "./Components/Drag";
import { Box, Wrapper } from "./Components/Style";

// TODO: Variants

function App() {
  let x = useMotionValue(0);
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);

  return (
    <Grid>
      {/* TODO: animate */}
      <Animation />

      {/* TODO: 상속  */}
      <Variants />

      {/* TODO: gesture */}
      <Gestures />

      {/* TODO: drag */}
      <Drag />

      {/* TODO: MotionValue */}
      <Wrapper>
        <Box drag="x" style={{ x }} dragSnapToOrigin />
        <span>motionValue</span>
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

export default App;
