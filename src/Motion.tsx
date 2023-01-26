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
 * 8. Scroll Animation
 * 9. SVG Animation
 */

import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

import { Animation } from "./Components/Motions/Animation";
import { Variants } from "./Components/Motions/Variants";
import { Gestures } from "./Components/Motions/Gestures";
import { SvgPath } from "./Components/Motions/SvgPath";
import { MotionValue } from "./Components/Motions/MotionValue";
import { ScrollView } from "./Components/Motions/ScrollView";
import { Drag } from "./Components/Motions/Drag";

// TODO: Variants

function Motion() {
  let x = useMotionValue(0);

  const gradient = useTransform(
    x,
    [-600, 0, 600],
    [
      "linear-gradient(135deg,#0083ee,#00eeea)",
      "linear-gradient(135deg,#ee0099,#7700ee)",
      "linear-gradient(135deg,#00eeab,#eeba00)",
    ]
  );

  // 값을 확인하는 용도
  // useEffect(() => {
  //   // x.onChange(() => console.log(x.get()));
  //   Trans.onChange(() => console.log(x.get()));
  // }, [x]);

  return (
    <Grid style={{ background: gradient }}>
      {/* TODO: animate */}
      <Animation />

      {/* TODO: 상속  */}
      <Variants />

      {/* TODO: gesture */}
      <Gestures />

      {/* TODO: Svg animation */}
      <SvgPath />

      {/* TODO: MotionValue */}
      <MotionValue x={x} />

      {/* TODO: Scroll animation */}
      <ScrollView />

      {/* TODO: drag */}
      <Drag />
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 50vh);
  grid-gap: 20px;
  height: 160vh;
  width: 100vw;
  place-items: center;
`;

export default Motion;
