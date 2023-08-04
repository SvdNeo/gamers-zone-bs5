const cloudServices = {
    aws: {
        compute: ['Amazon EC2', 'Amazon Lambda', 'Amazon Elastic Beanstalk'],
        storage: ['Amazon S3', 'Amazon EBS', 'Amazon EFS'],
        database: ['Amazon RDS', 'Amazon DynamoDB', 'Amazon Redshift'],
        networking: ['Amazon VPC', 'Amazon CloudFront', 'Amazon Route 53'],
        analytics: ['Amazon Athena', 'Amazon EMR', 'Amazon Redshift'],
        ai_ml: ['Amazon Rekognition', 'Amazon SageMaker', 'Amazon Lex'],
        management: ['Amazon CloudWatch', 'AWS CloudFormation', 'AWS Systems Manager']
    },
    gcp: {
        compute: ['Google Compute Engine', 'Google Kubernetes Engine', 'Google App Engine'],
        storage: ['Google Cloud Storage', 'Google Cloud SQL', 'Google Cloud Bigtable'],
        database: ['Google Cloud Spanner', 'Google Cloud Firestore', 'Google BigQuery'],
        networking: ['Google Virtual Private Cloud (VPC)', 'Google Cloud Load Balancing', 'Google Cloud DNS'],
        analytics: ['Google BigQuery', 'Google Dataflow', 'Google Cloud Pub/Sub'],
        ai_ml: ['Google Cloud AI Platform', 'Google Cloud AutoML', 'Google Cloud Vision'],
        management: ['Google Cloud Console', 'Google Cloud Deployment Manager', 'Google Cloud Identity and Access Management']
    },
    azure: {
        compute: ['Azure Virtual Machines', 'Azure Functions', 'Azure App Service'],
        storage: ['Azure Blob Storage', 'Azure Disk Storage', 'Azure Files'],
        database: ['Azure SQL Database', 'Azure Cosmos DB', 'Azure Database for PostgreSQL'],
        networking: ['Azure Virtual Network (VNet)', 'Azure Load Balancer', 'Azure DNS'],
        analytics: ['Azure Data Lake Analytics', 'Azure Stream Analytics', 'Azure Synapse Analytics'],
        ai_ml: ['Azure Machine Learning', 'Azure Cognitive Services', 'Azure Bot Service'],
        management: ['Azure Portal', 'Azure Resource Manager', 'Azure Monitor']
    }
};

// Accessing AWS services
console.log(cloudServices.aws.compute); // ['Amazon EC2', 'Amazon Lambda', 'Amazon Elastic Beanstalk']
console.log(cloudServices.aws.storage); // ['Amazon S3', 'Amazon EBS', 'Amazon EFS']

// Accessing GCP services
console.log(cloudServices.gcp.compute); // ['Google Compute Engine', 'Google Kubernetes Engine', 'Google App Engine']
console.log(cloudServices.gcp.storage); // ['Google Cloud Storage', 'Google Cloud SQL', 'Google Cloud Bigtable']

// Accessing Azure services
console.log(cloudServices.azure.compute); // ['Azure Virtual Machines', 'Azure Functions', 'Azure App Service']
console.log(cloudServices.azure.storage); // ['Azure Blob Storage', 'Azure Disk Storage', 'Azure Files']
