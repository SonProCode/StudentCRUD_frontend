import React from 'react';
import './studentListCss.css';
function StudentList({ students, deleteStudent, handleEdit }) {

    if (!Array.isArray(students) || students.length === 0) {
        return <h2>Student List is empty!</h2>;
    }
    console.log(students);
    return (
        <div>
            <h2>Student List</h2>
            <ul className="student-list">
                {students.map(student => (
                    <li key={student._id} className="student-item">
                        Student {student.StudentID}: {student.Name} (Role: {student.Roll}) - DOB: {new Date(student.Birthday).toLocaleDateString()} - Address: {student.Address}
                        <div className="button-container">
                            <button className="edit-button" onClick={() => handleEdit(student)}>Edit</button>
                            <button className="delete-button" onClick={() => deleteStudent(student._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;