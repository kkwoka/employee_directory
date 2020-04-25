import React from "react";
import './style.css';

function Tablehead(props) {
    return (
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col" onClick={(e) => props.sortEmployeesASC(e)}>Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">D.O.B</th>
            </tr>
        </thead>
    )
}

export default Tablehead;