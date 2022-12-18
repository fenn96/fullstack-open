const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Part = ({ parts }) => {
  return (
    <>
      {parts.map(part => 
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      )}
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
        <Part parts={ parts } />
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce(function (acc, obj) { return acc + obj.exercises; }, 0);
  return (
    <>
      <div><strong>total of {total} exercises</strong></div>
    </>
  )
}

const Course = ({ courses }) => {
  return (
    <>
      {courses.map(course => 
        <div key={course.id}>
          <Header name={ course.name } />
          <Content parts={ course.parts } />
          <Total parts={ course.parts } />
        </div>
      )}
    </>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App
