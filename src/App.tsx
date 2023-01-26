import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Title>👋 🅼otion 오신 것을 환영합니다.</Title>
      <Wrapper>
        <Box whileHover={{ scale: 1.2, transition: { duration: 0.8 } }}>
          <Link to="motion">Motion</Link>
        </Box>
        <Box>a</Box>
        <Box>b</Box>
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
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;

  a {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

export default App;
