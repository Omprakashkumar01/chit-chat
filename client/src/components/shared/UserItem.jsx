import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { IconButton, ListItem, Stack, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import React, { memo } from 'react'

const UserItem = ({ user, handler, handlerisloading, isadded = false }) => {
    const { name, _id, avatar } = user;
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
                >{name}</Typography>

                <IconButton size="small" onClick={() => handler(_id)} disabled={handlerisloading} >
                    {isadded ? <RemoveIcon
                        sx={{
                            
                            color: "white",
                            bgcolor: "red",
                            borderRadius: "50%",
                            "&:hover": {
                                bgcolor: "red.darken1"
                            }
                            
                        }} /> :
                        <AddIcon sx={{
                            color: "white",
                            bgcolor: "blueviolet",
                            borderRadius: "50%",
                            "&:hover": {
                                bgcolor: "blueviolet.darken1"
                            }
                        }} />
                    }
                </IconButton>
            </Stack>
        </ListItem>

    )
}

export default memo(UserItem)