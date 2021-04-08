import React from 'react'

const Graph = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <div className='graphData'>
      <div className='numbers'>
        <p>100</p>
        <p>50</p>
        <p>0</p>
      </div>
      <div className='scale'>
        <table className='smallTable'>
          <tr className='smallRow'>
            <td> </td>
          </tr>
          <tr className='smallRow'>
            <td> </td>
          </tr>
          <tr className='smallRow'>
            <td> </td>
          </tr>
          <tr className='smallRow'>
            <td> </td>
          </tr>
        </table>
        {/*<p>100 ―</p>*/}
        {/*<p>―</p>*/}
        {/*<p>50 ―</p>*/}
        {/*<p>―</p>*/}
        {/*<p>0</p>*/}
      </div>
      <div className='graph'>
        <table className='bigTable'>
          <tr className='bigRow'>
            <td> </td>
          </tr>
          <tr className='bigRow'>
            <td> </td>
          </tr>
          <tr className='bigRow'>
            <td> </td>
          </tr>
          <tr className='bigRow'>
            <td> </td>
          </tr>
        </table>
        <div className='spans'>
          <span className='chart' style={{height: getRandomInt(10, 40)}}> </span>
          <span className='chart' style={{height: getRandomInt(10, 40)}}> </span>
          {/*<span style={{height: getRandomInt(10, 40)}}> </span>*/}
          {/*<span style={{height: getRandomInt(10, 40)}}> </span>*/}
          {/*<span style={{height: getRandomInt(10, 40)}}> </span>*/}
          {/*<span style={{height: getRandomInt(10, 40)}}> </span>*/}
          {/*<span style={{height: getRandomInt(10, 40)}}> </span>*/}
          {/*<span style={{height: getRandomInt(10, 40)}}> </span>*/}
        </div>

      </div>
    </div>

  )
}

export default Graph
