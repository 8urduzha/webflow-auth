import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookAuth from 'react-facebook-auth';
import GoogleAuthorize from 'react-google-authorize';

const responseGoogle = (response) => {
      console.log("Google auth response:", response);
  }

  const MyFacebookButton = ({ onClick }) => (
      <button onClick={onClick}>
          Login with facebook
      </button>
  );
  
  const MyGoogleButton = ({ onClick }) => (
      <button onClick={onClick}>
          Login with google
      </button>
  );

  const authenticate = (response) => {
      console.log("Facebook auth response:", response);
      // Api call to server so we can validate the token
  };

  const App = () => (
  	<div>
      <div class="facebook-button-auth">
          <FacebookAuth
              appId="309456571440984"
              callback={authenticate}
              component={MyFacebookButton}
          />
      </div>

			<div class="google-button-auth">
      	<GoogleAuthorize
          clientId="247032413546-muqlcs268a71nd2e65vrs2kkvglksl4f.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          component={MyGoogleButton}
        />,
      </div>
     </div>
  );
  ReactDOM.render(
      <App />,
      document.getElementById("react-target")
  );
