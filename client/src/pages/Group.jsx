import { KeyboardBackspace, Menu } from '@mui/icons-material'
import { Box, Drawer, Grid, IconButton, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen , setisMobileMenuOpen] = useState(false);
  const navigateback = () => {
    navigate('/');
  }
  const handlemobile = () =>{
    setisMobileMenuOpen((prev) => !prev);
  }
  const handleclose =() =>{
    setisMobileMenuOpen(false);
  }
  const IconBtns = <>
    <Box sx={{
      display: {
        xs: "block",
        sm: "none",
        position: "fixed",
        right: "1rem",
        top: "1rem",
      }
    }}>

      <IconButton onClick={handlemobile}>
        <Menu />
      </IconButton>
    </Box>

    <Tooltip title="back">
      <IconButton sx={{
        position: "absolute",

        bgcolor: "#1c1c1c",
        color: "white",
        "&:hover": {
          bgcolor: "rgba(0,0,0,0.6)"
        }
      }}
        onClick={navigateback}>
        <KeyboardBackspace />
      </IconButton>
    </Tooltip>
  </>;
  return <Grid container height={"100vh"}>
    <Grid item sx={{
      display: {
        xs: "none",
        sm: "block"
      }
    }}
      sm={4}
      bgcolor={"bisque"}
    >
      group list
    </Grid>
    <Grid item
      xs={12}
      sm={8}
      sx={{
        display: "flex",
        flexdirection: "column",
        alignitems: "center",
        position: "relative",
        padding: "1rem 3rem",
      }}>
      {IconBtns}
    </Grid>
    <Drawer sx={{
      display:{
        xs: "block",
        sm: "none"
      }
    }} open ={isMobileMenuOpen} onClose={handleclose}>
      hgfd
    </Drawer>
  </Grid>
}

export default Group