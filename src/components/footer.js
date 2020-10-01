import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: theme.spacing(15),
    backgroundColor: '#EEEEEE'

  }

}));


export default () => {

  const classes = useStyles();

  return (
    <Grid container justify="center" alignContent="center" className={classes.footer}>

      <Typography variant="body2">&copy; 2020 Josh Williams</Typography>
    </Grid>
  );
}
