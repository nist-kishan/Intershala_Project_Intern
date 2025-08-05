import { toast } from 'react-toastify';

const toastConfig = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  closeOnClick: true,
  theme: 'colored', 
};

export const showSuccess = (message) => {
  toast.success(message, toastConfig);
};

export const showError = (message) => {
  toast.error(message, toastConfig);
};

export const showWarning = (message) => {
  toast.warn(message, toastConfig);
};

export const showInfo = (message) => {
  toast.info(message, toastConfig);
};
