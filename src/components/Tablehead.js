import React from "react";
import './style.css';

function Tablehead(props) {
    return (
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">
                    Name
                    <button onClick={(e) => props.sortEmployeesASC(e)}>A->Z</button>
                    <button onClick={(e) => props.sortEmployeesDESC(e)}>Z->A</button>
                </th>
                <th scope="col">Phone</th>
                <th scope="col">
                    Email
                    <button onClick={(e) => props.sortEmailASC(e)}>A->Z</button>
                    <button onClick={(e) => props.sortEmailDESC(e)}>Z->A</button>
                </th>
                <th scope="col">
                    D.O.B
                    <button onClick={(e) => props.sortDOBASC(e)}>Oldest->Youngest</button>
                    <button onClick={(e) => props.sortDOBDESC(e)}>Youngest->Oldest</button>

                </th>
            </tr>
        </thead>
    )
}

export default Tablehead;