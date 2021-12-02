import { Dispatch, SetStateAction } from 'react';
import { Snackbar } from '@mui/material';
import { SnackbarModel } from '../models';
import { Alert } from '@mui/material';

export interface MUISnackbarProps {
  setSnackbar: Dispatch<SetStateAction<SnackbarModel>>,
  snackbar: SnackbarModel
}

const MUISnackbar = (props: MUISnackbarProps) => {
  const {
    setSnackbar,
    snackbar
  } = props;
  return (
    snackbar.open ?
      <Snackbar
        open={snackbar.open}
        autoHideDuration={10000}
        onClose={() => setSnackbar({ open: false, message: '', severity: 'error' })}
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      : <></>
  )
}

export default MUISnackbar;