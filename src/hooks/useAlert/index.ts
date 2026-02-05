import Swal from 'sweetalert2';
import { useToken } from '@chakra-ui/react';
import './styles.css';
import tinycolor from 'tinycolor2';
import { useTheme } from 'next-themes';
import toast from 'react-hot-toast';
import { useTranslations } from 'use-intl';

export const useAlert = () => {
  const { theme } = useTheme();
  const [primaryColor] = useToken('colors', ['primary.default']);
  const [dangerColor] = useToken('colors', ['danger']);
  const [successColor] = useToken('colors', ['success']);
  const [warningColor] = useToken('colors', ['warning']);
  const [light] = useToken('colors', ['light.0']);
  const [dark] = useToken('colors', ['dark.200']);
  const [darkContrast] = useToken('colors', ['dark.200']);
  const t = useTranslations('alerts');

  const darkenColor = tinycolor(primaryColor).darken(10).toString();

  const toastSuccess = (message: string) => {
    toast.success(message, {
      position: 'top-center',
      style: {
        padding: '16px',
        color: successColor,
        background: theme === 'dark' ? darkContrast : light,
      },
      iconTheme: {
        primary: successColor,
        secondary: '#FFFAEE',
      },
    });
  };

  const confirmAlert = (
    title: string,
    text: string = '',
    confirmButtonText: string = t('acceptText'),
    denyButtonText: string = t('cancelText')
  ) => {
    return new Promise((resolve) =>
      Swal.fire({
        title,
        text,
        showDenyButton: true,
        confirmButtonColor: darkenColor,
        denyButtonColor: dangerColor,
        background: theme === 'dark' ? darkContrast : light,
        iconColor: warningColor,
        color: theme === 'dark' ? light : dark,
        customClass: {
          title: 'swal2-custom-title',
          popup: 'swal2-custom-rounded',
          confirmButton: 'swal2-custom-button',
          denyButton: 'swal2-custom-button',
          cancelButton: 'swal2-custom-button',
        },
        confirmButtonText,
        denyButtonText,
        icon: 'warning',
      }).then((result) => resolve(result.isConfirmed))
    );
  };

  return {
    confirmAlert,
    toastSuccess,
  };
};
