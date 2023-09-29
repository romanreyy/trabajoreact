import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "../components/icon";
import {SearchBar} from "../components/search_bar";
import {ButtonCreate} from "../components/create_post";
import {Login} from "../components/login";
export default function CreatePost (){
    return (
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