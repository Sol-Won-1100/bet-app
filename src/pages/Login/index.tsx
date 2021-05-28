import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import LoginCard from '../../components/LoginCard';
import Title from '../../components/Title';
import { registerPage, logInPage } from '../../modules/login/actions';
import {
  Container,
  Container1,
  LoginContainer,
  SignUpButton,
  TitleText,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const loginPage = useSelector(
    (state: RootStateOrAny) => state.login.loginPage
  );

  let cardTitle;

  if (loginPage === 'register') {
    cardTitle = 'Registration';
  }
  if (loginPage === 'forgetPassword') {
    cardTitle = 'Reset Password';
  }
  if (loginPage === 'login') {
    cardTitle = 'Authentication';
  }

  let buttonFunction;

  const handleSingUpPage = () => {
    dispatch(registerPage());
  };

  const handleLoginPage = () => {
    dispatch(logInPage());
  };

  if (loginPage === 'login') {
    buttonFunction = handleSingUpPage;
  } else {
    buttonFunction = handleLoginPage;
  }

  return (
    <Container>
      <Container1>
        <Title />
        <LoginContainer>
          <TitleText>{cardTitle}</TitleText>
          <LoginCard />
          <SignUpButton onClick={buttonFunction}>
            {loginPage === 'login' ? 'Sign Up' : 'Back'}
          </SignUpButton>
        </LoginContainer>
      </Container1>
      <Footer />
    </Container>
  );
};

export default Login;
