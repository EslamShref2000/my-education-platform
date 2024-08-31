import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LessonCard from '../../components/LessonCard'

export default function Course({ course }) {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p>{course.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {course.lessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/courses')
  const courses = await res.json()

  const paths = courses.map(course => ({
    params: { id: course.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/courses/${params.id}`)
  const course = await res.json()

  return {
    props: {
      course,
    },
  }
}
