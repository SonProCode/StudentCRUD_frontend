import React, { useState, useEffect } from 'react';
import './studentFormCss.css';
function StudentForm({ addStudent, updateStudent, studentToEdit }) {
    const [StudentID, setStudentID] = useState('');
    const [Name, setName] = useState('');
    const [Roll, setRoll] = useState('');
    const [Birthday, setBirthday] = useState('');
    const [Address, setAddress] = useState('');
    const [_id, setID] = useState('');

    useEffect(() => {
        if (studentToEdit) {
            setID(studentToEdit._id);
            setStudentID(studentToEdit.StudentID);
            setName(studentToEdit.Name);
            setRoll(studentToEdit.Roll);
            setBirthday(new Date(studentToEdit.Birthday).toISOString().split('T')[0]);
            setAddress(studentToEdit.Address);
        } else {
            setID('');
            setStudentID('');
            setName('');
            setRoll('');
            setBirthday('');
            setAddress('');
        }
    }, [studentToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentToEdit) {
            updateStudent({ _id, StudentID: Number(StudentID), Name, Roll: Number(Roll), Birthday, Address });
        }
        else {
            addStudent({ StudentID: Number(StudentID), Name, Roll: Number(Roll), Birthday, Address });
        }
        setStudentID('');
        setName('');
        setRoll('');
        setBirthday('');
        setAddress('');
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <input
                type="number"
                placeholder="Student ID"
                value={StudentID}
                onChange={(e) => setStudentID(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Roll"
                value={Roll}
                onChange={(e) => setRoll(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Birthday"
                value={Birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <button type="submit">{studentToEdit ? 'Update Student' : 'Add Student'}</button>
        </form>
    );
}

export default StudentForm;