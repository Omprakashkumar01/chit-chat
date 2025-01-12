import { CalendarMonth as Calendar, Face as Faceicon , AlternateEmail as Useremail} from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import moment from 'moment'
const Profile = () => {
    return (
        <Stack direction={"column"} spacing={"2rem"} alignItems={"center"} >
            <Avatar

                sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border: "5px solid white",
                }} />
            <Profilecard heading={"bio"} text={"Name"} />
            <Profilecard heading={"name"} text={"Om Prakash Kumar"} icon={<Faceicon />}/>
            <Profilecard heading={"Username"} text={"@omprakash07"} icon={<Useremail />}/>
            <Profilecard heading={"Joined"} text={moment('2023-11-05T00:00:00.000Z').fromNow()} icon={<Calendar />} />
        </Stack>
    )
}

const Profilecard = ({ text, icon, heading }) => (
    <Stack direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}>
        {icon && icon}
        <Stack>
            <Typography variant={"body1"}>{text}</Typography>
            <Typography color={"grey"} variant={"caption"}>{heading}</Typography>
        </Stack>

    </Stack>
)

export default Profile