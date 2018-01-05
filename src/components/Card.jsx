import React from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import logo from '../static/images/logo.png';
import logo2 from '../static/images/header.png';
import logo4 from '../static/images/7.png';
import logo5 from '../static/images/9.png';
import logo6 from '../static/images/11.png';
import logo7 from '../static/images/12.png';
import logo8 from '../static/images/13.png';
import logo9 from '../static/images/3.png';
import '../static/css/base.css';

import Text from './Text';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 200,
    // animation: 'headChange infinite 1s',
  },
  iconLogo: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    marginLeft: 2,
    marginRight: 2,
  },
  alink: {
    textDecoration: 'none',
    animation: 'logoSpin infinite 10s linear',
  },
  formBox: {
    textAlign: 'center',
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            <img id="logo-png" alt="" className={classes.iconLogo} src={logo2} />
            <img id="logo-png-2" alt="" className={classes.iconLogo} src={logo4} />
            <img id="logo-png" alt="" className={classes.iconLogo} src={logo5} />
            <img id="logo-png-2" alt="" className={classes.iconLogo} src={logo6} />
            <img id="logo-png" alt="" className={classes.iconLogo} src={logo7} />
            <img id="logo-png-2" alt="" className={classes.iconLogo} src={logo8} />
            <img id="logo-png" alt="" className={classes.iconLogo} src={logo9} />
          </Typography>
          <Typography className={classes.formBox} component="div">
            <Text />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/list" className={classes.alink}>
            <Button raised color="primary">Login</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
