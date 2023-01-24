import { useTransform } from "framer-motion";
import { Box, Wrapper } from "./Style";

export const MotionValue = ({ x }: any) => {
  const Trans = useTransform(x, [-600, 600], [-360, 360]);

  return (
    <Wrapper>
      <Box drag="x" style={{ x, rotateZ: Trans }} dragSnapToOrigin />
      <span>⇠ ⇢ motionValue</span>
    </Wrapper>
  );
};
