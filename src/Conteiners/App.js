import React from "react";
import Main from "./Main.js";
import CreatePost from "./Do_Post.js";
import LogIn from './logeo';
import CreateAccount from './NewAccount';
import {Routes, Route, Link} from "react-router-dom";
import {Icon} from "../components/icon";
import {SearchBar} from "../components/search_bar";
import {ButtonCreate} from "../components/create_post";
import {Login} from "../components/login";
export default function App() {
    return (
            <div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route exact path="/CreatePost" element={<CreatePost />} />
                    <Route exact path="/LogIn" element={<LogIn />} />
                    <Route exact path="/CrearCuenta" element={<CreateAccount />} />
                </Routes>
            </div>

        );
    }
