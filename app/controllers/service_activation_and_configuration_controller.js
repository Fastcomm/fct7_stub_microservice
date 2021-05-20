//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.index_service")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'index_service'
                },
                href: faker.internet.url(),
                category: "string",
                description: "string",
                endDate: new Date(),
                hasStarted: true,
                isServiceEnabled: true,
                isStateful: true,
                name: "string",
                serviceDate: "string",
                serviceType: "string",
                startDate: new Date(),
                startMode: "string",
                note: [
                  {
                    author: "string",
                    date: new Date(),
                    system: "string",
                    text: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                place: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                serviceCharacteristic: [
                  {
                    name: "string",
                    valueType: "string",
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                serviceOrder: [
                  {
                    id: "string",
                    href: "string",
                    serviceOrderItemId: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                serviceRelationship: [
                  {
                    relationshipType: "string",
                    service: {
                      id: "string",
                      href: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                serviceSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  targetServiceSchema: {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                state: "feasibilityChecked",
                supportingResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                supportingService: [
                  {
                    id: "string",
                    href: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_service")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_service'
            },
            href: faker.internet.url(),
            category: "string",
            description: "string",
            endDate: new Date(),
            hasStarted: true,
            isServiceEnabled: true,
            isStateful: true,
            name: "string",
            serviceDate: "string",
            serviceType: "string",
            startDate: new Date(),
            startMode: "string",
            note: [
              {
                author: "string",
                date: new Date(),
                system: "string",
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            serviceOrder: [
              {
                id: "string",
                href: "string",
                serviceOrderItemId: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceRelationship: [
              {
                relationshipType: "string",
                service: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            serviceSpecification: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              targetServiceSchema: {
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            state: "feasibilityChecked",
            supportingResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            supportingService: [
              {
                id: "string",
                href: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            description: "string",
            endDate: new Date(),
            hasStarted: true,
            isServiceEnabled: true,
            isStateful: true,
            name: "string",
            serviceDate: "string",
            serviceType: "string",
            startDate: new Date(),
            startMode: "string",
            note: [
              {
                author: "string",
                date: new Date(),
                system: "string",
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            serviceOrder: [
              {
                id: "string",
                href: "string",
                serviceOrderItemId: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceRelationship: [
              {
                relationshipType: "string",
                service: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            serviceSpecification: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              targetServiceSchema: {
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            state: "feasibilityChecked",
            supportingResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            supportingService: [
              {
                id: "string",
                href: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            href: faker.internet.url(),
            category: "string",
            description: "string",
            endDate: new Date(),
            hasStarted: true,
            isServiceEnabled: true,
            isStateful: true,
            name: "string",
            serviceDate: "string",
            serviceType: "string",
            startDate: new Date(),
            startMode: "string",
            note: [
              {
                author: "string",
                date: new Date(),
                system: "string",
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            serviceOrder: [
              {
                id: "string",
                href: "string",
                serviceOrderItemId: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceRelationship: [
              {
                relationshipType: "string",
                service: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            serviceSpecification: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              targetServiceSchema: {
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            state: "feasibilityChecked",
            supportingResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            supportingService: [
              {
                id: "string",
                href: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.destroy_service")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'destroy_service'
            },
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
        }
    },

    index_monitor: function(request)
    {
        console.log("service_activation_and_configuration_controller.index_monitor")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'index_monitor'
                },
                sourceHref: "string",
                state: "string",
                request: {
                  body: "string",
                  method: "string",
                  to: "string",
                  header: [
                    {
                      name: "string",
                      value: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    }
                  ],
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                response: {
                  body: "string",
                  statusCode: "string",
                  header: [
                    {
                      name: "string",
                      value: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    }
                  ],
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            sourceHref: "string",
            state: "string",
            request: {
              body: "string",
              method: "string",
              to: "string",
              header: [
                {
                  name: "string",
                  value: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                }
              ],
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            response: {
              body: "string",
              statusCode: "string",
              header: [
                {
                  name: "string",
                  value: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                }
              ],
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },

    create_notification_monitor_create: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_notification_monitor_create")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_notification_monitor_create'
            },
            callback: "string",
            query: "string"
        }
    },
    create_notification_monitor_attribute_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_notification_monitor_attribute_change")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_notification_monitor_attribute_change'
            },
            callback: "string",
            query: "string"
        }
    },
    create_notification_monitor_state_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_notification_monitor_state_change")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_notification_monitor_state_change'
            },
            callback: "string",
            query: "string"
        }
    },
    create_notification_monitor_delete: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_notification_monitor_delete")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_notification_monitor_delete'
            },
            eventId: "string",
            eventTime: new Date(),
            eventType: "string",
            fieldPath: "string",
            resourcePath: "string",
            event: {
                monitor: {
                    id: faker.datatype.uuid(),
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
                                value: faker.datatype.number()
                            }
                        ]
                    },
                    response: {
                        body: "string",
                        statusCode: "string",
                        header: [
                            {
                                name: faker.name.findName(),
                                value: faker.datatype.number()
                            }
                        ]
                    }
                }
            }
        }
    },
    create_notification_service_create: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_notification_service_create")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_notification_service_create'
            },
            callback: "string",
            query: "string"
        }
    },
    create_notification_service_attribute_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_notification_service_attribute_change")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_notification_service_attribute_change'
            },
            callback: "string",
            query: "string"
        }
    },
    create_notification_service_state_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_notification_service_state_change")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_notification_service_state_change'
            },
            callback: "string",
            query: "string"
        }
    },
    create_notification_service_delete: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_notification_service_delete")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_notification_service_delete'
            },
            callback: "string",
            query: "string"
        }
    },

    create_hub: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("service_activation_and_configuration_controller.destroy_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'destroy_hub'
            },
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
            
        }
    },

    create_client_listener: function(request)
    {
        console.log(service_activation_and_configuration_controller.create_client_listener)

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_client_listener'
            },
            event: {},
            eventType: EVENT_TYPE,
            eventTime:"string",
            eventId: "string"
            
        }
    }
}