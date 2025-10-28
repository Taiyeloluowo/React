import React, { useState } from "react";
import "./App.css";

const StudentGrades = () => {
    // Step 1: Student data
    const studentsData = [
        { id: 1, name: "John Izunya", subject: "English Language", score: 85 },
        { id: 2, name: "Uchechi Igbokwe", subject: "Mathematics", score: 42 },
        { id: 3, name: "Emeka Azubuike", subject: "Accounting", score: 79 },
        { id: 4, name: "Omosewa Atunbi", subject: "English Language", score: 53 },
        { id: 5, name: "Iwarere Bolaji", subject: "Economics", score: 41 },
    ];

    // Step 2: Filter state
    const [filter, setFilter] = useState("All");

    // Step 3: Filter logic
    const filteredStudents = studentsData.filter((student) => {
        if (filter === "Passed") return student.score >= 50;
        if (filter === "Failed") return student.score < 50;
        return true;
    });

    const total = studentsData.length;
    const passed = studentsData.filter((s) => s.score >= 50).length;
    const failed = studentsData.filter((s) => s.score < 50).length;

    return (
        <div className="grade-container">
            <h2>Student Grades List</h2>

            {/* Filter Buttons */}
            <div className="filter-btns">
                <button onClick={() => setFilter("All")}>All</button>
                <button onClick={() => setFilter("Passed")}>Passed</button>
                <button onClick={() => setFilter("Failed")}>Failed</button>
            </div>

            {/* Student List */}
            <ul className="student-list">
                {filteredStudents.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.subject}: {student.score}{" "}
                        {student.score >= 50 ? (
                            <span className="pass">PASS</span>
                        ) : (
                            <span className="fail"> FAIL</span>
                        )}
                    </li>
                ))}
            </ul>

            {/* Summary */}
            <p className="summary">
                Total Students: {total} | Passed: {passed} | Failed: {failed}
            </p>
        </div>
    );
};

export default StudentGrades;
