import React from 'react'
import Graph from './DailySalesGraph'

const DepartmentData = (props) => {
  return (
    <div className='deptInfo'>
      <div className='info'>
        <button className='symbolBtn' style={{backgroundColor: props.bgColor}}>{props.symbol}</button>
        <p>{props.name}</p>
        <input />
        <button className='addTaskBtn'>+</button>
      </div>

      <Graph />
    </div>
  )
}

export default DepartmentData
