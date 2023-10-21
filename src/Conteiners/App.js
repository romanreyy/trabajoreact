import React from "react";
import Main from "./Main.js";
import CreatePost from "./CreatePost.js";
import {Routes, Route, Link} from "react-router-dom";
import {Icon} from "../components/Icon";
import {ButtonCreate} from "../components/ButtonCreate";
import DetailPost from "./DetailPost";
import CreateComment from "./AddNewComment";

export default function App() {
    return (
            <div>
                <nav>
                    <hr/>
                    <Link to="/">
                        <Icon/>
                    </Link>
                    <br/>
                    <Link to="/CreatePost">
                        <ButtonCreate/>
                    </Link>
                    <Link to="https://github.com/romanreyy/trabajoreact" target="_blank">
                        <img
                            className="iconGitHubProyect"
                            src="https://cdn.icon-icons.com/icons2/3912/PNG/512/github_logo_icon_248225.png"
                            alt="button"
                        />
                    </Link>
                    <hr/>
                </nav>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route exact path="/CreatePost" element={<CreatePost />} />
                    <Route path={`/DetailPost/:id`} element={<DetailPost />}/>
                    <Route path={`/DetailPost/:postId/Comment`} element={<CreateComment />}/>
                </Routes>
            </div>

        );
    }
