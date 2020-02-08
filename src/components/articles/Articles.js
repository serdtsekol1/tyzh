import React from "react"

function Articles({match}){
    return <div>{match.params.category}</div>;
}
export default Articles;