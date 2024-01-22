from celery import Celery

app = Celery('tasks', broker="amqp://broker:5672", backend="rpc://broker:5672")


@app.task
def add(x, y):
    return x + y
