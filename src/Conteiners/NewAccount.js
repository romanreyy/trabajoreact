import {Link} from "react-router-dom";
import {Icon} from "../components/icon";
import {SearchBar} from "../components/search_bar";
import {ButtonCreate} from "../components/create_post";
import {Login} from "../components/login";
import React from "react";

export default function CreateAccount () {
    return(
        <div>
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
            <form>
                <h1
                    style={{
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    Crear Usuario
                </h1>
                <input type="text" placeholder="nombre de usuario"
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
                <input type="password" placeholder="contraseña"
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
                <input type="submit" value="crear usuario"
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
            </form>
        </div>
    );
}