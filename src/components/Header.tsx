import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "black" }}
      style={{
        position: "relative",
        zIndex: 10000,
        borderBottom: "1px solid grey",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 1,
              display: { md: "flex" },
              fontFamily: "VALORANT",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <SvgIcon viewBox="0 0 35 35" sx={{ mr: 1 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="35"
                viewBox="0 0 100 80"
                width="35"
              >
                <path
                  d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
                  fill="#fff"
                ></path>
              </svg>
            </SvgIcon>
            Valorant
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "VALORANT",
              }}
              href="/agents"
            >
              Agents
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "VALORANT",
              }}
              href="/maps"
            >
              Maps
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
