import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div>
      <div className="page-header">
        <h1>Courses</h1>
        <p>List of available courses.</p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "26px",
        }}
      >
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;