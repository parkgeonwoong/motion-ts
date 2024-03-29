## Motion

|       스택        |         설명          |
| :---------------: | :-------------------: |
|    typeScript     |       타입 관리       |
| styled-components |      스타일 관리      |
| react-router-dom  |      라우팅 관리      |
|   framer-motion   | 애니메이션 라이브러리 |

<br>

## 사용이유?

1. 애니메이션을 편리하게 사용
   <br>
2. 리액트에 친화적인 라이브러리
   <br>
3. 적은 코드량으로 스타일 관리

<br>

## 후기

\- 다양한 애니메이션을 따라해보고 적용해서 쉽게 애니메이션을 다른 프로젝트에 도움이 될 수 있는 프로젝트.

\- 라우터를 추가해서 시도해보고 싶던 애니메이션을 모아놨다.

\- 기초적인 `애니메이션`부터, `제스처`, `스크롤`, `드래그`, `모션값에 따른 동적 애니메이션`, `Svg`, `리액트 컴포넌트 생명주기 감지`, `레이아웃의 변화`, `다른 컴포넌트 사이의 연결` 등을 접했다.

\- 생동감을 불러일으키는 작용들이 "쓸모가 많고, 편리한데?" 생각이 드니까 자주 이용할 것 같다.

<br>

|        값         |                             핵심                              |
| :---------------: | :-----------------------------------------------------------: |
| styled-components |                      styled(motion.Tag)                       |
|      사용법       |                  initial={{}}, animate={{}}                   |
|     Variants      |                          variants={}                          |
|      Gesture      |                     whileHover, whileTap                      |
|    MotionValue    |               useMotionValue(), useTransform()                |
|       Drag        | drag props, whileDrag, dragConstraints(Ref), dragSnapToOrigin |
|      Scroll       |                  useScroll(), useTransform()                  |
|        Svg        |     svg tag, path tag, pathLength, stroke, fill, default      |
|     Presence      |            useState(), AnimatePresence, exit={{}}             |
|    동적 Custom    |                 custom, key, variants 함수화                  |
|      Layout       |                       layout, layoutId                        |
