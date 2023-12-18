import React, { createContext, useEffect, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
   user: null,
   loading: false,
   error: null,
};

const authReducer = (state, action) => {
   switch (action.type) {
      case 'LOGIN_START':
         return {
            ...state,
            loading: true,
            error: null,
         };
      case 'LOGIN_SUCCESS':
         return {
            ...state,
            user: action.payload,
            loading: false,
            error: null,
         };
      case 'LOGIN_FAILURE':
         return {
            ...state,
            user: null,
            loading: false,
            error: action.payload,
         };
      case 'REGISTER_SUCCESS':
         return {
            ...state,
            loading: false,
            error: null,
         };
      case 'LOGOUT':
         return {
            ...state,
            user: null,
         };
      default:
         return state;
   }
};

const AuthContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(authReducer, initialState);

   // Save the user data to localStorage whenever it changes
   useEffect(() => {
      localStorage.setItem('user', JSON.stringify(state.user));
   }, [state.user]);

   return (
      <AuthContext.Provider value={{
         user: state.user,
         loading: state.loading,
         error: state.error,
         dispatch,
      }}>
         {children}
      </AuthContext.Provider>
   );
};

export { AuthContext, AuthContextProvider };
