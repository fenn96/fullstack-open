import { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if(((props.good + props.neutral + props.bad)) === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
        <StatisticLine text="average" value={props.sum / (props.good + props.neutral + props.bad)} />
        <StatisticLine text="positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100 + ' %'} />
      </tbody>
    </table>
    )
}

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