import * as Celery from "celery-ts";

const client: Celery.Client = Celery.createClient({
    brokerUrl: "amqp://broker:5672",
    resultBackend: "rpc://broker:5672",
});

const task: Celery.Task<number> = client.createTask<number>("tasks.add");

function runTask() {
    const result: Celery.Result<number> = task.applyAsync({
        args: [Math.random(), Math.random()],
        kwargs: {},
    });

    result.get()
        .then(result => console.log("Result: " + result))
        .catch(console.error);
}

setInterval(runTask, 1000)