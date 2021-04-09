import React from 'react'

const DailyGraph = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div>
      <span className='chart' style={{height: getRandomInt(10, 40)}}> </span>
      <span className='chart' style={{height: getRandomInt(10, 40), marginLeft: 30}}> </span>
      <span className='chart' style={{height: getRandomInt(10, 40), marginLeft: 60}}> </span>
      <span className='chart' style={{height: getRandomInt(10, 40), marginLeft: 90}}> </span>
      <span className='chart' style={{height: getRandomInt(10, 40), marginLeft: 120}}> </span>
      <span className='chart' style={{height: getRandomInt(10, 40), marginLeft: 150}}> </span>
      <span className='chart' style={{height: getRandomInt(10, 40), marginLeft: 180}}> </span>
    </div>
  )
}

export default DailyGraph
