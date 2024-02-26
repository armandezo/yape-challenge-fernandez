// src/services/kafkaConsumerService.ts

import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR,
});

const consumer = kafka.consumer({ groupId: 'transaction-group' });

export const subscribeToKafkaTopic = async (topic: string, callback: (message: any) => Promise<void>): Promise<void> => {
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
      // Llamar al callback proporcionado para procesar el mensaje
      await callback(JSON.parse(message.value.toString()));
    },
  });
};
