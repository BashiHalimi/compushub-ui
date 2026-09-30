import { useState } from "react";

function Courses() {
    const [courses] = useState([
        { id: 1, code: "CS301", title: "Web Information Systems", credits: 3 },
        { id: 2, code: "CS302", title: "Enterprise Web Applications", credits: 3 },
        { id: 3, code: "CS303", title: "Database Systems", credits: 4 },
        { id: 4, code: "CS304", title: "Software Engineering", credits: 3 },
    ]);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Course Management</h2>
                <button className="btn btn-primary">Add New Course</button>
            </div>

            {/* Add Course Form (UI only) */}
            <div className="card mb-4">
                <div className="card-header bg-white fw-semibold">Add New Course</div>
                <div className="card-body">
                    <form
                        className="row g-3"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="col-md-3">
                            <label className="form-label">Course Code</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. CS305"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Course Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. Mobile Application Development"
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Credits</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="3"
                                min="1"
                                max="6"
                            />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success">
                                Add Course
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Course List */}
            <div className="card">
                <div className="card-header bg-white fw-semibold">Course List</div>
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Code</th>
                                <th>Title</th>
                                <th>Credits</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>
                                        <span className="badge bg-secondary">{course.code}</span>
                                    </td>
                                    <td>{course.title}</td>
                                    <td>{course.credits}</td>
                                    <td className="text-end">
                                        <button className="btn btn-sm btn-outline-primary me-2">
                                            Edit
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Courses;