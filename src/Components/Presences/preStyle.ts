import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin: 0 10px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    transition: opacity 0.3s ease-in-out;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Box = styled(motion.div)`
  width: 150px;
  height: 100px;
  position: absolute;
  top: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
