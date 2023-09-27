import React from "react";
export default function CreatePost (){
    return (
            <div>
                <h1>Crea tu Post</h1>
                <br/>
                <input type="text" placeholder="Titulo"/>
                <br/>
                <textarea/>
                <br/>
                <input type="submit" value="Postear"/>
            </div>
    );
}