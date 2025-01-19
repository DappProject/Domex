import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar({open, message}) {
  const vertical = "top"
  const horizontal = "right"

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className=''>
      <Snackbar
        anchorOrigin={{vertical, horizontal}}
        open={open}
        onClose={handleClose}
        autoHideDuration={3}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
}
