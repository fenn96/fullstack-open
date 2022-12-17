import { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const Display = props => <div>{props.name} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Header name='statistics' />
      <Display name='good' value={good} />
      <Display name='neutral' value={neutral} />
      <Display name='bad' value={bad} />
    </div>
  )
}

export default App