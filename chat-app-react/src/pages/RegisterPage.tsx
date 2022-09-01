import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import { Logo, Page } from '../utils/styles';

const RegisterPage = () => {
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
      <RegisterForm />
    </Page>
  );
};

export default RegisterPage;
