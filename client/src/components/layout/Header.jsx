import React from 'react'
import { Suspense, lazy, useState } from 'react'
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import {
  Add as Addicon, Group as Groupicon, Logout as Logouticon, Menu as Menuicon,
  Notifications as Notificationsicon,
  Search as Searchicon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Newgroupdialog = lazy(() => import('../specific/NewGroup'));
const Notificationsdialog = lazy(() => import('../specific/Notifications'));
const Searchdialog = lazy(() => import('../specific/Search'));

const Header = () => {
  const [ismobile, setismobile] = useState(false);
  const [issearch, setissearch] = useState(false);
  const [isgroup, setisgroup] = useState(false);
  const [isnotification, setisnotification] = useState(false);

  const navigateto = useNavigate();
  const handlemobile = () => {
    setismobile(prev => !prev);
  };
  const handlesearch = () => {
    setissearch(prev => !prev);
  };
  const handlegroup = () => {
    setisgroup(prev => !prev);
  };
  const notificationhandler = () => {
    setisnotification(prev => !prev);
  }
  const logouthandler = () => {
    console.log('logout')
  }
  const navigatetogroup = () => navigateto('/group');

  return (
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "blueviolet",
        }}>
        <Toolbar>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color='inherit' onClick={handlemobile}>
              <Menuicon />
            </IconButton>
          </Box>
          <Typography variant="h6"
            sx={{
              display: { xs: "block", sm: "block" },
            }}>
            Chit-Chat
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Iconbtn title={"search"}
              icon={<Searchicon />}
              onClick={handlesearch}
            />
            <Iconbtn title={"New group"}
              icon={<Addicon />}
              onClick={handlegroup}
            />
            <Iconbtn title={"Manage group"}
              icon={<Groupicon />}
              onClick={navigatetogroup}
            />
            <Iconbtn title={"Notification"}
              icon={<Notificationsicon />}
              onClick={notificationhandler}
            />
            <Iconbtn title={"Logout"}
              icon={<Logouticon />}
              onClick={logouthandler}
            />
          </Box>
          {
            issearch && <Suspense fallback={<Backdrop open />}>
              <Searchdialog />
            </Suspense>
          }
          {
            isnotification && <Suspense fallback={<Backdrop open />}>
              <Notificationsdialog />
            </Suspense>
          }
          {
            isgroup && <Suspense fallback={<Backdrop open />}>
              <Newgroupdialog />
            </Suspense>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}
const Iconbtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
};

export default Header