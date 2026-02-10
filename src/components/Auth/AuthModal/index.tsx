'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { MdLogin } from 'react-icons/md';

interface AuthFormInputs {
  email: string;
  password: string;
}

export function AuthModal() {
  const { signIn, signUp, signInWithGoogle, user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { register, handleSubmit } = useForm<AuthFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submit = async (data: AuthFormInputs) => {
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(data.email, data.password);
        alert('✅ Cuenta creada! Revisa tu email para verificar.');
      } else {
        await signIn(data.email, data.password);
        setShowModal(false);
      }
    } catch (err: any) {
      console.error('Auth error:', err);

      if (err.code === 'auth/email-already-in-use') {
        setError('Este email ya está registrado');
      } else if (err.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else if (err.code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres');
      } else if (err.code === 'auth/user-not-found') {
        setError('Usuario no encontrado');
      } else if (err.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta');
      } else {
        setError('Error al autenticar. Intenta de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithGoogle();
      setShowModal(false);
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      setError('Error con Google. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <div className='relative'>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='flex items-center gap-2 hover:opacity-80'
        >
          <img
            src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`}
            alt='Avatar'
            className='w-8 h-8 rounded-full'
          />
          <span className='text-sm hidden md:block'>{user.displayName || user.email}</span>
        </button>

        {showMenu && (
          <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-2'>
            <div className='px-4 py-2 text-sm text-gray-600 dark:text-gray-400 border-b dark:border-gray-700'>
              {user.email}
            </div>
            <button
              onClick={() => {
                logout();
                setShowMenu(false);
              }}
              className='w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <Dialog.Root key={'auth-modal'} size={'lg'} open={showModal}>
      <Dialog.Trigger asChild>
        <Button
          position={'absolute'}
          right={30}
          borderRadius={'full'}
          top={30}
          onClick={() => setShowModal(true)}
        >
          <MdLogin /> Ingresar
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
                <div className='bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full'>
                  <form onSubmit={handleSubmit(submit)} className='space-y-4'>
                    <div>
                      <label className='block text-sm font-medium mb-2'>Email</label>
                      <input
                        type='email'
                        {...register('email', { required: true })}
                        className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600'
                        autoComplete='email'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium mb-2'>Contraseña</label>
                      <input
                        type='password'
                        {...register('password', { required: true })}
                        className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600'
                        minLength={6}
                        autoComplete={isSignUp ? 'new-password' : 'current-password'}
                      />
                      {isSignUp && (
                        <p className='text-xs text-gray-500 mt-1'>Mínimo 6 caracteres</p>
                      )}
                    </div>

                    {error && (
                      <div className='p-3 bg-red-100 text-red-700 rounded-lg text-sm'>{error}</div>
                    )}

                    <button
                      type='submit'
                      disabled={loading}
                      className='w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium'
                    >
                      {loading ? 'Cargando...' : isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}
                    </button>
                  </form>

                  <div className='mt-6 mb-6'>
                    <div className='relative'>
                      <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t dark:border-gray-600'></div>
                      </div>
                      <div className='relative flex justify-center text-sm'>
                        <span className='px-2 bg-white dark:bg-gray-800 text-gray-500'>
                          O continúa con
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className='w-full py-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 flex items-center justify-center gap-2 disabled:opacity-50 font-medium'
                  >
                    <svg className='w-5 h-5' viewBox='0 0 24 24'>
                      <path
                        fill='#4285F4'
                        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                      />
                      <path
                        fill='#34A853'
                        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                      />
                      <path
                        fill='#FBBC05'
                        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                      />
                      <path
                        fill='#EA4335'
                        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                      />
                    </svg>
                    Google
                  </button>

                  <div className='mt-6 text-center text-sm'>
                    {isSignUp ? (
                      <p>
                        ¿Ya tienes cuenta?{' '}
                        <button
                          onClick={() => {
                            setIsSignUp(false);
                            setError('');
                          }}
                          className='text-blue-500 hover:underline font-medium'
                        >
                          Inicia sesión
                        </button>
                      </p>
                    ) : (
                      <p>
                        ¿No tienes cuenta?{' '}
                        <button
                          onClick={() => {
                            setIsSignUp(true);
                            setError('');
                          }}
                          className='text-blue-500 hover:underline font-medium'
                        >
                          Regístrate gratis
                        </button>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild onClick={() => setShowModal(false)}>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
