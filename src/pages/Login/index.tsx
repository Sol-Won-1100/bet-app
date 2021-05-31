import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Button, BUTTON_THEME } from '../../components/Button/styles';
import Footer from '../../components/Footer';
import LoginCard from '../../components/LoginCard';
import Title from '../../components/Title';
import { registerPage, logInPage } from '../../modules/login/actions';
import {
  Container,
  Container1,
  LoginContainer,
  SignUpText,
  TitleText,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const loginPage = useSelector(
    (state: RootStateOrAny) => state.login.loginPage
  );

  const handleSingUpPage = () => {
    dispatch(registerPage());
  };

  const handleLoginPage = () => {
    dispatch(logInPage());
  };

  let cardTitle;
  let buttonFunction;

  if (loginPage === 'register') {
    cardTitle = 'Registration';
    buttonFunction = handleLoginPage;
  }
  if (loginPage === 'forgetPassword') {
    cardTitle = 'Reset Password';
    buttonFunction = handleLoginPage;
  }
  if (loginPage === 'login') {
    cardTitle = 'Authentication';
    buttonFunction = handleSingUpPage;
  }

  return (
    <Container>
      <Container1>
        <Title />
        <LoginContainer>
          <TitleText>{cardTitle}</TitleText>
          <LoginCard />
          <Button className={BUTTON_THEME.GHOST} onClick={buttonFunction}>
            <SignUpText>
              {loginPage === 'login' ? 'Sign Up' : 'Back'}
            </SignUpText>
          </Button>
        </LoginContainer>
      </Container1>
      <Footer />
    </Container>
  );
};

export default Login;
