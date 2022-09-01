import { LoginForm } from '../components/forms/LoginForm';
import { Logo, Page } from '../utils/styles';

export const LoginPage = () => {
  return (
    <Page
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: '-30px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Logo src='logo.png' alt='' />
      </div>
      <LoginForm />
    </Page>
  );
};
