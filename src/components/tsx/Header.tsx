import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, MouseEvent } from "react";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isHover, setIsHover] = useState(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { name: "Agents", link: "/agents", id: "0" },
    { name: "Maps", link: "/maps", id: "1" },
    {
      name: "Weapons",
      link: "/weapons",
      id: "2",
    },
  ];

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        position: "relative",
        zIndex: 1,
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
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#a4a4a4",
              textDecoration: "none",
              "&:hover": {
                transform: "scale(1.05) !important",
                borderBottom: "1px solid white",
                color: "white",
              },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                  fill={isHover ? "white" : "#a4a4a4"}
                ></path>
              </svg>
            </SvgIcon>
            Valorant
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row-reverse",
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#a4a4a4",
                p: "1px",
                "&:hover": {
                  transform: "scale(1.02) !important",
                  border: "2px solid white",
                  borderRadius: "5px",
                  color: "white",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              keepMounted
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ p: 0 }}
                >
                  <Button
                    sx={{
                      color: "#868686",
                      fontFamily: "Roboto",
                      width: "100%",
                      minWidth: 100,
                      transitionDuration: 0.2,
                      "&:hover": {
                        color: "#1E1E1EB8",
                        textDecoration: "underline",
                      },
                    }}
                    href={page.link}
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{
                  my: 2,
                  color: "#a4a4a4",
                  display: "block",
                  fontFamily: "Roboto",
                  padding: "5px",
                  transitionDuration: 0.2,
                  "&:hover": {
                    transform: "scale(1.1) !important",
                    color: "white",
                    textDecoration: "underline",
                  },
                }}
                href={page.link}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
