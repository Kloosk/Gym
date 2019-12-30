import React from "react";
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {
    const componentClicked = () => console.log('clicked');
    const responseFacebook = (response) => {
        console.log(response);
    };
    return(
        <div>
            <FacebookLogin
                textButton = "Zaloguj przez facebooka"
                appId="528329347893929"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
        </div>
    )
};
export default Facebook