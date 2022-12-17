const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.part} {props.exercises}
    </p>
  )
}

const Content = () => {
  return (
    <div>
        <Part part='Fundamentals of React' exercises='10' />
        <Part part='Using props to pass data' exercises='7' />
        <Part part='Fundamentals of React' exercises='14' />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
        Number of exercises {props.total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
