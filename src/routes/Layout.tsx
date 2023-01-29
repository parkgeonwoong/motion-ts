/**
 * @desc : Layout 화면
 */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Switch } from "../Components/Layouts/Switch";
import { Between } from "../Components/Layouts/Between";

function Layout() {
  return (
    <Grid>
      {/* TODO: 스위치 layout 이동 */}
      <Switch />

      {/* TODO: 두 컴포넌트를 하나처럼 */}
      <Between />
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100vw;
  height: 100vh;
  place-items: center;
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
`;

export default Layout;
