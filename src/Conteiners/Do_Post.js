//import React, {useState, useEffect} from "react";
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
                <form
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
                        name="inputText"
                        placeholder="Input Text"
                        style={{
                            height: "40px",
                            width: "300px",
                            fontSize: "18px"
                        }}
                    />
                    <br/>
                    <textarea
                        name="textArea"
                        placeholder="Posteo"
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
