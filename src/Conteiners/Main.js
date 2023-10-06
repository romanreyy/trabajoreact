import React from "react";
import '../App.css';
import {Posts} from '../components/Posts';

export default function Main() {
    return (
        <div>
            <div className="showPosts">
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