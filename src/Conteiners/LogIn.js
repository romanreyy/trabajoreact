import {Link} from "react-router-dom";
import React from "react";

export default function LogIn (){
        return (
            <div className="logeo">
                <form>
                    <h1 className="titleLogIn">
                        Iniciar sesion
                    </h1>
                    <input className="inputUser" type='text' placeholder='usuario'/>
                    <br/>
                    <input className="inputUser" type='password' placeholder='contraseña'/>
                    <br/>
                    <button className="inputUser" type='submit'>
                        Entrar
                    </button>
                    <br/>
                    <Link to="/CreateAccount">
                        <input className="createUser" type='submit' value="Sino tenes cuenta creala aca"/>
                    </Link>
                </form>
            </div>
        );
    }
