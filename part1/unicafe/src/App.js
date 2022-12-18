import { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const Statistics = props => <div>{props.name} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [stats, setStats] = useState({
    good: 0, neutral: 0, bad: 0, sum: 0, all: 0
  })

  const handleGoodClick = () => {
    const newStats = { 
      ...stats,
      good: stats.good + 1,
      sum: stats.sum + 1,
      all: stats.all + 1
    }
    setStats(newStats)
  }

  const handleNeutralClick = () => {
    const newStats = { 
      ...stats, 
      neutral: stats.neutral + 1,
      all: stats.all + 1
    }
    setStats(newStats)
  }

  const handleBadClick = () => {
    const newStats = { 
      ...stats,
      bad: stats.bad + 1,
      sum: stats.sum - 1,
      all: stats.all + 1
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
      <Statistics name='good' value={stats.good} />
      <Statistics name='neutral' value={stats.neutral} />
      <Statistics name='bad' value={stats.bad} />
      <Statistics name='all' value={stats.all} />
      <Statistics name='average' value={stats.sum / stats.all} />
      <Statistics name='positive' value={(stats.good / stats.all) * 100 + " %"} />
    </div>
  )
}

export default App