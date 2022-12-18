import { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const Statistics = (props) => (
  <>
    <div>good {props.good}</div>
    <div>neutral {props.neutral}</div>
    <div>bad {props.bad}</div>
    <div>all {props.good + props.neutral + props.bad}</div>
    <div>average {props.sum / (props.good + props.neutral + props.bad)}</div>
    <div>positive {(props.good / (props.good + props.neutral + props.bad)) * 100 + ' %'}</div>
  </>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [stats, setStats] = useState({
    good: 0, neutral: 0, bad: 0, sum: 0
  })

  const handleGoodClick = () => {
    const newStats = { 
      ...stats,
      good: stats.good + 1,
      sum: stats.sum + 1
    }
    setStats(newStats)
  }

  const handleNeutralClick = () => {
    const newStats = { 
      ...stats, 
      neutral: stats.neutral + 1
    }
    setStats(newStats)
  }

  const handleBadClick = () => {
    const newStats = { 
      ...stats,
      bad: stats.bad + 1,
      sum: stats.sum - 1
    }
    setStats(newStats)
  }

  return (
    <div>
      <Header name='give feedback' />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Header name='statistics' />
      <Statistics good={stats.good} neutral={stats.neutral} bad={stats.bad} sum={stats.sum} />
    </div>
  )
}

export default App