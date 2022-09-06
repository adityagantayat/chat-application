import axios, { AxiosRequestConfig } from 'axios';
import { CreateUserParams, UserCredentialsParams } from './types';

const BASE_URL = process.env.REACT_APP_API_URL;
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = async (data: CreateUserParams) =>
  axios.post(`${BASE_URL}/auth/register`, data, config);

export const postLoginUser = async (data: UserCredentialsParams) =>
  axios.post(`${BASE_URL}/auth/login`, data, config);
