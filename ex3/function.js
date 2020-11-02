'use strict'

function delayAction(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null), time)
  })
}

async function fetchFunction(url) {
  await delayAction(1000)
  const response = await fetch(url)
  return response
}

function cancelableFetch(url) {
  var cancelFunction
  var ifCancel = new Promise((resolve, reject) => {
    cancelFunction = reason => {
      reject(reason)
      return finishFirst
    }
  })

  var finishFirst = Promise.race([fetchFunction(url), ifCancel])
    .catch(reason => {
      return Promise.reject(reason)
    })

  finishFirst.cancel = cancelFunction
  return finishFirst
}

module.exports = cancelableFetch