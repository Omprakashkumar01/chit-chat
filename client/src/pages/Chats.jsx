import { useRef } from 'react'
import React from 'react'
import Applayout from '../components/layout/Applayout'
import { colors, IconButton, Stack } from '@mui/material'
import { AttachFile, Send } from '@mui/icons-material'
import { InputBox } from '../components/Styles/Styledcomp'
import Filemenu from '../components/dialogs/Filemenu'
import { SampleMessages } from '../components/constant/Samplechats'
import Messagecomponent from '../components/shared/Messagecomponent'
const Chats = () => {
  const user = { _id: 'vgdhjek', name: 'new one' }
  const containerRef = useRef(null)
  return <>
    <Stack ref={containerRef}
      boxSizing={'border-box'}
      height={'90%'}
      bgcolor={'rgb(197, 193, 193)'}
      spacing={"2rem"}
      padding={"1rem"}
      sx={{
        overflowX: 'hidden',
        overflowY: 'auto',
      }}>
      {SampleMessages.map((i) => (<Messagecomponent key={i._id} message={i} user={user} />))}
    </Stack>
    <form style={{ height: '10%' }}>
      <Stack direction={'row'}
        height={"100%"}
        padding={"1rem"}
        alignItems={'center'}
        position={'relative'}
        >
        <IconButton sx={{
          position: 'absolute',
          left: "1.5rem",
          rotate: '30deg',
        }}>
          <AttachFile />
        </IconButton>
        <InputBox placeholder='write your message here'/>
        <IconButton type="submit" sx={{
          backgroundColor: 'rgb(142, 57, 228)',
          color: 'white',
          rotate: '-30deg',
          "&:hover": {
            backgroundColor: 'darkviolet',
          }
        }}>
          <Send />
        </IconButton>
      </Stack>
    </form>
    <Filemenu />
  </>

}

export default Applayout()(Chats)