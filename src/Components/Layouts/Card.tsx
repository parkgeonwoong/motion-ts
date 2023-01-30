import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export const Card = () => {
  const [clickedId, setClickedId] = useState<null | string>(null);

  return (
    <CardWrapper>
      {/* 카드 레이아웃 생성 */}
      <CardGrid>
        {[1, 2, 3, 4].map((item) => (
          <Box
            onClick={() => setClickedId(item + "")}
            key={item}
            layoutId={item + ""}
          />
        ))}
      </CardGrid>

      {/* 카드 클릭에 따른 변화 레이아웃 (모달) */}
      <AnimatePresence>
        {clickedId ? (
          <Overlay
            onClick={() => setClickedId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={clickedId} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>

      <span>Card Components</span>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    color: white;
  }
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
