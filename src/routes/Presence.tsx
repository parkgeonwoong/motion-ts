/**
 * @desc: 제거되는 시기를 감지하여 작동
 * TODO:
 * 1. AnimatePresence
 */

import styled from "styled-components";
import Fade from "../Components/Presences/Fade";
import Slice from "../Components/Presences/Slice";

function Presence() {
  return (
    <Container>
      {/* 슬라이스 */}
      <Slice />

      {/* 페이드 인,아웃 */}
      <Fade />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export default Presence;
