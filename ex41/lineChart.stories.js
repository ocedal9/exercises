import React from 'react'
import LineChart from './lineChart'
import storeConfig from './redux/store'
import { Provider } from 'react-redux'

const chart = {
  title: 'LineChart',
  component: LineChart,
}
const store = storeConfig
export const Primary = () => (
  <Provider store={store}>
    <LineChart></LineChart>
  </Provider>
)

export default chart
