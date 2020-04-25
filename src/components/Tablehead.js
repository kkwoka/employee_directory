import React from "react";
import './style.css';

function Tablehead(props) {
    return (
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">
                    Name
                    <button onClick={(e) => props.sortEmployeesASC(e)}>Sort A->Z</button>
                    <button onClick={(e) => props.sortEmployeesDESC(e)}>Sort Z->A</button>
                    </th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">D.O.B</th>
            </tr>
        </thead>
    )
}

export default Tablehead;