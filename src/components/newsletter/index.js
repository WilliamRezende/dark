import React from "react";
import "./styles.css";

const Newsletter = (props) => {
    return (
        <div className={props.darkMode ? "newsletter newsletterDarkMode" : "newsletter newsletterLightMode"}>
            <center>
                <span id="title">
                    <b>Sign up to my newsletter</b>
                </span>
                <div>
                    <input type="text" id="email" defaultValue="my@email.com"></input>
                    <button type="button" id="submit">
                        Sign up
                    </button>
                </div>
            </center>
        </div>
    );
};

export default Newsletter;
