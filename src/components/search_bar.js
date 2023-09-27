import React from "react";

export function SearchBar () {
    return(
        < input type="text"
            style={{
                width: "500px",
                height: "30px",
                fontSize: "18px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}/>
    );
}