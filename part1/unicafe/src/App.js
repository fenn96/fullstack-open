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
  const [stats, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newStats = { 
      ...stats,
      good: stats.good + 1
    }
    setClicks(newStats)
  }

  const handleNeutralClick = () => {
    const newStats = { 
      ...stats, 
      neutral: stats.neutral + 1
    }
    setClicks(newStats)
  }

  const handleBadClick = () => {
    const newStats = { 
      ...stats,
      bad: stats.bad + 1
    }
    setClicks(newStats)
  }

  return (
    <div>
      <Header name='give feedback' />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Header name='statistics' />
      <Display name='good' value={stats.good} />
      <Display name='neutral' value={stats.neutral} />
      <Display name='bad' value={stats.bad} />
    </div>
  )
}

export default App