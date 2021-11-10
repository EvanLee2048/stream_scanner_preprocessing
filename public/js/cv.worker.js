/**
 *  Here we will check from time to time if we can access the OpenCV
 *  functions. We will return in a callback if it's been resolved
 *  well (true) or if there has been a timeout (false).
 */
 function waitForOpencv(callbackFn, waitTimeMs = 30000, stepTimeMs = 100) {
    if (cv.Mat) callbackFn(true)
    console.log("Worker is working")
    let timeSpentMs = 0
    const interval = setInterval(() => {
      const limitReached = timeSpentMs > waitTimeMs
      if (cv.Mat || limitReached) {
        clearInterval(interval)
        return callbackFn(!limitReached)
      } else {
        timeSpentMs += stepTimeMs
      }
    }, stepTimeMs)
  }
  

  /**
   * This part is a test to see if a function can be called into the main.vue
   * To do this we define a random function that performs a simple action
   * We have to get the inputs correctly and output correctly
   * Also change values in the service cv.js file
   */

  function testFunction() {
    let dst = new cv.Mat();
    console.log(dst);
    // console.log("Version of OpenCV ")
  }

  function imageProcessing({ msg, payload }) {
    const img = cv.matFromImageData(payload)
    let result = new cv.Mat()
  
    // This converts the image to a greyscale.
    cv.cvtColor(img, result, cv.COLOR_BGR2GRAY)
    postMessage({ msg, payload: imageDataFromMat(result) })
  }
  

  /**
   * This exists to capture all the events that are thrown out of the worker
   * into the worker. Without this, there would be no communication possible
   * with the project.
   */


  onmessage = function (e) {
    switch (e.data.msg) {
      case 'load': {
        // Import Webassembly script
        self.importScripts('opencv_v4.2.0.js')

        waitForOpencv(function (success) {
          if (success) postMessage({ msg: e.data.msg })
          else throw new Error('Error on loading OpenCV')
        })
        testFunction()     
        break
      }

      default:
        break
    }
  }
  