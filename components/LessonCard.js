export default function LessonCard({ lesson }) {
    return (
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold">{lesson.title}</h3>
        <p>{lesson.description}</p>
        <Link href={`/course/${lesson.courseId}/lesson/${lesson.id}`}>
          <a className="text-primary">View Lesson</a>
        </Link>
      </div>
    )
  }
  