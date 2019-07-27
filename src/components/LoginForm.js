import React from 'react';
import validator from 'validator';
import axios from 'axios';

axios.defaults.withCredentials = true;

import { StyledInput, SubmitButton } from './LoginForm.styles';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      isValid: false,
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    /* return !!(
      (validator.isEmail(this.state.login) || validator.isMobilePhone(this.state.login)) &&
      this.state.password.length >= 8
    ); */
    return true;
  }

  submitHandler(e) {
    e.preventDefault();

    if (this.validateForm()) {
      axios
        .post('http://192.168.178.36:8080/login', {
          username: this.state.login,
          password: this.state.password,
        })
        .then((response) => {
          console.log(response.data);
        });
    }
  }

  inputHandler(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => {
      this.setState({ isValid: this.validateForm() });
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <StyledInput
          type="text"
          name="login"
          placeholder="Nr tel. lub adres e-mail"
          onChange={this.inputHandler}
          value={this.state.login}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="Hasło"
          onChange={this.inputHandler}
          value={this.state.password}
        />
        <SubmitButton type="submit" value="Zaloguj" disabled={!this.state.isValid} />
      </form>
    );
  }
}

export default LoginForm;
