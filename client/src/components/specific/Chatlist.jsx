import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'
const Chatlist = ({
  w = "100%",
  chats = [],
  chatId,
  onlineusers = [],
  newmessagesalert = [{
    chatId: "",
    count: 0,
  }], handledeletechat,
}) => {
  return (
    <Stack width={w} direction={"column"} >
      {chats?.map((data, index) => {
        const { avatar, name, _id, groupchat, members } = data;
        const isonline = members?.some((member) => onlineusers.includes(member));
        const newmessagealert = newmessagesalert.find(({ chatId }) => chatId === _id);
        return <ChatItem
          index={index}
          newmessagealert={newmessagealert}
          isonline={isonline}
          key={_id}
          avatar={avatar}
          name={name}
          _id={_id}
          groupchat={groupchat}
          samesender={chatId === _id}
          handledeletechat={handledeletechat}
        />
      })}
    </Stack>
  )
}

export default Chatlist