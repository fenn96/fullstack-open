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

  export default Course