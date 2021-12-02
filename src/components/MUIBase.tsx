import { Dispatch, SetStateAction } from 'react';
import { Grid, Paper, Button, Box } from '@mui/material';
import { SnackbarModel } from '../models';
import MUIProgressBar from './MUIProgressBar';
import MUISteps from './MUISteps';
import TitleBody from './titleBody';
import IntroductionBody from './introductionBody';
import MUISnackbar from './MUISnackbar';
import styles from '../styles.module.scss';

export interface MUIBaseProps {
  setSnackbar: Dispatch<SetStateAction<SnackbarModel>>,
  handleNext: (step: MUISteps) => void;
  handlePrevious: (step: MUISteps) => void;
  handleCancel: () => void;
  nextDisabled: boolean;
  previousDisabled: boolean;
  currentStep: MUISteps;
  snackbar: SnackbarModel,
}

const MUIBase = (props: MUIBaseProps) => {
  const {
    setSnackbar,
    handleNext,
    handlePrevious,
    handleCancel,
    nextDisabled,
    previousDisabled,
    currentStep,
    snackbar,
  } = props;
  return (
    <div>
      <Grid className={styles.components} container spacing={3}>
        <Grid container item xs={10} justifyContent="center">
          <Grid item>
            <Paper elevation={2} className={styles.paper}>
              <TitleBody />
              <div className={styles.progressBar}>
                <MUIProgressBar step={currentStep} />
              </div>
              {currentStep === MUISteps.INTRODUCTION && (
                <IntroductionBody />
              )}
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={10} justifyContent="center">
          <Grid item>
            <Box className={styles.buttonBox}>
              <Grid container xs={12} justifyContent="space-between">
                <Grid item>
                  <Button
                    onClick={() => handleCancel()}
                    variant="contained"
                    color="primary"
                  >
                    Start Over
                  </Button>
                </Grid>
                <Grid item>
                  <Grid container>
                    <div className={styles.buttonMargin}>
                      <Button
                        onClick={() => handlePrevious(currentStep)}
                        variant="contained"
                        color="primary"
                        disabled={previousDisabled}
                      >
                        Previous
                      </Button>
                    </div>
                    <Button
                      onClick={() => handleNext(currentStep)}
                      variant="contained"
                      color="primary"
                      disabled={nextDisabled}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <MUISnackbar
        setSnackbar={setSnackbar}
        snackbar={snackbar}
      />
    </div>
  );
};

export default MUIBase;
