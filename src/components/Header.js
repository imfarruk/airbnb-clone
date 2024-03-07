import React from 'react'
import {Box,Container} from '@mui/material'

// components
import Logo from './Logo';
import ProfileSetting from './ProfileSettings';
import { dFlex, displayOnDesktop, flexBetweenCenter } from '../Theme/commonThemes';
import LocationSearch from './LocationSearch';
import MobileSearch from './MobileSearch';

const Header = () => {
  return (
    <Box sx={{
        ...dFlex,
        minHeight:70,
        borderBottom:'1px solid #ddd',
    }}>
        <Container maxWidth='xl'>
            <Box 
            sx={{
                ...flexBetweenCenter,
                minHeight:90,
                px:4
            }}>
                <Box sx={displayOnDesktop}>
                  <Logo/>
                </Box>
                <Box sx={displayOnDesktop}>
                <LocationSearch/> 
                </Box>
                <Box sx={displayOnDesktop}>
                <ProfileSetting/>
                </Box>
                <Box sx={{display:{xs:'flex',md:'none'}}}>
                <MobileSearch/>
                </Box>
                
                
                
            </Box>
        </Container>
    </Box>
  )
}

export default Header;