export default function CourseCard({ course }) {
    return (
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold">{course.title}</h2>
        <p>{course.description}</p>
        <Link href={`/course/${course.id}`}>
          <a className="text-primary">View Details</a>
        </Link>
      </div>
    )
  }
  