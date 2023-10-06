import React from "react";

export default function CreateAccount () {
    return(
        <div>
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
                    Crear Usuario hola
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
