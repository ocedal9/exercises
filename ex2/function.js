'use strict'

async function queryRetry(query, maxRetry, delay, useIncrement) {
  let attempt = 0
  let res = null
  while (attempt < maxRetry && !res) {
    let time = 0
    if (useIncrement) {
      time = delay * attempt
    } else if (attempt != 0 && !useIncrement) {
      time = delay
    }
    await new Promise(function (resolve) {
      setTimeout(resolve.bind(null), time);
    })
    const data = await Promise.allSettled([query()])
    const response = data[0]
    status = response.status
    if (status == "fulfilled") {
      res = response.value
    } else {
      attempt++
    }
  }
  return res
}

module.exports = queryRetry