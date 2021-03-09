import authActions from '../../redux/auth/actions';
import LoginTemplate from '../../components/Auth/LoginTemplate';

export default function Login() {
  return (
    <LoginTemplate
      pageHeader="loginNow"
      facebookButtonText="loginWithFacebook"
      emailLoginHeader="loginWithEmail"
      submitText="login"
      linksTo="/register"
      linkText="signUpInstead"
      showForgotPassword
      authAction={authActions.login}
    />
  );
}
