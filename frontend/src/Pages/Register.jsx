import { useState } from 'react';
import RegisterImage from '../Images/Register.png';
import '../Styles/Register.scss';

export default function Register ( ) {

    const [ state, setState ] = useState(

        {
            authStatus: 'Login'
        }
    );

    return (

        <section className = 'Register'>

            <img src = { RegisterImage } alt = '' />

            <form autoComplete = 'off' method = 'POST'>

                <div className = 'card'>

                    <h1>Instagram</h1>

                    <input placeholder = 'email' name = 'email' type = 'email' />
                    <input placeholder = 'password' name = 'password' type = 'password' />
                    <span>Forgot Password</span>
                    <button type = 'submit'>Log in</button>
                </div>

                <div className = 'card'>

                    <span>Don't have an account ? </span>
                    <span>Sign Up !</span>
                </div>
            </form>
        </section>
    );
}