import ReactDOM from 'react-dom'
import App from './App'
import { AuthProvider } from "react-oidc-context";
import { ToastProvider, useToasts } from 'react-toast-notifications';

import './index.scss'

const oidcConfig = {
    authority: process.env.OIDC_AUTHORITY_URI,
    redirect_uri: process.env.OIDC_REDIRECT_URI,
    post_logout_redirect_uri: process.env.OIDC_POST_LOGOUT_REDIRECT_URI, 
    client_id: process.env.OIDC_CLIENT_ID,
    response_type: process.env.OIDC_RESPONSE_TYPE,
    use_pkce: process.env.OIDC_USE_PKCE,
    scope: process.env.OIDC_SCOPE
  };

ReactDOM.render(
    <AuthProvider {...oidcConfig}>
        <ToastProvider>
             <App />
        </ToastProvider>
    </AuthProvider>, 
document.getElementById('root'))
