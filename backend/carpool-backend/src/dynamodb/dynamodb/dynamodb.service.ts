import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

const dyanamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000',
});

@Injectable()
export class DynamodbService {}
