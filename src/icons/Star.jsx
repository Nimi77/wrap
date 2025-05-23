import { Box } from "@chakra-ui/react";

export const Star = () => (
  <Box
    as="svg"
    width="22"
    height="22"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 0L14.2328 6.55041L21.4616 7.60081L16.2308 12.6996L17.4656 19.8992L11 16.5L4.53436 19.8992L5.76919 12.6996L0.538379 7.60081L7.76718 6.55041L11 0Z"
      fill="#FFC700"
    />
  </Box>
);

export const EmptyStar = () => (
  <Box
    as="svg"
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 0L14.2328 6.55041L21.4616 7.60081L16.2308 12.6996L17.4656 19.8992L11 16.5L4.53436 19.8992L5.76919 12.6996L0.538379 7.60081L7.76718 6.55041L11 0Z"
      fill="#FFC700"
      fillOpacity="0.2"
    />
  </Box>
);
