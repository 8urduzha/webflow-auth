import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookAuth from 'react-facebook-auth';
import GoogleAuthorize from 'react-google-authorize';

const responseGoogle = (response) => {
    console.log(response);
}

const MyFacebookButton = ({ onClick }) => (
    <button onClick={onClick}>
        Login with facebook
    </button>
);

const authenticate = (response) => {
    console.log(response);
    // Api call to server so we can validate the token
};

const App = () => (
    <div class="facebook-button-auth">
        <FacebookAuth
            appId="<app-id>"
            callback={authenticate}
            component={MyFacebookButton}
        />
    </div>
);
ReactDOM.render(
    <App />,
    document.getElementById('react-target')
);