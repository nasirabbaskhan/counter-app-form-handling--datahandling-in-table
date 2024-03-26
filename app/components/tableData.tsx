"use client";
import { useState } from "react";

export default function TableData() {
  const [students, setStudents] = useState([
    {
      studentName: "Nasir",
      studentRollNo: 123,
      section: "A",
      slug: 1,
    },
    {
      studentName: "Akhtar",
      studentRollNo: 234,
      section: "B",
      slug: 2,
    },
    {
      studentName: "Asad",
      studentRollNo: 653,
      section: "F",
      slug: 3,
    },
    {
      studentName: "Kashif",
      studentRollNo: 765,
      section: "C",
      slug: 4,
    },
    {
      studentName: "Naveed",
      studentRollNo: 6544,
      section: "A",
      slug: 5,
    },
  ]);
  const deleteHander = (slug: number) => {
    let restStudents = students.filter((element) => {
      if (element.slug !== slug) {
        return element;
      }
    });
    setStudents(restStudents);
  };

  return (
    <div>
      {/* table */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Section</th>
            <th>Delete</th>
          </tr>
        </thead>
        {students.map((item, index) => {
          return (
            <>
              <tbody>
                <tr key={index}>
                  <td>{item.studentName}</td>
                  <td>{item.studentRollNo}</td>
                  <td>{item.section}</td>
                  <td>
                    <button
                      onClick={() => deleteHander(item.slug)}
                      className="bg-blue-700 py-1 px-2 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}
