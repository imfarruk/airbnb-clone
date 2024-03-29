import React from 'react'
import {Paper,InputBase,IconButton} from '@mui/material';
import {FaSearch} from 'react-icons/fa';
import {VscSettings} from 'react-icons/vsc';

const MobileSearch = () => {
  return (
    <Paper component="form" sx={{
        p:'2px 4px',
        display:'flex',
        alignItems:'center',
        width:{xs:"100%",sm:400},
        border:'1px solid #ccc',
        borderRadius:20
    }}>
        <IconButton sx={{
            p:'10px'
        }}>
            <FaSearch/>
        </IconButton>
        <InputBase sx={{
            ml:1,flex:1
        }} placeholder='Search hear'/>
        <IconButton type='submit' sx={{
            p:'10px'
        }}>
            <VscSettings/>
        </IconButton>
    </Paper>
  )
}

export default MobileSearch