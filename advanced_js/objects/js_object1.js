const s3ReadAccessPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: "s3:GetObject",
            Resource: "arn:aws:s3:::example-bucket/*"
        },
        {
            Effect: "Allow",
            Action: [
                "dynamodb:PutItem",
                "dynamodb:UpdateItem",
                "dynamodb:DeleteItem"
            ],
            Resource: "arn:aws:dynamodb:us-east-1:123456789012:table/example-table"
        }
    ]
};

// Accessing and using the properties
console.log(s3ReadAccessPolicy.Version); // Output: 2012-10-17
console.log(s3ReadAccessPolicy.Statement[0].Effect); // Output: Allow
console.log(s3ReadAccessPolicy.Statement[0].Action); // Output: s3:GetObject
console.log(s3ReadAccessPolicy.Statement[0].Resource); // Output: arn:aws:s3:::example-bucket/*
console.log(s3ReadAccessPolicy.Statement[1].Effect); // Output: Allow
console.log(s3ReadAccessPolicy.Statement[1].Action); // Output: [ 'dynamodb:PutItem', 'dynamodb:UpdateItem', 'dynamodb:DeleteItem' ]
console.log(s3ReadAccessPolicy.Statement[1].Resource); // Output: arn:aws:dynamodb:us-east-1:123456789012:table/example-table

const s3BucketAccessPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: "s3:GetObject",
            Resource: [
                "arn:aws:s3:::bucket1/*",
                "arn:aws:s3:::bucket2/*"
            ]
        },
        {
            Effect: "Allow",
            Action: [
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            Resource: "arn:aws:s3:::bucket3/*"
        }
    ]
};

// Accessing and using the properties
console.log(s3BucketAccessPolicy.Version); // Output: 2012-10-17
console.log(s3BucketAccessPolicy.Statement[0].Effect); // Output: Allow
console.log(s3BucketAccessPolicy.Statement[0].Action); // Output: s3:GetObject
console.log(s3BucketAccessPolicy.Statement[0].Resource); // Output: [ 'arn:aws:s3:::bucket1/*', 'arn:aws:s3:::bucket2/*' ]
console.log(s3BucketAccessPolicy.Statement[1].Effect); // Output: Allow
console.log(s3BucketAccessPolicy.Statement[1].Action); // Output: [ 's3:PutObject', 's3:DeleteObject' ]
console.log(s3BucketAccessPolicy.Statement[1].Resource); // Output: arn:aws:s3:::bucket3/*



const dynamoDBWriteAccessPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: [
                "dynamodb:PutItem",
                "dynamodb:UpdateItem",
                "dynamodb:DeleteItem"
            ],
            Resource: "arn:aws:dynamodb:us-east-1:123456789012:table/example-table"
        }
    ]
};

console.log(dynamoDBWriteAccessPolicy.Statement[0].Resource); // Output: arn:aws:dynamodb:us-east-1:123456789012:table/example-table


const ec2FullAccessPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: "ec2:*",
            Resource: "*"
        }
    ]
};

console.log(ec2FullAccessPolicy.Statement[0].Effect); // Output: Allow

const snsAccessPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: "sns:Publish",
            Resource: [
                "arn:aws:sns:us-east-1:123456789012:topic1",
                "arn:aws:sns:us-east-1:123456789012:topic2"
            ]
        }
    ]
};

console.log(snsAccessPolicy.Statement[0].Resource); // Output: [ 'arn:aws:sns:us-east-1:123456789012:topic1', 'arn:aws:sns:us-east-1:123456789012:topic2' ]



const lambdaAccessPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: [
                "lambda:InvokeFunction",
                "lambda:GetFunctionConfiguration"
            ],
            Resource: [
                "arn:aws:lambda: us - east - 1: 123456789012: function: function1",
                "arn:aws:lambda:us-east-1:123456789012:function:function2"
            ]
        }
    ]
};

// Accessing and using the properties
console.log(lambdaAccessPolicy.Version); // Output: 2012-10-17
console.log(lambdaAccessPolicy.Statement[0].Effect); // Output: Allow
console.log(lambdaAccessPolicy.Statement[0].Action); // Output: [ 'lambda:InvokeFunction', 'lambda:GetFunctionConfiguration' ]
console.log(lambdaAccessPolicy.Statement[0].Resource); // Output: [ 'arn:aws:lambda:us-east-1:123456789012:function:function1', 'arn:aws:lambda:us-east-1:123456789012:function:function2' ]


const sqsAccessPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: [
                "sqs:SendMessage",
                "sqs:ReceiveMessage"
            ],
            Resource: [
                "arn:aws:sqs:us-east-1:123456789012:queue1",
                "arn:aws:sqs:us-east-1:123456789012:queue2"
            ]
        }
    ]
};

// Accessing and using the properties
console.log(sqsAccessPolicy.Version); // Output: 2012-10-17
console.log(sqsAccessPolicy.Statement[0].Effect); // Output: Allow
console.log(sqsAccessPolicy.Statement[0].Action); // Output: [ 'sqs:SendMessage', 'sqs:ReceiveMessage' ]
console.log(sqsAccessPolicy.Statement[0].Resource); // Output: [ 'arn:aws:sqs:us-east-1:123456789012:queue1', 'arn:aws:sqs:us-east-1:123456789012:queue2' ]

const nestedIamRules = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: "s3:GetObject",
            Resource: "arn:aws:s3:::example-bucket/*"
        },
        {
            Effect: "Allow",
            Action: [
                "dynamodb:PutItem",
                "dynamodb:UpdateItem",
                "dynamodb:DeleteItem"
            ],
            Resource: "arn:aws:dynamodb:us-east-1:123456789012:table/example-table"
        },
        {
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Resource: "arn:aws:lambda:us-east-1:123456789012:function:example-function"
        },
        {
            Effect: "Allow",
            Action: [
                "sqs:SendMessage",
                "sqs:ReceiveMessage"
            ],
            Resource: [
                "arn:aws:sqs:us-east-1:123456789012:queue1",
                "arn:aws:sqs:us-east-1:123456789012:queue2"
            ]
        }
    ]
};

// Iterate over IAM rules and log their properties
for (let i = 0; i < nestedIamRules.Statement.length; i++) {
    const statement = nestedIamRules.Statement[i];

    console.log(`Statement ${i + 1}:`);
    console.log("Effect:", statement.Effect);
    console.log("Action:", statement.Action);
    console.log("Resource:", statement.Resource);
    console.log("-------------------------------------");
}


// Iterate over IAM rules and log their properties using for...of loop
let statementIndex = 1;
for (const statement of nestedIamRules.Statement) {
    console.log(`Statement ${statementIndex}:`);
    console.log("Effect:", statement.Effect);
    console.log("Action:", statement.Action);
    console.log("Resource:", statement.Resource);
    console.log("-------------------------------------");
    statementIndex++;
}