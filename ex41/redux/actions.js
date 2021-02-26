export const popData = function (initData) {
  return { type: 'POPULATE_DATA', payload: initData }
}

export const updateData = function (data) {
  return { type: 'UPDATE_DATA', payload: data }
}

export const fetch = function () {
  return { type: 'FETCH' }
}

export const updateReq = function () {
  return { type: 'UPDATE_REQ' }
}
