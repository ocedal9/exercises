export function fetchAPI() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const newValue = Math.random() * 40
      resolve(newValue)
    }, 500)
  })
}

export function fetchInitial() {
  return new Promise(function (resolve, reject) {
    let initial = [['x', 'Data']]
    setTimeout(() => {
      for (let i = 1; i <= 100; i++) {
        const newValue = [i, Math.random() * 40]
        initial.push(newValue)
      }
      resolve(initial)
    }, 2000)
  })
}
