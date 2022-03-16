import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import ComputerIcon from '@mui/icons-material/Computer';
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);


  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <ComputerIcon sx={{ transform: "scale(2)" }} />
          {(
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="About Me" />
                <Tab label="Education and Experience" />
                <Tab label="Certificates" />
                <Tab label="Contacts" />
              </Tabs>
  
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;