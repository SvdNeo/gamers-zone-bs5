const awsServices = {
    compute: [
        {
            name: 'Amazon EC2',
            features: [
                'Scalable virtual servers in the cloud',
                'Supports various operating systems and applications',
                'Elastic Load Balancing for distributing traffic',
                'Auto Scaling for automatic scaling based on demand'
            ],
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
            usageExamples: [
                'Microservices architecture',
                'Running containerized web applications',
                'Application modernization and migration'
            ]
        },
        {
            name: 'Amazon Elastic Kubernetes Service (EKS)',
            features: [
                'Managed Kubernetes service',
                'Simplified Kubernetes cluster management',
                'Integration with AWS services and tools',
                'Auto Scaling and Load Balancing capabilities'
            ],
            usageExamples: [
                'Running containerized applications on Kubernetes',
                'Application orchestration and scaling',
                'Hybrid cloud deployments',
                'Microservices-based architectures'
            ]
        },
        // ... other compute services
    ],
    storage: [
        {
            name: 'Amazon S3',
            features: [
                'Scalable object storage service',
                'Durability, availability, and performance',
                'Supports data encryption and versioning',
                'Flexible storage classes for cost optimization'
            ],
            usageExamples: [
                'Backup and restore',
                'Static website hosting',
                'Data archiving and analytics',
                'Content distribution'
            ]
        },
        {
            name: 'Amazon Elastic Block Store (EBS)',
            features: [
                'Persistent block-level storage volumes',
                'Flexible and scalable storage options',
                'Supports data encryption',
                'Snapshots for backup and disaster recovery'
            ],
            usageExamples: [
                'Database storage',
                'High-performance workloads',
                'Virtual machine storage',
                'Big data processing'
            ]
        },
        {
            name: 'Amazon Elastic File System (EFS)',
            features: [
                'Fully managed file system',
                'Supports NFS protocol',
                'Highly available and durable',
                'Scalable and elastic storage'
            ],
            usageExamples: [
                'Content management',
                'Big data analytics',
                'Media processing and transcoding',
                'Web serving and content distribution'
            ]
        },
        // ... other storage services
    ],
    database: [
        {
            name: 'Amazon RDS',
            features: [
                'Managed relational database service',
                'Supports multiple database engines',
                'Automated backups and software patching',
                'Horizontal and vertical scaling options'
            ],
            usageExamples: [
                'Web applications and content management systems',
                'Business applications and analytics',
                'Data warehousing and reporting',
                'Highly available and fault-tolerant systems'
            ]
        },
        {
            name: 'Amazon DynamoDB',
            features: [
                'Fully managed NoSQL database service',
                'Scalable and highly available',
                'Millisecond latency at any scale',
                'Supports flexible data models'
            ],
            usageExamples: [
                'Mobile and web applications',
                'Gaming and ad tech platforms',
                'IoT and sensor data storage',
                'Real-time bidding and recommendation systems'
            ]
        },
        {
            name: 'Amazon Neptune',
            features: [
                'Fully managed graph database service',
                'Highly scalable and highly available',
                'Supports querying and analysis of complex datasets',
                'Integrated with AWS services and tools'
            ],
            usageExamples: [
                'Social networking applications',
                'Fraud detection and prevention',
                'Recommendation engines',
                'Knowledge graphs and network analysis'
            ]
        },
        {
            name: 'Amazon Redshift',
            features: [
                'Fast, scalable data warehousing service',
                'Columnar storage for high performance',
                'Advanced analytics and querying capabilities',
                'Integration with popular BI tools'
            ],
            usageExamples: [
                'Business intelligence and reporting',
                'Data warehousing and analytics',
                'Log analysis and clickstream analysis',
                'Real-time dashboards and data visualization'
            ]
        },
        // ... other database services
    ],
    networking: [
        {
            name: 'Amazon VPC',
            features: [
                'Virtual private cloud service',
                'Isolated and secure network environments',
                'Control over network configuration',
                'Connectivity options to on-premises or other cloud resources'
            ],
            usageExamples: [
                'Isolating applications and workloads',
                'Creating multi-tier architectures',
                'Securely connecting to on-premises networks',
                'Building VPN connections'
            ]
        },
        {
            name: 'Amazon CloudFront',
            features: [
                'Global content delivery network (CDN)',
                'Low latency and high transfer speeds',
                'Secure content delivery with HTTPS support',
                'Integration with other AWS services'
            ],
            usageExamples: [
                'Website and web application acceleration',
                'Video streaming and on-demand content delivery',
                'API acceleration and caching',
                'Global software distribution'
            ]
        },
        {
            name: 'Amazon Route 53',
            features: [
                'Scalable and highly available domain name system (DNS)',
                'Global routing and traffic management',
                'Domain registration and health checking',
                'Integration with other AWS services'
            ],
            usageExamples: [
                'Domain registration and DNS management',
                'Routing traffic for web applications',
                'Geolocation-based routing',
                'Health checking and failover'
            ]
        },
        // ... other networking services
    ],
    analytics: [
        {
            name: 'Amazon Athena',
            features: [
                'Serverless interactive query service',
                'Analyze data in Amazon S3 using SQL',
                'No infrastructure to manage',
                'Pay only for the queries you run'
            ],
            usageExamples: [
                'Ad hoc querying and analysis of data',
                'Log analysis and troubleshooting',
                'Data exploration and discovery',
                'Business intelligence and reporting'
            ]
        },
        {
            name: 'Amazon EMR',
            features: [
                'Fully managed big data processing service',
                'Uses popular big data frameworks',
                'Elastic and scalable processing power',
                'Integration with other AWS services'
            ],
            usageExamples: [
                'Data transformations and ETL',
                'Data analysis and processing',
                'Machine learning and AI workloads',
                'Log analysis and clickstream analysis'
            ]
        },
        {
            name: 'Amazon Redshift',
            features: [
                'Fast, scalable data warehousing service',
                'Columnar storage for high performance',
                'Advanced analytics and querying capabilities',
                'Integration with popular BI tools'
            ],
            usageExamples: [
                'Business intelligence and reporting',
                'Data warehousing and analytics',
                'Log analysis and clickstream analysis',
                'Real-time dashboards and data visualization'
            ]
        },
        {
            name: 'AWS Glue',
            features: [
                'Fully managed extract, transform, and load (ETL) service',
                'Data catalog for metadata management',
                'Automatic schema inference and job generation',
                'Integration with popular data sources and targets'
            ],
            usageExamples: [
                'Data integration and consolidation',
                'Data transformation and normalization',
                'Data pipeline automation',
                'Building data lakes and data warehouses'
            ]
        },
        // ... other analytics services
    ],
    ai_ml: [
        {
            name: 'Amazon Rekognition',
            features: [
                'Image and video analysis service',
                'Object, scene, and facial recognition',
                'Text detection and image moderation',
                'Integration with other AWS services'
            ],
            usageExamples: [
                'Content moderation and filtering',
                'Facial recognition and identity verification',
                'Image and video search',
                'Smart retail and surveillance'
            ]
        },
        {
            name: 'Amazon SageMaker',
            features: [
                'Fully managed machine learning service',
                'Build, train, and deploy ML models',
                'Supports popular ML frameworks',
                'Autoscaling and distributed training'
            ],
            usageExamples: [
                'Developing custom ML models',
                'Natural language processing and text analytics',
                'Computer vision and image recognition',
                'Recommendation systems and forecasting'
            ]
        },
        {
            name: 'Amazon Comprehend',
            features: [
                'Natural language processing (NLP) service',
                'Text classification and sentiment analysis',
                'Entity recognition and key phrase extraction',
                'Language detection and topic modeling'
            ],
            usageExamples: [
                'Social media monitoring and analysis',
                'Customer feedback analysis',
                'Content categorization and tagging',
                'Document and email processing'
            ]
        },
        // ... other AI/ML services
    ],
    management: [
        {
            name: 'Amazon CloudWatch',
            features: [
                'Monitoring and observability service',
                'Collects and tracks metrics and logs',
                'Generates alarms and notifications',
                'Integration with other AWS services'
            ],
            usageExamples: [
                'Infrastructure and application monitoring',
                'Troubleshooting and debugging',
                'Performance optimization',
                'Resource utilization and cost monitoring'
            ]
        },
        {
            name: 'AWS CloudFormation',
            features: [
                'Infrastructure as code service',
                'Automated provisioning and management',
                'Declarative templates for resource creation',
                'Supports a wide range of AWS resources'
            ],
            usageExamples: [
                'Infrastructure deployment and management',
                'Application stack provisioning',
                'Environment replication and scaling',
                'Compliance auditing and tracking'
            ]
        },
        {
            name: 'AWS CloudTrail',
            features: [
                'Auditing and compliance service',
                'Records API calls and account activity',
                'Tracks changes to AWS resources',
                'Supports security analysis and troubleshooting'
            ],
            usageExamples: [
                'Compliance reporting and auditing',
                'Security analysis and forensics',
                'Troubleshooting operational issues',
                'Detecting unauthorized activity'
            ]
        },
        {
            name: 'AWS Systems Manager',
            features: [
                'Operational management service',
                'Centralized management of AWS resources',
                'Automation and configuration management',
                'Patch management and compliance reporting'
            ],
            usageExamples: [
                'Managing infrastructure at scale',
                'Automating operational tasks',
                'Configuring and managing instances',
                'Application and resource monitoring'
            ]
        },
        // ... other management services
    ],
    security: [
        {
            name: 'AWS Identity and Access Management (IAM)',
            features: [
                'Identity and access management service',
                'Control access to AWS resources',
                'Manage users, groups, and permissions',
                'Integrates with AWS services and resources'
            ],
            usageExamples: [
                'User authentication and authorization',
                'Fine-grained access control',
                'Security and compliance governance',
                'Multi-factor authentication (MFA)'
            ]
        },
        {
            name: 'Amazon GuardDuty',
            features: [
                'Intelligent threat detection service',
                'Continuous monitoring for malicious activity',
                'AI-powered threat analysis',
                'Integration with AWS services and partner solutions'
            ],
            usageExamples: [
                'Real-time threat detection and response',
                'Suspicious activity and anomaly detection',
                'Threat hunting and investigation',
                'Security incident response'
            ]
        },
        {
            name: 'AWS WAF',
            features: [
                'Web application firewall service',
                'Protects web applications from common attacks',
                'Centralized rules and policies management',
                'Integration with AWS services and resources'
            ],
            usageExamples: [
                'Protecting web applications from OWASP Top 10 attacks',
                'Mitigating DDoS attacks',
                'API security and protection',
                'Bot detection and mitigation'
            ]
        },
        // ... other security services
    ],
    // ... other service categories
};

// Print all AWS services with features and usage examples
for (const category in awsServices) {
    console.log(`AWS ${category}:`);

    const services = awsServices[category];

    for (const service of services) {
        console.log(`- ${service.name}:`);

        console.log('  Features:');
        for (const feature of service.features) {
            console.log(`    - ${feature}`);
        }

        console.log('  Usage Examples:');
        for (const usageExample of service.usageExamples) {
            console.log(`    - ${usageExample}`);
        }
    }
}

