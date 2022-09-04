import { Check, UploadFile } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Button,
  FileLabel,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';
import { CreateUserParams } from '../../utils/types';
import styles from './index.module.scss';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';

const RegisterForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserParams>();

  // useEffect(() => {
  //   console.log(file);
  //   getImageUrl();
  // }, [file]);

  const handleFileUpload = (event: any) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = (data: CreateUserParams) => {
    if (file) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            data.image = downloadURL;
            console.log(data.image);
          });
        }
      );
      setFile(null);
    } else {
      data.image = '';
      console.log(data);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField
          id='email'
          type='email'
          {...register('email', {
            required: 'Email is required',
          })}
        />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor='firstName'>First Name</InputLabel>
          <InputField
            type='text'
            id='firstName'
            {...register('firstName', { required: 'First Name is Required' })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor='lastName'>Last Name</InputLabel>
          <InputField
            type='text'
            id='lastName'
            {...register('lastName', { required: 'Last Name is Required' })}
          />
        </InputContainer>
      </section>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <InputField
            type='password'
            id='password'
            {...register('password', { required: 'Password is Required' })}
          />
        </InputContainer>
        {!file ? (
          <>
            <FileLabel htmlFor='file'>
              <UploadFile style={{ marginRight: '5px' }} />
              Upload Photo
            </FileLabel>
            <input type='file' id='file' hidden onChange={handleFileUpload} />
          </>
        ) : (
          <FileLabel>
            <Check
              style={{
                color: 'green',
                marginRight: '5px',
                fontWeight: 800,
                fontSize: '32px',
              }}
            />
            Uploaded
          </FileLabel>
        )}
      </section>
      <Button className={styles.button}>Create my account</Button>
      <div className={styles.footerText}>
        <span>Already have an account? </span>
        <Link to='/login'>
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
