import ReactDOM from 'react-dom'
import App from './App'
import { AuthProvider } from "react-oidc-context";

import './index.scss'

const oidcConfig = {
    authority: "https://login.identity.com",
    client_id: "portal_web",
     response_type: "code",
    // response_mode: "query",
     use_pkce: true,
    //save_tokens: true,
    redirect_uri: 'http://localhost:3000/signin-oidc',
    //esponse_type: "id_token token",
    scope: "openid profile email", 
    post_logout_redirect_uri: "http://localhost:3000/signout-oidc", 
  };

ReactDOM.render(
    <AuthProvider {...oidcConfig}>
        <App />
    </AuthProvider>, 
document.getElementById('root'))
