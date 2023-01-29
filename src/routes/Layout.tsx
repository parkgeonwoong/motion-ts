/**
 * @desc : Layout 화면
 * TODO:
 * - layour props 사용
 * - layoutId 같은 컴포넌트 가리키기
 * - AnimatePresence
 */

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "../Components/Layouts/Switch";
import { Between } from "../Components/Layouts/Between";
import { useState } from "react";

function Layout() {
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked((prev) => !prev);
  return (
    <Container>
      <Grid>
        {/* TODO: 스위치 layout 이동 */}
        <Switch />

        {/* TODO: 두 컴포넌트를 하나처럼 */}
        <Between />
      </Grid>

      <CardWrapper onClick={toggle}>
        <CardGrid>
          <Box layoutId="hello" />
          <Box />
          <Box />
          <Box />
        </CardGrid>
        <AnimatePresence>
          {clicked ? (
            <Overlay
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <Box layoutId="hello" style={{ width: 400, height: 200 }} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </CardWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100vw;
  height: 50vh;
  place-items: center;
`;

const CardWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  height: 50vh;
  gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Layout;
