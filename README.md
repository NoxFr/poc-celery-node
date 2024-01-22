# poc-celery-node

## Description
POC for celery with nodejs

## Usage

    docker compose up


Components :
- RabbitMQ http://localhost:15672/#/exchanges
- Celery framework
  - NodeJS client app (send task every 1s)
  - 2 Python workers (consume task and print message)
- Flower (monitoring)  http://localhost:8889/dashboard
