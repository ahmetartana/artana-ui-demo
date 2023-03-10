import { Box } from "@mui/material";
import { IMBox } from "../../types";

export const MBox = (props: IMBox) => {
  const { children, sx, ...others } = props;
  return (
    <Box
      component="div"
      sx={{
        padding: 1,
        boxShadow: {
          xs: "none",
          md: "0px 4px 6px -4px rgba(24, 39, 75, 0.12), 0px 8px 8px -4px rgba(24, 39, 75, 0.08)",
        },
        borderRadius: 2,
        ...sx,
      }}
      {...others}
    >
      {children}
    </Box>
  );
};
