/**
 * @desc: 최상단 메인 페이지
 * NOTE:
 * - Motion 페이지
 * - Presence 페이지
 * - Layout 페이지
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Variants
const HandVars = {
  start: { rotateZ: 0 },
  end: {
    rotateZ: [0, 30, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const whileHover = {
  hover: { scale: 1.2, transition: { duration: 0.8 } },
};

function App() {
  return (
    <Container>
      <Title>
        <Hand variants={HandVars} initial="start" animate="end">
          👋 &nbsp;
        </Hand>
        <p>🅼otion 오신 것을 환영합니다.</p>
      </Title>

      <Wrapper>
        <Box variants={whileHover} whileHover="hover">
          <Link to="motion">Motion</Link>
        </Box>

        <Box variants={whileHover} whileHover="hover">
          <Link to="presence">Presence</Link>
        </Box>

        <Box variants={whileHover} whileHover="hover">
          <Link to="layout">Layout</Link>
        </Box>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  min-height: 60vh;
  margin-top: 50px;
  color: white;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 600;

  p {
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

const Hand = styled(motion.p)`
  font-size: 35px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  width: 100%;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 20px 30px;

  a {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export default App;
