import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const Toaster = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
        />
    );
};
