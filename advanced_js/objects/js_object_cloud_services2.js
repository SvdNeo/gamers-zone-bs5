const cloudServices = {
    aws: {
        compute: [
            'Amazon EC2',
            'Amazon Elastic Container Service (ECS)',
            'Amazon Elastic Kubernetes Service (EKS)',
            'AWS Lambda',
            'AWS Batch',
            'AWS Fargate'
        ],
        storage: [
            'Amazon S3',
            'Amazon Elastic Block Store (EBS)',
            'Amazon Elastic File System (EFS)',
            'AWS Storage Gateway',
            'Amazon Glacier',
            'AWS Snowball'
        ],
        database: [
            'Amazon RDS',
            'Amazon DynamoDB',
            'Amazon ElastiCache',
            'Amazon Neptune',
            'Amazon Redshift',
            'Amazon DocumentDB'
        ],
        networking: [
            'Amazon VPC',
            'Amazon CloudFront',
            'Amazon Route 53',
            'AWS Direct Connect',
            'AWS Global Accelerator',
            'AWS App Mesh'
        ],
        analytics: [
            'Amazon Athena',
            'Amazon EMR',
            'Amazon Redshift',
            'AWS Glue',
            'AWS Data Pipeline',
            'AWS Lake Formation'
        ],
        ai_ml: [
            'Amazon Rekognition',
            'Amazon SageMaker',
            'Amazon Comprehend',
            'Amazon Lex',
            'Amazon Polly',
            'AWS DeepLens'
        ],
        management: [
            'Amazon CloudWatch',
            'AWS CloudFormation',
            'AWS CloudTrail',
            'AWS Config',
            'AWS Systems Manager',
            'AWS OpsWorks'
        ]
    },
    gcp: {
        compute: [
            'Google Compute Engine',
            'Google Kubernetes Engine (GKE)',
            'Google App Engine',
            'Google Cloud Functions',
            'Google Cloud Run',
            'Google Cloud Run for Anthos'
        ],
        storage: [
            'Google Cloud Storage',
            'Google Cloud SQL',
            'Google Cloud Bigtable',
            'Google Cloud Firestore',
            'Google Cloud Spanner',
            'Google Persistent Disk'
        ],
        database: [
            'Google Cloud Spanner',
            'Google Cloud Firestore',
            'Google Cloud SQL',
            'Google Cloud Bigtable',
            'Google Cloud Memorystore',
            'Google Cloud Datastore'
        ],
        networking: [
            'Google Virtual Private Cloud (VPC)',
            'Google Cloud Load Balancing',
            'Google Cloud DNS',
            'Google Cloud CDN',
            'Google Cloud Interconnect',
            'Google Cloud VPN'
        ],
        analytics: [
            'Google BigQuery',
            'Google Cloud Dataflow',
            'Google Cloud Pub/Sub',
            'Google Cloud Dataproc',
            'Google Cloud Datalab',
            'Google Cloud Composer'
        ],
        ai_ml: [
            'Google Cloud AI Platform',
            'Google Cloud AutoML',
            'Google Cloud Vision',
            'Google Cloud Natural Language',
            'Google Cloud Translation',
            'Google Cloud Speech-to-Text'
        ],
        management: [
            'Google Cloud Console',
            'Google Cloud Deployment Manager',
            'Google Cloud Identity and Access Management',
            'Google Cloud Monitoring',
            'Google Cloud Logging',
            'Google Cloud Security Command Center'
        ]
    },
    azure: {
        compute: [
            'Azure Virtual Machines',
            'Azure Virtual Machine Scale Sets',
            'Azure Kubernetes Service (AKS)',
            'Azure Functions',
            'Azure Batch',
            'Azure Container Instances'
        ],
        storage: [
            'Azure Blob Storage',
            'Azure File Storage',
            'Azure Disk Storage',
            'Azure Data Lake Storage',
            'Azure Queue Storage',
            'Azure Table Storage'
        ],
        database: [
            'Azure SQL Database',
            'Azure Cosmos DB',
            'Azure Database for MySQL',
            'Azure Database for PostgreSQL',
            'Azure Cache for Redis',
            'Azure Synapse Analytics'
        ],
        networking: [
            'Azure Virtual Network (VNet)',
            'Azure Load Balancer',
            'Azure Application Gateway',
            'Azure Traffic Manager',
            'Azure DNS',
            'Azure ExpressRoute'
        ],
        analytics: [
            'Azure Data Lake Analytics',
            'Azure Stream Analytics',
            'Azure Synapse Analytics',
            'Azure Databricks',
            'Azure HDInsight',
            'Azure Log Analytics'
        ],
        ai_ml: [
            'Azure Machine Learning',
            'Azure Cognitive Services',
            'Azure Bot Service',
            'Azure Form Recognizer',
            'Azure Speech Services',
            'Azure Custom Vision'
        ],
        management: [
            'Azure Portal',
            'Azure Resource Manager',
            'Azure Monitor',
            'Azure Security Center',
            'Azure Automation',
            'Azure Advisor'
        ]
    }
};

// Accessing AWS services
console.log(cloudServices.aws.compute); // ['Amazon EC2', 'Amazon Elastic Container Service (ECS)', ...]
console.log(cloudServices.aws.storage); // ['Amazon S3', 'Amazon Elastic Block Store (EBS)', ...]

// Accessing GCP services
console.log(cloudServices.gcp.compute); // ['Google Compute Engine', 'Google Kubernetes Engine (GKE)', ...]
console.log(cloudServices.gcp.storage); // ['Google Cloud Storage', 'Google Cloud SQL', ...]

// Accessing Azure services
console.log(cloudServices.azure.compute); // ['Azure Virtual Machines', 'Azure Virtual Machine Scale Sets', ...]
console.log(cloudServices.azure.storage); // ['Azure Blob Storage', 'Azure File Storage', ...]



// Accessing AWS services using for...of loop
for (const service of cloudServices.aws.compute) {
    console.log(service);
}

// Alternatively, you can use forEach() method
cloudServices.aws.compute.forEach((service) => {
    console.log(service);
});

// Accessing GCP services using for...of loop
for (const service of cloudServices.gcp.storage) {
    console.log(service);
}

// Accessing Azure services using forEach() method
cloudServices.azure.database.forEach((service) => {
    console.log(service);
});

// Accessing all services using for...of loop
for (const provider in cloudServices) {
    console.log(`Services offered by ${provider}:`);
    for (const category in cloudServices[provider]) {
        console.log(`  ${category}:`);
        for (const service of cloudServices[provider][category]) {
            console.log(`    - ${service}`);
        }
    }
}
