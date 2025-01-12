import React, { memo } from 'react'
import { Link } from '../Styles/Styledcomp'
import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Avatarcard from './Avatarcard'

const ChatItem = ({
    avatar= [],
    name,
    _id,
    groupchat=false,
    samesender,
    isonline,
    newmessagealert,
    index=0,
    handledeletechat,
    }) => {
  return <Link sx={{
    padding: "0"
  }}
  to={`/chat/${_id}`} 
  onContextMenu={(e) => {handledeletechat(e, _id, groupchat)}}>
    <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: samesender ? "rgb(141, 146, 146)" : 'unset',
        color: samesender ? 'white' : 'unset',
        position: "relative",
    }}>
    <Avatarcard avatar={avatar} />
    <Stack>
        <Typography>{name}</Typography>
        {
            newmessagealert && (
                <Typography>{newmessagealert.count} New messages</Typography>
                
            )
        }

    </Stack>
    {
        isonline && (
            <Box sx={{
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                top: "50%",
                right: "1rem",
                transform: "translateY(-50%)",
            }}></Box>
        )
    }
    </div>
  </Link>
}

export default memo(ChatItem)