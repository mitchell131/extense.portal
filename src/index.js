import ReactDOM from 'react-dom'
import App from './App'
import Health from './components/health/health.jsx'
import { AuthProvider } from "react-oidc-context";
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/signin-oidc" element={<App />} />
                    <Route path="/actuator" element={<Health />} />
                    <Route path="/actuator/health" element={<Health />} />
                    <Route path="/actuator/health/readiness" element={<Health />} />
                    <Route path="/actuator/health/liveness" element={<Health />} />
                    <Route path="/actuator/health/startyup" element={<Health />} />
                </Routes>
            </BrowserRouter>
        </ToastProvider>
    </AuthProvider>, 
document.getElementById('root'))
