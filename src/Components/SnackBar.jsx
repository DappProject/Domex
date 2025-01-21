import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function AutohideSnackbar({open, message, variant}) {
  const vertical = "top"
  const horizontal = "right"


  return (
      <div className=''>
        <Snackbar
          anchorOrigin={{vertical, horizontal}}
          open={open}
          autoHideDuration={4000}
          message={message}
          key={vertical + horizontal}

        >
           <Alert severity={variant} sx={{ width: '100%' }} className='mb-[-150px]'>
          {message}
        </Alert>
        </Snackbar>
      </div>
    );
}
