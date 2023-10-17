import React, {useState} from "react";
import Main from "./Main.js";
import CreatePost from "./CreatePost.js";
import LogIn from './LogIn';
import CreateAccount from './NewAccount';
import {Routes, Route, Link} from "react-router-dom";
import {Icon} from "../components/Icon";
import {SearchBar} from "../components/SearchBar";
import {ButtonCreate} from "../components/ButtonCreate";
import {ButtonLogIn} from "../components/ButtonLogIn";
export default function App() {

    const [postList, setPostList] = useState([]);

    const handlePostCreated = (newPost) => {
      setPostList([...postList, newPost]);
    };


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
                        <ButtonLogIn/>
                    </Link>
                    <hr/>
                </nav>
                <Routes>
                    <Route path="/" element={<Main postList={postList} />} />
                    <Route exact path="/CreatePost" element={<CreatePost onPostCreated={handlePostCreated} />} />
                    <Route exact path="/LogIn" element={<LogIn />} />
                    <Route exact path="/CreateAccount" element={<CreateAccount />} />
                   
                </Routes>
            </div>

        );
    }
