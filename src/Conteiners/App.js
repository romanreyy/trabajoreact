import React from "react";
import '../App.css';
import {SearchBar} from '../components/search_bar';
import {Icon} from '../components/icon';
import {ButtonCreate} from '../components/create_post';
import {Login} from '../components/login';
import {Posts} from '../components/posts';


export default function App() {
    return (
            <div>
                <nav>
                        <Icon/>
                        <br/>
                        <hr/>
                        <SearchBar/>
                        <ButtonCreate/>
                        <Login/>
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
