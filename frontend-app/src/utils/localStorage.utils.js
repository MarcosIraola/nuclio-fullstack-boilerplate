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