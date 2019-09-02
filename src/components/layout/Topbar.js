import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(0),
  },
  container: {
    backgroundColor: "pink",
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons(props) {
  const classes = useStyles(props);

  return (
    <Hidden smDown>
      <div className={classes.container}>
        <Container className={classes.container}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Button component={Link} to="/test" className={classes.button}>
                Class Schedule
              </Button>
            </Grid>
            <Grid item>
              <Button component={Link} to="/test" className={classes.button}>
                Class Schedule
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Hidden>
  );
}
