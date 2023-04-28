import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';


const Navbar = () => (
  <Stack direction='row' alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
   <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
    <img src={logo} alt="logo" height={45} color="fff"/> 
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{color: 'white'}} paddingTop={2} pl={2} >
           <span>
            YouTube Clone App
          </span>
        </Typography>
   </Link>
   <SearchBar />
  </Stack>
)


export default Navbar