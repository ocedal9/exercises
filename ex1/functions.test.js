const runBatches = require('./functions');
const taskFactorySample = (delay, resolve, val) =>
  () => new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val))
const tasks = [
  taskFactorySample(500, true, 1),
  taskFactorySample(1000, true, 2),
  taskFactorySample(5000, false, 'error'),
  taskFactorySample(2000, true, 4),
  taskFactorySample(1000, false, 'error'),
  taskFactorySample(1000, false, 'error'),
];
const pool_size = 2

const tasks2 = [
  taskFactorySample(1000, true, 1),
  taskFactorySample(1000, true, 2),
  taskFactorySample(1000, false, 'error'),
  taskFactorySample(1000, true, 4),
  taskFactorySample(1000, false, 'error'),
  taskFactorySample(1000, false, 'error'),
];

const tasks3 = [
  taskFactorySample(1000, true, 1),
  taskFactorySample(1000, true, 2),
];
const pool_size3 = 3



test('index 0 value', async () => {
  const data = await runBatches(tasks, pool_size)
  expect(data[0].value).toBe(1); console.log(data)
}, 10000
)

test("get all responses", () => {

  return runBatches(tasks, pool_size).then((data) => {
    expect(data.length).toBe(tasks.length);
  }
  )
}, 10000)

test('running time!! pool size 1, 6 tasks, 1 second each, must be 6000 ms', async () => {
  const pool_size2 = 1
  const start = Date.now()
  await runBatches(tasks2, pool_size2)
  const end = Date.now()
  const time = (end - start)
  const extraTime = time - 6000
  expect(extraTime).toBeLessThan(50)
}, 10000
)

test('running time!! pool size 2, 6 tasks, 1 second each, must be 3000 ms', async () => {
  const pool_size2 = 2
  const start = Date.now()
  await runBatches(tasks2, pool_size2)
  const end = Date.now()
  const time = (end - start)
  const extraTime = time - 3000
  expect(extraTime).toBeLessThan(50)
}, 10000
)

test('running time!! pool size 3, 6 tasks, 1 second each,, must be 2000 ms', async () => {
  const pool_size2 = 3
  const start = Date.now()
  await runBatches(tasks2, pool_size2)
  const end = Date.now()
  const time = (end - start)
  const extraTime = time - 2000
  expect(extraTime).toBeLessThan(50)
}, 10000
)

test('running 2 tasks with pool_size of 3', async () => {
  const data = await runBatches(tasks3, pool_size3)
  expect(data.length).toBe(2)
}, 10000
)