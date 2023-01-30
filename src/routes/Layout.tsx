/**
 * @desc : Layout 화면
 * TODO:
 * 1. layour props 사용
 * 2. layoutId 같은 컴포넌트 가리키기
 * 3. AnimatePresence
 */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Switch } from "../Components/Layouts/Switch";
import { Between } from "../Components/Layouts/Between";
import { Card } from "../Components/Layouts/Card";

function Layout() {
  return (
    <Container>
      <Grid>
        {/* TODO: 스위치 layout 이동 */}
        <Switch />

        {/* TODO: 두 컴포넌트를 하나처럼 */}
        <Between />
      </Grid>

      {/* TODO: 카드 컴포넌트 */}
      <Card />
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

export default Layout;
