import React from "react";
import '../App.css';
import {Posts} from '../components/posts';

export default function Main() {
    return (
        <div>
            <div
                style={{
                    padding: "20px"
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
