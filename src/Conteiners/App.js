import React from "react";
import Main from "./Main.js";
import CreatePost from "./CreatePost.js";
import {Routes, Route, Link} from "react-router-dom";
import {Icon} from "../components/Icon";
import {SearchBar} from "../components/SearchBar";
import {ButtonCreate} from "../components/ButtonCreate";
import DetailPost from "./DetailPost";
import CreateComment from "./AddNewComment";

export default function App() {
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
