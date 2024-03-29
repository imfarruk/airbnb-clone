

import './App.css';
import Header from './components/Header';
import {Box,Container} from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline';
import OptionsTab from 'components/OptionsTab';
import LocationCards from 'components/LocationCards';
import Footer from 'components/Footer';
import FooterMenu from 'components/FooterMenu'
import { displayOnDesktop } from 'Theme/commonThemes';
import MobileFooter from 'components/MobileFooter';
function App() {
 

  return (
    <>
     <CssBaseline/>
     <Box sx={{
       display:'flex',
       flexDirection:'column',
       height:'100vh'
     }}>
      <Box>
      <Header/>
      <OptionsTab/>
      </Box>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        flexGrow:1,
        height:100,
        overflowY:'scroll'
      }}>
      <Container maxWidth='xl' sm={{mb:3}}>
        <LocationCards/>
        <Box sx={{display:{xs:'flex',md:'none'}}}>
        <MobileFooter/>
      </Box>
      </Container>
      </Box>
      <Box sx={{display:{xs:'flex',md:'none'}}}>
        <FooterMenu/>
      </Box>
      
      <Box sx={ displayOnDesktop}>
      <Footer/>
      </Box>
     </Box>
    
    </>
  );
}

export default App;
