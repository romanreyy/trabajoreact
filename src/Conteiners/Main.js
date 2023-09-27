import React from "react";
import '../App.css';
import {SearchBar} from '../components/search_bar';
import {Icon} from '../components/icon';
import {ButtonCreate} from '../components/create_post';
import {Login} from '../components/login';
import {Posts} from '../components/posts';
import {Link} from "react-router-dom";


export default function Main() {
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
            <div
                style={{
                    width: "100px",
                    margin: "0 auto",
                    padding: "50px"
                }}
            >
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>

            </div>

        </div>

    );
}