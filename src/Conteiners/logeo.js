export default function LogIn (){
        return (
            <div className="logeo"
                 style={{
                     margin: "0 auto",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     width:"500px",
                     height: "1230px",
                     placeItems: "center"
                 }}
            >
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
