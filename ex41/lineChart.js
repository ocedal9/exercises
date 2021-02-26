import React, { useEffect } from 'react'
import Chart from 'react-google-charts'
import { useDispatch, useSelector } from 'react-redux'
import { fetch } from './redux/actions'

function LineChart(props) {
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetch())
  })
  return (
    <Chart
      width={'600px'}
      height={'400px'}
      chartType='LineChart'
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: 'Horizontal Values',
        },
        vAxis: {
          title: 'Vertical Values',
        },
      }}
    />
  )
}

export default LineChart
