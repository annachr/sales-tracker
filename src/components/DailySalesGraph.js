import React from 'react'
import DailyGraph from './DailyGraph'

const Graph = () => {
  return (
    <div className='graphData'>
      <div className='graphNumbers'>
        <p className='scaleNumber'>100</p>
        <p className='scaleNumber'>50</p>
        <p className='scaleNumber'>0</p>
      </div>

      <div className='graphScale'>
        <table className='scaleTable'>
          <tbody>
            <tr className='scaleRow'>
              <td> </td>
            </tr>
            <tr className='scaleRow'>
              <td> </td>
            </tr>
            <tr className='scaleRow'>
              <td> </td>
            </tr>
            <tr className='scaleRow'>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='graph'>
        <table className='graphTable'>
          <tbody>
            <tr className='graphRow'>
              <td> </td>
            </tr>
            <tr className='graphRow'>
              <td> </td>
            </tr>
            <tr className='graphRow'>
              <td> </td>
            </tr>
            <tr className='graphRow'>
              <td> </td>
            </tr>
          </tbody>
        </table>

        <DailyGraph />

      </div>
    </div>

  )
}

export default Graph
