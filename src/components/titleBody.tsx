import { Grid, Typography, Link } from '@mui/material';

const TitleBody = () => {
  return (
    <Grid item container justifyContent="center" xs={12}>
      <Grid item container justifyContent="center" xs={12}>
        <Typography variant="h3">My MUI App</Typography>
      </Grid>
      <Grid item container justifyContent="center" xs={12}>
        <Typography>A Template By <Link underline='hover' href="https://github.com/zromick">Zac Romick</Link></Typography>
      </Grid>
    </Grid>
  );
}

export default TitleBody;