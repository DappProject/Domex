import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from '@mui/material';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      
    </Box>
  );

  return (
    <div className='md:hidden block'>
      <Button onClick={toggleDrawer(true)}><RxHamburgerMenu/></Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} sx={{backgroundColor : "#ADDAFC"}}>
        {DrawerList} 
      </Drawer>
    </div>
  );
}
