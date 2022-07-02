// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from 'slices/auth';
// import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';
// import EviroConfig from 'config-items';


// const authLogout = () => {
   
//     dispatch(logout());
//     enqueueSnackbar({
//         message: 'User Login Expired',
//         options: {
//             key: new Date().getTime() + Math.random(),
//             variant: 'info',
//         },
//     });
//     navigate(EviroConfig.path.landing.home);


// }
// const doSomethingHandler = () => {
//     dispatch(authLogout(email, password, navigate))
// }

// const authVerify = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
//     const { user: authUser } = useSelector(x => x.auth);
//     useEffect(() => {
//         const expiry = authUser.expiration > Date.now();
//         if (expiry) {
            
//         }

//     }, [dispatch]);
// };

// export default authVerify;