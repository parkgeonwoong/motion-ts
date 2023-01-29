/**
 * @desc : 최상단 화면
 * App : 메인 화면
 * Motion : Framer Motion 화면
 */

import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";

const Root = () => {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />

      <Home onClick={() => navigate("/")} whileHover={{ y: -8 }}>
        <AiOutlineHome style={{ fontWeight: "bold" }} />
      </Home>
    </>
  );
};

const Home = styled(motion.button)`
  position: fixed;
  bottom: 1rem;
  right: 0.6rem;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default Root;
