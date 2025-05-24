import React, { useState } from "react";
import PaginationControl from "./Pagination";

const employees = [
  { id: 1, firstName: "Alice", lastName: "Johnson" },
  { id: 2, firstName: "Bob", lastName: "Smith" },
  { id: 3, firstName: "Carol", lastName: "Williams" },
  { id: 4, firstName: "David", lastName: "Brown" },
  { id: 5, firstName: "Emma", lastName: "Jones" },
  { id: 6, firstName: "Frank", lastName: "Miller" },
  { id: 7, firstName: "Grace", lastName: "Davis" },
  { id: 8, firstName: "Henry", lastName: "Garcia" },
  { id: 9, firstName: "Isla", lastName: "Rodriguez" },
  { id: 10, firstName: "Jack", lastName: "Martinez" },
  { id: 11, firstName: "Kara", lastName: "Hernandez" },
  { id: 12, firstName: "Liam", lastName: "Lopez" },
  { id: 13, firstName: "Mia", lastName: "Gonzalez" },
  { id: 14, firstName: "Noah", lastName: "Wilson" },
  { id: 15, firstName: "Olivia", lastName: "Anderson" },
  { id: 16, firstName: "Paul", lastName: "Thomas" },
  { id: 17, firstName: "Quinn", lastName: "Taylor" },
  { id: 18, firstName: "Rachel", lastName: "Moore" },
  { id: 19, firstName: "Samuel", lastName: "Jackson" },
  { id: 20, firstName: "Tina", lastName: "Martin" },
  { id: 21, firstName: "Umar", lastName: "Lee" },
  { id: 22, firstName: "Vera", lastName: "Perez" },
  { id: 23, firstName: "Walter", lastName: "White" },
  { id: 24, firstName: "Xena", lastName: "Clark" },
  { id: 25, firstName: "Yara", lastName: "Lewis" },
  { id: 26, firstName: "Zane", lastName: "Walker" },
  { id: 27, firstName: "Ava", lastName: "Hall" },
  { id: 28, firstName: "Ethan", lastName: "Allen" },
  { id: 29, firstName: "Nina", lastName: "Young" },
  { id: 30, firstName: "Oscar", lastName: "King" },
];

export default function Employees() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedEmployees = employees.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div>
      <h1>Employees</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>First Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{employee.id}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{employee.firstName}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{employee.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Pagination</h2>
      <PaginationControl
        initialPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}