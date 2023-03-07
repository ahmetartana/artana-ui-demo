import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Container)(() => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  justifyContent: "center",
}));

export const Page404 = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/");
  };

  return (
    <StyledContainer>
      <Box
        sx={{
          maxWidth: 640,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src="/404.png"
          sx={{
            height: { xs: 165, md: 196 },
            width: { xs: 185, md: 217 },
            mx: "auto",
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "64px", md: "96px" },
            fontWeight: "700",
            color: (theme) => theme.palette.info.dark,
          }}
          justifyContent="center"
          mt={{ xs: 2, md: 2 }}
        >
          404
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            width: { xs: "70%", md: "60%" },
            height: "44px",
            fontWeight: "500",
            fontSize: "16px",
            alignItems: "center",
            textAlign: "right",
            color: (theme) => theme.palette.common.white,
            backgroundColor: (theme) => theme.palette.primary.main,
            borderRadius: "8px",
            boxShadow: "none",
            "&:hover": {
              background: "#8bc34a",
            },
            mt: 7,
          }}
          onClick={() => navigateToDashboard()}
        >
          Anasayfa
        </Button>
      </Box>
    </StyledContainer>
  );
};
