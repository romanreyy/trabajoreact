import React from "react";
export default function CreateAccount () {
    return(
        <div>
            <form>
                <h1 className="titleNewAccount">
                    Crear Usuario hola
                </h1>
                <input className="inputUser" type="text" placeholder="nombre de usuario"/>
                <br/>
                <input className="inputUser" type="password" placeholder="contraseña"/>
                <br/>
                <input className="inputUser" type="submit" value="crear usuario"/>
            </form>
        </div>
    );
}
