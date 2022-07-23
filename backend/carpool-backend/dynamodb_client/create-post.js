import * as AWS from 'aws-sdk';

const dynamoDB = new AWS.default.DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:3000',
});

(async () => {
  const createPayload = await dynamoDB
    .put({
      TableName: 'PostsTable',
      Item: { postId: '3' },
    })
    .promise();
  console.log(createPayload);
})();
