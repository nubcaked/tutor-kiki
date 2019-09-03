import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(0),
  },
  container: {
    backgroundColor: 'pink',
  },
  input: {
    display: 'none',
  },
  phoneIcon: {
    verticalAlign: 'middle',
  },
  box: {
    display: 'inline-block',
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
              <Box className={classes.box} marginX="10px">
                <PhoneIcon fontSize="small" className={classes.phoneIcon} />
                <Typography variant="body2" display="inline">(+65)9169 9955</Typography>
              </Box>
              <Box className={classes.box}>
                <MailIcon fontSize="small" className={classes.phoneIcon} />
                <Typography variant="body2" display="inline">nubzcakez@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Button component={Link} to="/test" className={classes.button}>
                FAQ
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Hidden>
  );
}
