const celery = require('celery-node');

const client = celery.createClient(
    "amqp://broker:5672",
    "amqp://broker:5672",
    );

function sendTask() {
    const task = client.createTask("tasks.add");
    const result = task.applyAsync([1, 2]);
    console.log("Calling task...");
    result.get().then(data => {
        console.log(data);
    });
}

setInterval(sendTask, 1000);
