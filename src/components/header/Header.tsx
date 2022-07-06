import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./Header.module.scss";
import React from "react";

function Header() {
  return (
    <div className={styles.root}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar className={styles.toolBar}>
          <Typography variant="h6" className={styles.title}>
            Redux Toolkit Todo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
