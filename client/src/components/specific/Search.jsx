import { Dialog, DialogTitle, List, Stack } from '@mui/material'
import React from 'react'
import { useInputValidation } from '6pp'
import { Search as SearchIcon } from '@mui/icons-material'
import { TextField, InputAdornment } from '@mui/material'
import UserItem from '../shared/UserItem'
import { SampleUsers } from '../constant/Samplechats'
import { useState } from 'react'

const Search = () => {
  let isloadingsendfriend = false;
  const [users, setusers] = useState(SampleUsers)
  const addfriendhandler = (id)=>{
    console.log(id)
  }
  const search = useInputValidation("");
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changehandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }} />
        <List>
          {users.map((i) => (
            <UserItem
              key={i._id}
              user={i}
              handler={addfriendhandler}
              handlerisloading={isloadingsendfriend} 

              />
          ))}
        </List>
      </Stack>

    </Dialog>
  )
}

export default Search