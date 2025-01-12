import React from 'react'
import Applayout from '../components/layout/Applayout'
import { Typography ,Box } from '@mui/material';
import bot from '../assets/bot.png'
const Home = () => {
  return (
    <Box 
    justifyContent="center" 
    alignItems="center" 
    display="flex" 
    flexDirection="column" 
    height="90.8vh"
    bgcolor="rgb(197, 193, 193)"
     >
      <img src={bot} alt="bot" height={"20%"} />
      <Typography variant="body1" color='grey'  >Select a chat to start messaging</Typography>
    </Box>
  )
}

export default Applayout()(Home);