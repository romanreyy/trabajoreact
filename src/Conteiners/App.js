import React from "react";
import Main from "./Main.js";
import CreatePost from "./Do_Post.js";
import LogIn from './logeo';
import CreateAccount from './NewAccount';
import { Routes, Route } from "react-router-dom";
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
