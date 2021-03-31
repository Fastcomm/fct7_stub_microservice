//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.index_service")
        
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'index_service'
                },
                href: faker.internet.url(),
                category: "string",
                description: faker.lorem.sentence(),
                endDate: new Date(),
                hasStarted: true,
                isServiceEnabled: true,
                isStateful: true,
                name: faker.name.findName(),
                serviceDate: new Date(),
                serviceType: "string",
                startDate: new Date(),
                startMode: "string",
                note: [
                    {
                        author: faker.name.findName(),
                        date: new Date(),
                        system: "string",
                        text: "string"
                    }
                ],
                place: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "user"
                    }
                ],
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "user"
                    }
                ],
                serviceCharacteristic: [
                    {
                        name: faker.name.findName(),
                        valueType: "string"
                    }
                ],
                serviceOrder: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        serviceOrderItemId: "string"
                    }
                ],
                serviceRelationship: [
                    {
                        relationshipType: "string",
                        service: 
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url()
                        }
                    }
                ],
                serviceSpecification: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        version:"string",
                },
                state: "feasibilityChecked",
                supportingResource: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                    }
                ],
                supportingService: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url()
                    }
                ]
            }
        ]
    },
    create_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_service")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_service'
            }, 
            category: "string",
            description: faker.lorem.sentence(),
            endDate: new Date(),
            hasStarted: true,
            isServiceEnabled: true,
            isStateful: true,
            name: faker.name.findName(),
            serviceDate: new Date(),
            serviceType: "string",
            startDate: new Date(),
            startMode: "string",
            note: [
                {
                    author: faker.name.findName(),
                    date: new Date(),
                    system: "string",
                    text: "string"
                }
            ],
            place: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                }
            ],
            serviceCharacteristic: [
                {
                    name: faker.name.findName(),
                    valueType: "string"
                }
            ],
            serviceOrder: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    serviceOrderItemId: "string"
                }
            ],
            serviceRelationship: [
                {
                    relationshipType: "string",
                    service: 
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url()
                    }
                }
            ],
            serviceSpecification: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    version:"string",
            },
            state: "feasibilityChecked",
            supportingResource: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                }
            ],
            supportingService: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url()
                }
            ]
        }
    },
    show_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.show_service")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'show_service'
            },
            href: faker.internet.url(),
            category: "string",
            description: faker.lorem.sentence(),
            endDate: new Date(),
            hasStarted: true,
            isServiceEnabled: true,
            isStateful: true,
            name: faker.name.findName(),
            serviceDate: new Date(),
            serviceType: "string",
            startDate: new Date(),
            startMode: "string",
            note: [
                {
                    author: faker.name.findName(),
                    date: new Date(),
                    system: "string",
                    text: "string"
                }
            ],
            place: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                }
            ],
            serviceCharacteristic: [
                {
                    name: faker.name.findName(),
                    valueType: "string"
                }
            ],
            serviceOrder: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    serviceOrderItemId: "string"
                }
            ],
            serviceRelationship: [
                {
                    relationshipType: "string",
                    service: 
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url()
                    }
                }
            ],
            serviceSpecification: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    version:"string",
            },
            state: "feasibilityChecked",
            supportingResource: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                }
            ],
            supportingService: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url()
                }
            ]
        }
    },
    update_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.update_service")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'update_service'
            },
            category: "string",
            description: faker.lorem.sentence(),
            endDate: new Date(),
            hasStarted: true,
            isServiceEnabled: true,
            isStateful: true,
            name: faker.name.findName(),
            serviceDate: new Date(),
            serviceType: "string",
            startDate: new Date(),
            startMode: "string",
            note: [
                {
                    author: faker.name.findName(),
                    date: new Date(),
                    system: "string",
                    text: "string"
                }
            ],
            place: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                }
            ],
            serviceCharacteristic: [
                {
                    name: faker.name.findName(),
                    valueType: "string"
                }
            ],
            serviceOrder: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    serviceOrderItemId: "string"
                }
            ],
            serviceRelationship: [
                {
                    relationshipType: "string",
                    service: 
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url()
                    }
                }
            ],
            serviceSpecification: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    version:"string",
            },
            state: "feasibilityChecked",
            supportingResource: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                }
            ],
            supportingService: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url()
                }
            ]
        }
    },
    remove_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.remove_service")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'remove_service'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },
    index_monitor: function(request)
    {
        console.log("service_activation_and_configuration_controller.index_monitor")
        
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'index_monitor'
                },
                href: faker.internet.url(),
                sourceHref: "string",
                state: "string",
                request: {
                    body: "string",
                    method: "string",
                    to: "string",
                    header: [
                        {
                            name: faker.name.findName(),
                            value: faker.random.number()
                        }
                    ]
                },
                response: {
                    body: "string",
                    statusCode: "string",
                    header: [
                        {
                            name: faker.name.findName(),
                            value: faker.random.number()
                        }
                    ]
                }
            }
        ]
    },
    show_monitor: function(request)
    {
        console.log("service_activation_and_configuration_controller.show_monitor")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'show_monitor'
            },
            href: faker.internet.url(),
            sourceHref: "string",
            state: "string",
            request: {
                body: "string",
                method: "string",
                to: "string",
                header: [
                    {
                        name: faker.name.findName(),
                        value: faker.random.number()
                    }
                ]
            },
            response: {
                body: "string",
                statusCode: "string",
                header: [
                    {
                        name: faker.name.findName(),
                        value: faker.random.number()
                    }
                ]
            }
        }
    },
    create_listener_notification_monitor_create: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_monitor_create")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_monitor_create'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                monitor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    sourceHref: "string",
                    state: "string",
                    request: {
                        body: "string",
                        method: "string",
                        to: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.random.number()
                            }
                        ]
                    },
                    response: {
                        body: "string",
                        statusCode: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.random.number()
                            }
                        ]
                    }
                }
            }
        }
    },
    create_listener_notification_monitor_attribute_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_monitor_attribute_change")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_monitor_attribute_change'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                monitor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    sourceHref: "string",
                    state: "string",
                    request: {
                        body: "string",
                        method: "string",
                        to: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.random.number()
                            }
                        ]
                    },
                    response: {
                        body: "string",
                        statusCode: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.random.number()
                            }
                        ]
                    }
                }
            }
        }
    },
    create_listener_notification_monitor_state_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_monitor_state_change")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_monitor_state_change'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                monitor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    sourceHref: "string",
                    state: "string",
                    request: {
                        body: "string",
                        method: "string",
                        to: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.random.number()
                            }
                        ]
                    },
                    response: {
                        body: "string",
                        statusCode: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.random.number()
                            }
                        ]
                    }
                }
            }
        }
    },
    create_listener_notification_monitor_delete: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_monitor_delete")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_monitor_delete'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                monitor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    sourceHref: "string",
                    state: "string",
                    request: {
                        body: "string",
                        method: "string",
                        to: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.random.number()
                            }
                        ]
                    },
                    response: {
                        body: "string",
                        statusCode: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.random.number()
                            }
                        ]
                    }
                }
            }
        }
    },
    create_listener_notification_service_create: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_service_create")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_service_create'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                service: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    category: "string",
                    description: faker.lorem.sentence(),
                    endDate: new Date(),
                    hasStarted: true,
                    isServiceEnabled: true,
                    isStateful: true,
                    name: faker.name.findName(),
                    serviceDate: new Date(),
                    serviceType: "string",
                    startDate: new Date(),
                    startMode: "string",
                    note: [
                        {
                            author: faker.name.findName(),
                            date: new Date(),
                            system: "string",
                            text: "string"
                        }
                    ],
                    place: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            role: "user"
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            role: "user"
                        }
                    ],
                    serviceCharacteristic: [
                        {
                            name: faker.name.findName(),
                            valueType: "string"
                        }
                    ],
                    serviceOrder: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            serviceOrderItemId: "string"
                        }
                    ],
                    serviceRelationship: [
                        {
                            relationshipType: "string",
                            service: 
                            {
                                id: faker.random.uuid(),
                                href: faker.internet.url()
                            }
                        }
                    ],
                    serviceSpecification: {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            version:"string",
                    },
                    state: "feasibilityChecked",
                    supportingResource: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                        }
                    ],
                    supportingService: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url()
                        }
                    ]
                }
            }
        }
    },
    create_listener_notification_service_attribute_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_service_attribute_change")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_service_attribute_change'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                service: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    category: "string",
                    description: faker.lorem.sentence(),
                    endDate: new Date(),
                    hasStarted: true,
                    isServiceEnabled: true,
                    isStateful: true,
                    name: faker.name.findName(),
                    serviceDate: new Date(),
                    serviceType: "string",
                    startDate: new Date(),
                    startMode: "string",
                    note: [
                        {
                            author: faker.name.findName(),
                            date: new Date(),
                            system: "string",
                            text: "string"
                        }
                    ],
                    place: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            role: "user"
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            role: "user"
                        }
                    ],
                    serviceCharacteristic: [
                        {
                            name: faker.name.findName(),
                            valueType: "string"
                        }
                    ],
                    serviceOrder: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            serviceOrderItemId: "string"
                        }
                    ],
                    serviceRelationship: [
                        {
                            relationshipType: "string",
                            service: 
                            {
                                id: faker.random.uuid(),
                                href: faker.internet.url()
                            }
                        }
                    ],
                    serviceSpecification: {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            version:"string",
                    },
                    state: "feasibilityChecked",
                    supportingResource: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                        }
                    ],
                    supportingService: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url()
                        }
                    ]
                }
            }
        }
    },
    create_listener_notification_service_state_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_service_state_change")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_service_state_change'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                service: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    category: "string",
                    description: faker.lorem.sentence(),
                    endDate: new Date(),
                    hasStarted: true,
                    isServiceEnabled: true,
                    isStateful: true,
                    name: faker.name.findName(),
                    serviceDate: new Date(),
                    serviceType: "string",
                    startDate: new Date(),
                    startMode: "string",
                    note: [
                        {
                            author: faker.name.findName(),
                            date: new Date(),
                            system: "string",
                            text: "string"
                        }
                    ],
                    place: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            role: "user"
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            role: "user"
                        }
                    ],
                    serviceCharacteristic: [
                        {
                            name: faker.name.findName(),
                            valueType: "string"
                        }
                    ],
                    serviceOrder: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            serviceOrderItemId: "string"
                        }
                    ],
                    serviceRelationship: [
                        {
                            relationshipType: "string",
                            service: 
                            {
                                id: faker.random.uuid(),
                                href: faker.internet.url()
                            }
                        }
                    ],
                    serviceSpecification: {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            version:"string",
                    },
                    state: "feasibilityChecked",
                    supportingResource: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                        }
                    ],
                    supportingService: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url()
                        }
                    ]
                }
            }
        }
    },
    create_listener_notification_service_delete: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_service_delete")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_service_delete'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                service: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    category: "string",
                    description: faker.lorem.sentence(),
                    endDate: new Date(),
                    hasStarted: true,
                    isServiceEnabled: true,
                    isStateful: true,
                    name: faker.name.findName(),
                    serviceDate: new Date(),
                    serviceType: "string",
                    startDate: new Date(),
                    startMode: "string",
                    note: [
                        {
                            author: faker.name.findName(),
                            date: new Date(),
                            system: "string",
                            text: "string"
                        }
                    ],
                    place: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            role: "user"
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            role: "user"
                        }
                    ],
                    serviceCharacteristic: [
                        {
                            name: faker.name.findName(),
                            valueType: "string"
                        }
                    ],
                    serviceOrder: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            serviceOrderItemId: "string"
                        }
                    ],
                    serviceRelationship: [
                        {
                            relationshipType: "string",
                            service: 
                            {
                                id: faker.random.uuid(),
                                href: faker.internet.url()
                            }
                        }
                    ],
                    serviceSpecification: {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                            version:"string",
                    },
                    state: "feasibilityChecked",
                    supportingResource: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.name.findName(),
                        }
                    ],
                    supportingService: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url()
                        }
                    ]
                }
            }
        }
    },
    create_hub: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_hub")
        return [
            { 
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    remove_hub: function(request)
    {
        console.log("service_activation_and_configuration_controller.remove_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'remove_hub'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
            
        }
    },
    create_client_listener: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_client_listener")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_client_listener'
            },
            event: {},
            eventType: "EVENT_TYPE",
            eventTime:"string",
            eventId: "string"
            
        }
    }
}