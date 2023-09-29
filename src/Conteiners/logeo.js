import {Link} from "react-router-dom";
import {Icon} from "../components/icon";
import {SearchBar} from "../components/search_bar";
import {ButtonCreate} from "../components/create_post";
import {Login} from "../components/login";
import React from "react";

export default function LogIn (){
        return (
            <div className="logeo">
                <nav>
                    <Link to="/">
                        <Icon/>
                    </Link>
                    <br/>
                    <hr/>
                    <SearchBar/>
                    <Link to="/CreatePost">
                        <ButtonCreate/>
                    </Link>
                    <Link to="/LogIn">
                        <Login/>
                    </Link>
                    <hr/>
                </nav>
                <h1
                    style={{
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    Iniciar sesion
                </h1>
                <input type='text' placeholder='usuario'
                       style={{
                           width: "200px",
                           height: "30px",
                           fontSize: "18px",
                           margin: "0 auto",
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "center",
                           alignItems: "center"
                       }}
                />
                <br/>
                <input type='password' placeholder='contraseña'
                       style={{
                           width: "200px",
                           height: "30px",
                           fontSize: "18px",
                           margin: "0 auto",
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "center",
                           alignItems: "center"
                       }}

                />
                <br/>
                <button type='submit'
                        style={{
                            width: "200px",
                            height: "30px",
                            fontSize: "18px",
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                >
                    Entrar
                </button>
                <br/>
                <button type='submit'
                        style={{
                            width: "200px",
                            height: "30px",
                            fontSize: "15px",
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                >
                    Sino tenes cuenta creala aca
                </button>
            </div>
        );
    }
