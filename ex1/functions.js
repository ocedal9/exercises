'use strict'
async function runBatches(tasks, pool_size) {
  let task_index = 0
  let thread_array = []
  let result = []

  if (tasks.length < pool_size) {
    while (task_index < tasks.length) {
      thread_array.push(tasks[task_index++]())
    }
    return await Promise.allSettled(thread_array)
  }

  async function next_task(promise) {
    await Promise.allSettled([promise])
    while (task_index < tasks.length) {
      let next_task = tasks[task_index++]()
      thread_array.push(next_task)
      await Promise.allSettled(thread_array)
    }
    if (task_index == tasks.length) {
      return await Promise.allSettled(thread_array)
    }
  }

  async function thread_builder() {
    while (task_index < pool_size) {
      let promise = tasks[task_index++]()
      thread_array.push(promise)
      result = next_task(promise)
    }
    return result
  }
  return thread_builder()
}

module.exports = runBatches