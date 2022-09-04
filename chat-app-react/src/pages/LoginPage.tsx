import { LoginForm } from '../components/forms/LoginForm';
import { Logo, Page } from '../utils/styles';

export const LoginPage = () => {
  return (
    <Page
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      style={{
        flexDirection: 'column',
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
