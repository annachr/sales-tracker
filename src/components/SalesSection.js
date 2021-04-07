import React from 'react'
import DepartmentData from './DepartmentData'
import deptList from '../deptList'

const SalesSection = () => {
  const dept = deptList.map(item => <DepartmentData symbol={item.symbol} name={item.name} bgColor={item.bgColor}/>)
  return (
    <>
      <h1>All Departments Sale Tracker</h1>
      <section className='sales'>
        {dept}
      </section>
    </>
  )
}

export default SalesSection
