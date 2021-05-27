//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("usage_consumption_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Usage Consumption',
                    action: 'index'
                },
                href: faker.internet.url(),
                description: "string",
                effectiveDate: new Date(),
                name: "string",
                bucket: [
                  {
                    id: "string",
                    isShared: true,
                    name: "string",
                    usageType: "string",
                    bucketBalance: [
                      {
                        remainingValueName: "string",
                        remainingValue: {
                          amount: 1,
                          units: "string"
                        },
                        validFor: {
                          endDateTime: new Date(),
                          startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    bucketCounter: [
                      {
                        counterType: "string",
                        level: "string",
                        valueName: "string",
                        consumptionPeriod: {
                          endDateTime: new Date(),
                          startDateTime: new Date()
                        },
                        product: {
                          id: "string",
                          href: "string",
                          name: "string",
                          publicIdentifier: "string",
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string",
                          "@referredType": "string"
                        },
                        user: {
                          id: "string",
                          href: "string",
                          name: "string",
                          role: "string",
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string",
                          "@referredType": "string"
                        },
                        value: {
                          amount: 1,
                          units: "string"
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    product: [
                      {
                        id: "string",
                        href: "string",
                        name: "string",
                        publicIdentifier: "string",
                        outOfBucketCounter: [
                          {
                            counterType: "string",
                            level: "string",
                            valueName: "string",
                            consumptionPeriod: {
                              endDateTime: new Date(),
                              startDateTime: new Date()
                            },
                            product: {
                              id: "string",
                              href: "string",
                              name: "string",
                              publicIdentifier: "string",
                              "@baseType": "string",
                              "@schemaLocation": "string",
                              "@type": "string",
                              "@referredType": "string"
                            },
                            user: {
                              id: "string",
                              href: "string",
                              name: "string",
                              role: "string",
                              "@baseType": "string",
                              "@schemaLocation": "string",
                              "@type": "string",
                              "@referredType": "string"
                            },
                            value: {
                              amount: 1,
                              units: "string"
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"
                          }
                        ],
                        user: [
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
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    show: function(request)
    {
        console.log("usage_consumption_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'show'
            },
            href: faker.internet.url(),
            description: "string",
            effectiveDate: new Date(),
            name: "string",
            bucket: [
              {
                id: "string",
                isShared: true,
                name: "string",
                usageType: "string",
                bucketBalance: [
                  {
                    remainingValueName: "string",
                    remainingValue: {
                      amount: 1,
                      units: "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                bucketCounter: [
                  {
                    counterType: "string",
                    level: "string",
                    valueName: "string",
                    consumptionPeriod: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    product: {
                      id: "string",
                      href: "string",
                      name: "string",
                      publicIdentifier: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    user: {
                      id: "string",
                      href: "string",
                      name: "string",
                      role: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    value: {
                      amount: 1,
                      units: "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    publicIdentifier: "string",
                    outOfBucketCounter: [
                      {
                        counterType: "string",
                        level: "string",
                        valueName: "string",
                        consumptionPeriod: {
                          endDateTime: new Date(),
                          startDateTime: new Date()
                        },
                        product: {
                          id: "string",
                          href: "string",
                          name: "string",
                          publicIdentifier: "string",
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string",
                          "@referredType": "string"
                        },
                        user: {
                          id: "string",
                          href: "string",
                          name: "string",
                          role: "string",
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string",
                          "@referredType": "string"
                        },
                        value: {
                          amount: 1,
                          units: "string"
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    user: [
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
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy: function(request)
    {
        console.log("usage_consumption_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'destroy'
            },
            code: 204
        }
    },

    index_requests: function(request)
    {
        console.log("usage_consumption_controller.index_requests")        
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Usage Consumption',
                    action: 'index_request'
                },
                href: faker.internet.url(),
                creationDate: new Date(),
                lastUpdate: new Date(),
                status: "string",
                bucket: [
                  {
                    id: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                product: {
                  id: "string",
                  href: "string",
                  name: "string",
                  publicIdentifier: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
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
                usageConsumptionReport: {
                  id: "string",
                  href: "string",
                  description: "string",
                  effectiveDate: new Date(),
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validPeriod: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_request: function(request)
    {
        console.log("usage_consumption_controller.create_request")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'create_request'
            },
            href: faker.internet.url(),
            creationDate: new Date(),
            lastUpdate: new Date(),
            status: "string",
            bucket: [
              {
                id: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            product: {
              id: "string",
              href: "string",
              name: "string",
              publicIdentifier: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
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
            usageConsumptionReport: {
              id: "string",
              href: "string",
              description: "string",
              effectiveDate: new Date(),
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            validPeriod: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    show_request: function(request)
    {
        console.log("usage_consumption_controller.show_request")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'show_request'
            },
            href: faker.internet.url(),
            creationDate: new Date(),
            lastUpdate: new Date(),
            status: "string",
            bucket: [
              {
                id: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            product: {
              id: "string",
              href: "string",
              name: "string",
              publicIdentifier: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
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
            usageConsumptionReport: {
              id: "string",
              href: "string",
              description: "string",
              effectiveDate: new Date(),
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            validPeriod: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    destroy_request: function(request)
    {
        console.log("usage_consumption_controller.destroy_request")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'destroy_request'
            },
            code: 204
        }
    },

    create_listener_request_state_change: function(request)
    {
        console.log("usage_consumption_controller.create_listener_request_state_change")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'usage_consumption_controller',
                action: 'create_listener_request_state_change'
            },
            callback: "string",
            query: "string"
        }
    },

    create_hub: function(request)
    {
        console.log("usage_consumption_controller.create_hub")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'create_hub'
            },
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    destroy_hub: function(request)
    {
        console.log("usage_consumption_controller.destroy_hub")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'destroy_hub'
            },
            code: 204
        }
    }
}