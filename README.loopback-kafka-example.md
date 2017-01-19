# loopback-kafka-example
## Requirements
- NodeJS 4.2
- kafka https://kafka.apache.org/quickstart

## Installation
- ```git clone https://github.com/vineet-jain/loopback-kafka-node-red-example.git```
- ```npm install```
- ```node .```

## Testing
- Zookeeper (localhost:2181)
- Kafka (localhost:9092)
- Create Topic in Kafka 
$ bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
- API Explorer (http://localhost:3000/explorer
- Node Red Console (http://localhost/red
- POST http://localhost:3000/api/Events
	Payload will be published to Kafka Queue on topic test

- Seeing the message in Kafka
$ $ bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic testpartitions --from-beginning
