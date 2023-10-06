import React from "react";
export default function CreatePost (){
        return (
            <div>
                <form onSave={handleSubmit}
                      style={{
                          margin: "0 auto",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                      }}
                >
                    <h1>Crea tu Post</h1>
                    <br/>
                    <input
                        type="text"
                        name="titulo"
                        placeholder="titulo"
                        style={{
                            height: "40px",
                            width: "300px",
                            fontSize: "18px"
                        }}
                    />
                    <br/>
                    <textarea
                        name="textArea"
                        placeholder="Contenido"

                        style={{
                            height: "200px",
                            width: "500px",
                            fontSize: "14px"
                        }}
                    />
                    <br/>
                    <button type="submit" value="Postear"
                           style={{
                               height: "40px",
                               width: "100px"
                           }}
                    />
                </form>
            </div>
        );
    }
