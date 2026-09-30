function Dashboard() {
    const stats = [
        { label: "Courses", value: 12, color: "primary" },
        { label: "Students", value: 148, color: "success" },
        { label: "Sections", value: 24, color: "warning" },
        { label: "Registrations", value: 320, color: "info" },
    ];

    return (
        <div>
            <div className="p-5 mb-4 bg-light rounded-3 border">
                <h1 className="display-5 fw-bold">CompusHub Dashboard</h1>
                <p className="fs-5 text-muted mb-0">
                    University course and registration management system.
                </p>
            </div>

            <div className="row g-3">
                {stats.map((s) => (
                    <div className="col-12 col-sm-6 col-lg-3" key={s.label}>
                        <div className={`card border-${s.color} h-100`}>
                            <div className="card-body">
                                <h6 className="text-muted text-uppercase">{s.label}</h6>
                                <h2 className={`fw-bold text-${s.color}`}>{s.value}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;