import { useContext, useEffect, useState } from 'react';
import { getAuthUser } from '../api';
import { AuthContext } from '../context/AuthContext';
import { User } from '../types';

export function useAuth() {
  const { user, updateAuthUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        updateAuthUser(data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        setTimeout(() => setLoading(false), 1000);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { user, loading };
}
