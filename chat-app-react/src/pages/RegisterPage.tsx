import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import { Logo, Page } from '../utils/styles';

const RegisterPage = () => {
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
      <RegisterForm />
    </Page>
  );
};

export default RegisterPage;
