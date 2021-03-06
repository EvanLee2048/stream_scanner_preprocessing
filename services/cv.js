class cv {
  /**
   * We will use this method privately to communicate with the worker and
   * return a promise with the result of the event. This way we can call
   * the worker asynchronously.
   */
  _dispatch(event) {
    const { msg } = event
    this._status[msg] = ['loading']
    this.worker.postMessage(event)
    return new Promise((res, rej) => {
      let interval = setInterval(() => {
        const status = this._status[msg]
        if (status[0] === 'done') res(status[1])
        if (status[0] === 'error') rej(status[1])
        if (status[0] !== 'loading') {
          delete this._status[msg]
          clearInterval(interval)
        }
      }, 50)
    })
  }

  /**
   * First, we will load the worker and capture the onmessage
   * and onerror events to always know the status of the event
   * we have triggered.
   *
   * Then, we are going to call the 'load' event, as we've just
   * implemented it so that the worker can capture it.
   */
  load() {
    this._status = {}
    //Worker 1
    this.worker = new Worker('/js/cv.worker.js') 
    //Worker 2
    this.worker_2 = new Worker('/js/cv.worker.js')
    //Worker 3
    this.worker_2 = new Worker('/js/cv.worker.js')


    // Capture events and save [status, event] inside the _status object
    this.worker.onmessage = (e) => (this._status[e.data.msg] = ['done', e])
    this.worker.onerror = (e) => (this._status[e.data.msg] = ['error', e])
    return this._dispatch({ msg: 'load' })
  }

  imageProcessing(payload) {
    return this._dispatch({ msg: 'imageProcessing', payload })
  }
}



// Export the same instant everywhere
export default new cv()