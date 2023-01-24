import { useRef } from "react";
import { Box, Container, Wrapper } from "./Style";

export const Drag = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <Container ref={containerRef}>
        <Box
          drag
          // dragSnapToOrigin
          dragConstraints={containerRef}
          whileDrag={{
            backgroundColor: "#fbc531",
            transition: { duration: 1 },
          }}
        ></Box>
      </Container>
      <span>Drag</span>
    </Wrapper>
  );
};
