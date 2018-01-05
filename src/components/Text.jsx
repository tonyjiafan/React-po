import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
  },
});

class ComposedTextField extends React.Component {
  state = {
    name: 'TonyJiafan',
    pasword: '',
    age: '18',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-simple">User</InputLabel>
          <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
          <FormHelperText id="name-helper-text">Your UserName</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
          <InputLabel htmlFor="name-helper">Pasword</InputLabel>
          <Input id="name-helper" value={this.state.pasword} onChange={this.handleChange} />
          <FormHelperText id="name-helper-text">Your PasWord</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} disabled>
          <InputLabel htmlFor="name-disabled">Age</InputLabel>
          <Input id="name-disabled" value={this.state.age} onChange={this.handleChange} />
          <FormHelperText>Your Age [Disabled]</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);
