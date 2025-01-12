import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'
import { samplenotification } from '../constant/Samplechats'
import { ListItem, Avatar } from '@mui/material'
import {memo} from 'react'
const Notifications = () => {
  const friendrequesthandler = ({ _id, accept }) => {
    console.log("handler");
  }
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {
          samplenotification.length > 0 ? (
            samplenotification.map(({sender,_id}) => (
              <NotificationItem 
              sender={sender} 
              _id={_id} 
              handler={friendrequesthandler} 
              key={_id} />
            ))
          ) : (<Typography textAlign={"center"}>0 Notifications</Typography>
          )
        }
      </Stack>
    </Dialog>
  )
}
const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack direction={"row"} spacing={"1rem"} width={"100%"} alignItems={"center"}>
        <Avatar />
        <Typography
          variant='body1'
          sx={{
            flexFlow: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            width: "100%",
          }}
        >{`${name} sent you a friend request`}

        </Typography>
        <Stack direction={{
          xs: "column",
          sm: "row",
        }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>Reject</Button>
        </Stack>
      </Stack>

    </ListItem>
  );
});
export default Notifications;