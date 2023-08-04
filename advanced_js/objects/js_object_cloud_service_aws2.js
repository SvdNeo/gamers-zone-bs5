const awsServices = {
    compute: [],
    storage: [],
    database: [],
    networking: [],
    analytics: [],
    ai_ml: [],
    management: [],
    security: []
};


awsServices.compute = [
    {
        name: 'Amazon EC2',
        features: [
            'Scalable virtual servers in the cloud',
            'Supports various operating systems and applications',
            'Elastic Load Balancing for distributing traffic',
            'Auto Scaling for automatic scaling based on demand'
        ],
        pricingModel: 'Pay as you go',
        instanceTypes: ['General Purpose', 'Memory Optimized', 'Compute Optimized', 'Accelerated Computing'],
        storageOptions: ['Amazon EBS', 'Instance Store', 'Amazon S3'],
        usageExamples: [
            'Hosting websites and web applications',
            'Running enterprise applications',
            'Data processing and analytics',
            'Machine learning model training'
        ]
    },
    {
        name: 'Amazon Elastic Container Service (ECS)',
        features: [
            'Container management service',
            'Supports Docker containers',
            'Easily run and scale containerized applications',
            'Integrates with other AWS services'
        ],
        pricingModel: 'Pay as you go',
        containerRegistry: 'Amazon Elastic Container Registry (ECR)',
        orchestration: 'AWS Fargate',
        usageExamples: [
            'Microservices architecture',
            'Running containerized web applications',
            'Application modernization and migration'
        ]
    },
    {
        name: 'AWS Lambda',
        features: [
            'Serverless compute service',
            'Run code without provisioning or managing servers',
            'Automatic scaling based on incoming requests',
            'Supports multiple programming languages'
        ],
        pricingModel: 'Pay per invocation and resource usage',
        supportedLanguages: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'Ruby'],
        integrations: ['API Gateway', 'S3', 'DynamoDB', 'SNS', 'SQS'],
        usageExamples: [
            'Event-driven data processing',
            'Real-time file processing and transformations',
            'Building serverless applications',
            'Automating tasks and workflows'
        ]
    },
    {
        name: 'AWS Batch',
        features: [
            'Fully managed batch processing service',
            'Dynamically scale applications on the cloud',
            'Run parallel and distributed workloads',
            'Integrates with other AWS services like EC2, S3, and DynamoDB'
        ],
        usageExamples: [
            'Big data processing and analysis',
            'High-performance computing (HPC)',
            'Scientific simulations',
            'Video encoding and transcoding'
        ]
    }, c
    {
        name: 'AWS App Runner',
        features: [
            'Fully managed service for building, deploying, and scaling applications',
            'Automatic build, deployment, and scaling',
            'Integrates with various source code repositories',
            'Supports containerized and non-containerized applications'
        ],
        usageExamples: [
            'Web application deployment',
            'API backend deployment',
            'Microservices architecture',
            'Continuous deployment of applications'
        ]
    },
    {
        name: 'AWS Elastic Beanstalk',
        features: [
            'Platform as a Service (PaaS) for deploying and managing applications',
            'Automated application environment provisioning',
            'Supports various programming languages and frameworks',
            'Auto-scaling and load balancing capabilities'
        ],
        usageExamples: [
            'Web application hosting',
            'Microservices deployment',
            'API backend services',
            'DevOps and CI/CD workflows'
        ]
    },
];
