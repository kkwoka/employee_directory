import React from "react";
import './style.css';

function DOMHeader(props) {
    return (
        <div>
            <div className="header">
                <h1> Employee Directory</h1>
                <p> Click on buttons to filter by heading or use the search bar to narrow your results.</p>
            </div>

            <input 
                name="search"
                type="text"
                placeholder="Search"
                id="search"
                onChange={(e) => props.searchEmployees(e)}
            />
        </div>
    )
}

export default DOMHeader;