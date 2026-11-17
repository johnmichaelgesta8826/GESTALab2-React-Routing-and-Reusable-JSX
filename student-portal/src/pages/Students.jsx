import StudentCard from "../components/StudentCard";

function Students() {
  return (
    <div>
      <div className="page-header">
        <h1>Students</h1>
        <p>List of students.</p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "26px",
        }}
      >
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
}

export default Students;