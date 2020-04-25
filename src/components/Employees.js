import React from "react";
import './style.css';

function Employees(props) {
  return (
    <tr>
      <td><img alt={ props.name } src={ props.image } /></td>
      <td>{ props.firstName } {props.lastName }</td>
      <td>{ props.phone }</td>
      <td>{ props.email }</td>
      <td>{ props.dob }</td>
    </tr>
  );
}

export default Employees;