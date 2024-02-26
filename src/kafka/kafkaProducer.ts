// src/kafka/kafkaProducer.ts

import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR,
});

const producer = kafka.producer();

const sendMessage = async (topic: string, message: any): Promise<void> => {
  try {
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export { producer, sendMessage };
