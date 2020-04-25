import React from 'react';
import './App.css';
import employees from './employees.json';
import Employees from './components/Employees';
import Tablehead from './components/Tablehead';
// import moment from 'react-moment';
import DOMHeader from './components/DOMHeader';

class App extends React.Component {
  state = {
    employees,
    search: "",
    sorted: false
  }

  searchEmployees = event => {
    let searchedFor = event.target.value;
    this.setState({...this.state, search: searchedFor });
  }

  sortEmployeesASC = event => {
    let result = employees.results.sort((a, b) => {
      let nameA = a.name.first.toUpperCase();
      let nameB = b.name.first.toUpperCase();
      if (nameA < nameB) { return -1; }
      if (nameA > nameB) { return 1; }
      return 0;
    });
    // console.log("employees: ",result);
    this.setState({...this.state, sorted: result})
  }

  sortEmployeesDESC = event => {
    let result = employees.results.sort((a, b) => {
      let nameA = a.name.first.toUpperCase();
      let nameB = b.name.first.toUpperCase();
      if (nameA < nameB) { return 1; }
      if (nameA > nameB) { return -1; }
      return 0;
    });
    // console.log("employees: ",result);
    this.setState({...this.state, sorted: result})
  }


  render () {
    const emps = employees.results.filter((employee) => {
      if (this.state.search === "") {
        return employee
      } else if (employee.name.first.toLowerCase().includes(this.state.search.toLowerCase())|| employee.name.last.toLowerCase().includes(this.state.search.toLowerCase())) {
        return employee
      }
    }).map(employee => {
      return (
        <Employees 
          key={employee.name.first + employee.name.last}
          image={employee.picture.thumbnail}
          firstName={employee.name.first}
          lastName={employee.name.last}
          phone={employee.phone} 
          email={employee.email}
          dob={(employee.dob.date).slice(0,-14)}
        />
      )
    })

    return (
      <div>
        <DOMHeader 
          searchEmployees={this.searchEmployees}
        />
        <table className="table table-striped">
          <Tablehead 
            sortEmployeesASC={this.sortEmployeesASC} 
            sortEmployeesDESC={this.sortEmployeesDESC}
          />
            <tbody>
              { emps }
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;