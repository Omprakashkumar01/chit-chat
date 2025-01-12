import React, { memo } from 'react'
import { Box, Typography } from '@mui/material'
import moment from 'moment';
import { Fileformat } from '../../lib/Features';
import RenderAttachments from './RenderAttachments';

const Messagecomponent = ({ message, user }) => {
    const { sender, content, attachments = [], createdAt } = message;
    const samesender = sender?._id === user?._id;
    const typeAgo = moment(createdAt).fromNow();
    return (
        <div style={{
            alignSelf: samesender ? 'flex-end' : 'flex-start',
            backgroundColor: "white",
            color: "black",
            borderRadius: "5px",
            padding: "0.5rem",
            width: "fit-content",
        }}>
            {!samesender &&
                <Typography color="rgb(142, 57, 228)" variant="caption" fontWeight={"600"} >
                    {sender?.name}
                </Typography>
            }
            {content && <Typography variant="body1" >{content}</Typography>}
            {
                attachments.length > 0 && attachments.map((attachment,index) => {
                    const url = attachment.url;
                    const file = Fileformat(url);
                    return <Box key={index} >
                        <a href={url} target="_blank" download style={{
                            color: "black",

                        }} >
                        
                            {RenderAttachments(url, file)}
                        </a>
                    
                    </Box>
            })
            }
            <Typography variant="caption" color="text.secondary" >{typeAgo}</Typography>
        </div>
    )
}

export default memo(Messagecomponent)