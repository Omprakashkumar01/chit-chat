import React from 'react'
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import { SampleUsers } from '../constant/Samplechats'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'
import { useState } from 'react'
const NewGroup = () => {
  const groupname = useInputValidation("")
  const [members, setmembers] = useState(SampleUsers);
  const [selectedMembers, setselectedMembers] = useState([]);
  const selectmemberhandler = (id) => {
    setselectedMembers((prev) =>
      prev.includes(id) ? prev.filter((j) => j !== id) : [...prev, id]
    );
  };
  console.log(selectedMembers);
  const submithandler = () => {
    console.log("submit");
  }
  const closehandler = () => {
    console.log("close");
  }
  return (
    <Dialog open onClose={closehandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} sx={{ width: "25rem" }} spacing={"2rem"}>
        <DialogTitle variant='h4'>New group</DialogTitle>
        <TextField
          label='Group name'
          value={groupname.value}
          onChange={groupname.changeHandler} />

        <Typography variant="body1" >Select members</Typography>
        <Stack >
          {members.map((i) => (
            <UserItem
              key={i._id}
              user={i}
              handler={selectmemberhandler}
              isadded={selectedMembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} sx={{ marginTop: "1rem" }} justifyContent={"flex-end"} >
          <Button variant='text' color='error' >Cancel</Button>
          <Button variant='contained' onClick={submithandler}>Create</Button>

        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup