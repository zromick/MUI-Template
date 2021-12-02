import {
  Grid,
  Typography,
} from '@mui/material';
import styles from '../styles.module.scss';

const IntroductionBody = () => {
  return (
    <Grid item container justifyContent="center" xs={12}>
      <Grid item container justifyContent="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5">
              Introduction
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid item container justifyContent="center" xs={12} id='introductionBody'>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              Welcome! This app is built using TypeScript, React, and MUI and is hosted on GitHub Pages.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              Click "NEXT" to begin.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default IntroductionBody;