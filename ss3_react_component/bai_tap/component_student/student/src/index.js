import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StudentComponent from './components/StudentInfoComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
const students = [
  {
    id: 1,
    name: 'Toni Kross',
    age: 18,
    address: 'Germany'
  },
  {
    id: 2,
    name: 'Christian Pulisic',
    age: 17,
    address: 'USA'
  },
  {
    id: 3,
    name: 'Cong Phuong',
    age: 16,
    address: 'Viet Nam'
  },
  {
    id: 4,
    name: 'Kasukei Honda',
    age: 19,
    address: 'Japan'
  },
  {
    id: 5,
    name: 'Thiago Silva',
    age: 20,
    address: 'Brasil'
  },
  {
    id: 6,
    name: 'Angel Dimaria',
    age: 17,
    address: 'Argentina'
  }
];

root.render(
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {
        students.map(student =>
          (<StudentComponent student={student} />)
        )
      }
    </tbody>
  </table>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
