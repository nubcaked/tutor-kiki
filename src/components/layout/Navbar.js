import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons(props) {
  const classes = useStyles();

  return (
    <Hidden smDown>
      <Container>
        <Grid container justify="space-between" alignItems="center" style={{backgroundColor: props.backgroundColor}}>
          <img src={props.logo} width="250px" />
          <Grid item>
            <Button component={Link} to="/test" className={classes.button}>
              Class Schedule
            </Button>
            <Button className={classes.button}>
              Fees & Promotions
            </Button>
            <Button className={classes.button}>
              Parent Portal
            </Button>
            <Button className={classes.button}>
              Tutor Portal
            </Button>
            <Button className={classes.button}>
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Hidden>
  );
}
