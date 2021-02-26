import { delay, put, take, actionChannel, call } from 'redux-saga/effects'
import { buffers } from 'redux-saga'
import { updateReq } from './actions'
import { fetchInitial, fetchAPI } from '../fetchAPI'

export function* saga() {
  yield take('FETCH')
  const result = yield call(fetchInitial)
  yield put({ type: 'POPULATE_DATA', payload: result })
  let i = 0
  while (i < 1000) {
    yield delay(1000)
    yield put(updateReq())
    i++
  }
}

export function* updateSaga() {
  const requestChan = yield actionChannel('UPDATE_REQ', buffers.sliding(100))
  while (true) {
    yield take(requestChan)
    const data = yield call(fetchAPI)
    yield call(handleReq, data)
  }
}

export function* handleReq(data) {
  yield put({ type: 'UPDATE_DATA', payload: data })
}
