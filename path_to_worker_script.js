// Use Web Workers to offload intensive tasks
const worker = new Worker('path_to_worker_script.js');
worker.onmessage = function(event) {
  console.log(event.data);
};
worker.postMessage('startTask');
