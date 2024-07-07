// utils/auth.js
export const isLoggedIn = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.expiry > new Date().getTime()) {
            return true;
      }
      return false;
};
