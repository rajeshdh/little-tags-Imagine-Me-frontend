import authActions from '../../redux/auth/actions';
import LoginTemplate from '../../components/Auth/LoginTemplate';

export default function Register() {
  return (
    <LoginTemplate
      pageHeader="registerNow"
      facebookButtonText="signUPWithFacebook"
      emailLoginHeader="signUpWithEmail"
      submitText="register"
      linksTo="/login"
      linkText="signInInstead"
      showForgotPassword={false}
      authAction={authActions.register}
    />
  );
}
