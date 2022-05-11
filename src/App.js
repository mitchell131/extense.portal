import { useState , useEffect, useRef } from 'react'
import './app.styles.scss'
import Image from './shared/image.jsx'
import Text from './shared/text.jsx'
import classNames from 'classnames'
import { useAuth } from "react-oidc-context"
import { useToasts } from 'react-toast-notifications'
import LoadingSpinner from "./components/spinner/loadingSpinner.js";

const App = () => {
  const [isDisabled, setIsdisabled] = useState(false)
  const [error, setError] = useState(false)
  
  const {
    addToast,
    removeToast,
    removeAllToasts,
    updateToast,
    toastStack,
  } = useToasts();

  const button_class_names = classNames(
    'text-center',
    'font-bold',
    'bg-yellow',
    'cursor-pointer',
    !isDisabled && 'hover:bg-orange',
    'rounded-xl',
    'relative'
  )

  const ref = useRef(false);

  const auth = useAuth()
  console.log(auth);

  // useEffect(() => {
  //   if(auth && !auth.isAuthenticated) {
  //     console.log("authenticating");
  //     auth.signinRedirect();
  //   }
  //   }, [auth]);

  // useEffect(() => { 
  //   if(auth?.error?.message === '')
  //   addToast(auth?.error?.message, { appearance: 'error',autoDismiss: true})
  // }, [auth?.error]);



  // if (auth.isLoading) {
  //   return <div>Loading...</div>
  // } 

  // if (!auth.isAuthenticated && !auth.isLoading) {
  //     auth.signinRedirect()
  //     .then(function(finalResult) {
  //       console.log('Got the final result: ' + finalResult);
  //     })
  //     .catch(() => {
  //       addToast('Hello', { appearance: 'error',autoDismiss: true})
  //     });
  // }

   if (!auth.isAuthenticated && !auth.isLoading && ref.current === false) {
      auth.signinRedirect().catch((resp) =>  addToast('Server Offline', { appearance: 'error',autoDismiss: true}))
      ref.current = true
  }


  if (auth.isAuthenticated)
    window.history.pushState({}, '', '/'); 


  return (
    <div className='h-screen w-screen w-full wrapper flex justify-center items-center'>
      {auth.isLoading && <LoadingSpinner />}
      {!auth.isLoading && auth.isAuthenticated &&
      <div className='w-3/5 min-w-650 max-w-5xl border shadow-lg'>
      <div className='text-black lg:p-16 p-4 bg-white bg-opacity-50'>
        <div className='container mx-auto 2xl'>
          <div className='header w-2/6 m-auto mt-4'>
            <Image url='./assets/img/main-logo.png' />
          </div>
          <div className='grid grid-cols-3 gap-4 mt-16'>
            <button
              className='text-center font-bold  bg-yellow hover:bg-orange cursor-pointer rounded-xl'
              onClick={() => console.log('Hello')}
            >
              <Image
                url='./assets/img/bullets.png'
                width='150px'
                className='m-auto'
              />
              <Text as='p' size='text-lg' className='mb-4'>
                Dokumentarkiv
              </Text>
            </button>
            <button
              className='text-center font-bold bg-yellow hover:bg-orange cursor-pointer rounded-xl'
              onClick={() => console.log('Hello')}
            >
              <Image
                url='./assets/img/bino.png'
                width='150px'
                className='m-auto'
              />
              <Text as='p' size='text-lg' className='mb-4'>
                Fakturaoppfølging
              </Text>
            </button>
            <button
              className={button_class_names}
              disabled={isDisabled}
              onClick={() => setIsdisabled((state) => !state)}
            >
              {isDisabled && <div id='overlay'></div>}
              <Image
                url='./assets/img/watch.png'
                width='150px'
                className='m-auto'
              />
              <Text size='text-lg' as='p' className='mb-4'>
                Inkasso
              </Text>
            </button>
          </div>
        </div>
      </div>
      <footer className='p-4 shadow p-6 justify-center bg-white bg-opacity-75'>
        <ul className='flex flex-wrap items-center mt-3 text-sm !text-orange justify-center relative'>
          <li>
            <a href='#' className='mr-2 hover:underline mr-6 !text-orange'>
              <Image
                url='./assets/img/main-slash.png'
                className='absolute -bottom-1/4'
                width='20px'
              />
            </a>
          </li>
          <li>
            <a href='#' className='mr-3 md:mr-3 !text-orange'>
              Velkommen til
            </a>
          </li>
          <li className='flex justify-center items-center'>
            <a href='#' className='mr-4 hover:underline md:mr-6 !text-orange'>
              <Image url='./assets/img/main-logo.png' width='110px' />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  }
    </div>
   )
 }
export default App

// to show portal is loading is false and auth.isauthenticated. jekk !isauthenticated && signinredirect