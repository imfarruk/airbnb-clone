import React from 'react'
import {Button,Link,Stack,Box,} from '@mui/material';
import {BsGlobe} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';
import {flexCenter} from '../Theme/commonThemes';

const ProfileSettings = () => {
  return (
    <Box sx={{
        ...flexCenter
    }}>
        <Link href="#">Become A Host</Link>
        <Stack>
            <Button>
                <BsGlobe size={24}/>
            </Button>
            <Button sx={{
                borderRadius:10,
                border:'1px solid #ddd'
            }}>
                <Stack>
                    <AiOutlineMenu size={24}/>
                    <FaRegUserCircle size={24}/>
                </Stack>
            </Button>
        </Stack>
    </Box>
  )
}

export default ProfileSettings