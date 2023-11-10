import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Autocomplete } from '@mui/material';
import { Box } from "@mui/material";

function FriendSearch() { 
    return (
        <Box sx = {{ width: 'calc(18vw - 1px)', height: 50, display: 'flex', alignItems:'center', border: 1 }}>
            <Autocomplete
            disabled
            freeSolo
            renderInput={(params) => <InputBase {...params} sx={{ ml: 1, flex: 1 }} placeholder="Search for friends"/>}
            sx={{ width: '100%'}}
            />
            <SearchIcon sx={{mr: 1, my: 0.5}}/>
        </Box>
    );
  }

export default FriendSearch;