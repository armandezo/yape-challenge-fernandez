// src/kafka/kafkaConsumer.ts

import { Kafka, logLevel } from 'kafkajs';
import { processTransactionStatus } from '../services/transactionService';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR,
});

const consumer = kafka.consumer({ groupId: 'transaction-group' });

const subscribeToTopic = async (topic: string): Promise<void> => {
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });

      // Aquí procesamos el mensaje recibido (por ejemplo, actualizando el estado de la transacción en la base de datos)
      await processTransactionStatus(JSON.parse(message.value.toString()));
    },
  });
};

export { consumer, subscribeToTopic };
