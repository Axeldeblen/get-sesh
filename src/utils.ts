import { invalidateAll } from '$app/navigation';
import cookies from 'js-cookie';
import { session } from './stores/session';


export const login = () => {
  cookies.set('token', '1234');
  cookies.set('isAuthenticated', true);
  console.log('login');
  // session.set({ isAuthenticated: true, token: '1234' });
  invalidateAll();
};
export const logout = () => {
  console.log('logout');
  cookies.remove('token');
  cookies.remove('isAuthenticated');
  // session.set(null);
  invalidateAll();
};