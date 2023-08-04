const javascript = {
    name: 'JavaScript',
    paradigm: 'Multi-paradigm: object-oriented, imperative, functional',
    features: {
        typing: 'Dynamic',
        platform: 'Cross-platform',
        frameworks: {
            frontend: {
                popular: ['React', 'Vue.js', 'Angular'],
                emerging: ['Svelte', 'Next.js', 'Ember.js']
            },
            backend: {
                popular: ['Node.js', 'Express.js', 'Koa'],
                emerging: ['Deno', 'Nest.js', 'Fastify']
            }
        },
        testing: {
            frameworks: ['Jest', 'Mocha', 'Cypress'],
            methodologies: ['Unit Testing', 'Integration Testing', 'End-to-End Testing']
        },
        community: {
            forums: ['Stack Overflow', 'Dev.to', 'Reddit'],
            websites: ['MDN Web Docs', 'JavaScript.com', 'Medium'],
            conferences: {
                global: ['JSConf', 'Node.js Interactive'],
                regional: ['React Europe', 'ng-conf']
            }
        }
    }
};

// Accessing specific details
console.log(javascript.name);  // JavaScript
console.log(javascript.features.typing);  // Dynamic
console.log(javascript.features.frameworks.frontend.popular);  // ['React', 'Vue.js', 'Angular']
console.log(javascript.features.testing.methodologies[1]);  // Integration Testing
console.log(javascript.features.community.conferences.regional[0]);  // React Europe
