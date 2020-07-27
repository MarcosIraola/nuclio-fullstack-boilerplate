
export const setJWTInLocalStorage = (token) => {
    const data = {
        token,
    };
    localStorage.setItem('JWT_KEY', JSON.stringify(data));
};

export const getTokenFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('JWT_KEY') || '{}')
};

export const deleteToken = () => {
    localStorage.removeItem('JWT_KEY');
}

// export const isAuthenticated = () => {
//   const token = getTokenFromLocalStorage();
//       // return token.token ? true : false;
//     return !!token.token;
// };