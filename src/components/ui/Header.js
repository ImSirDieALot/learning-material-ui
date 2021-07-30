import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  return (
    <ElevationScroll>
      <AppBar>
        <Typography variant="h3">
          <Toolbar>Sai Krishna</Toolbar>
        </Typography>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
