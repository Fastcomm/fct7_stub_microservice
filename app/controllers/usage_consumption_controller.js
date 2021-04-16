//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    show: function(request)
    {
        console.log("usage_consumption_controller.show")
        return {
            stub_information: {
                controller: 'usage_consumption_controller',
                method: 'show'
            },
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'create'
            },
            href: faker.internet.url(),
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            effectiveDate: faker.date.soon(),
            relatedParty: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.company.companyName()
            },
            bucket: [
                {
                    id: faker.datatype.uuid(),
                    name: faker.system.fileName(),
                    isShared: faker.random.boolean(),
                    product: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: faker.commerce.productName(),
                        desc: faker.lorem.sentence(),
                        code: faker.address.zipCode()
                    },
                    bucketBalance: [
                        {
                            unit: faker.finance.currencyCode(),
                            remainingValue: faker.datatype.number(),
                            validFor: {
                                startDateTime: faker.date.soon(),
                                endDateTime:faker.date.soon()
                            }
                        }
                    ]
                }
            ]
        }
    },
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
                name: faker.name.findName(),
                description: faker.lorem.sentence(),
                effectiveDate: faker.date.soon(),
                relatedParty: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.company.companyName()
                },
                bucket: [
                    {
                        id: faker.datatype.uuid(),
                        name: faker.system.fileName(),
                        isShared: faker.random.boolean(),
                        product: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: faker.commerce.productName(),
                            desc: faker.lorem.sentence(),
                            code: faker.address.zipCode()
                        },
                        bucketBalance: [
                            {
                                unit: faker.finance.currencyCode(),
                                remainingValue: faker.datatype.number(),
                                validFor: {
                                    startDateTime: faker.date.soon(),
                                    endDateTime:faker.date.soon()
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    destroy: function(request)
    {
        console.log("usage_consumption_controller.destroy")
        return {
            stub_information: {
                controller: 'usage_consumption_controller',
                method: 'destroy'
            },
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'destroy'
            },
            status: "usage_consumption entry destroyed successfully"
        }
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
            status: "created",
            lastUpdate: new Date(),
            callbackUrl: faker.internet.url(),
            validPeriod: {
                startDateTime: faker.date.soon(),
                endDateTime: faker.date.soon()
            },
            product: {
                id: faker.datatype.uuid(),
                user: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
            },
            bucket: [
                {
                    id: faker.datatype.uuid()
                }
            ]
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
            status: "created",
            lastUpdate: new Date(),
            callbackUrl: faker.internet.url(),
            validPeriod: {
                startDateTime: faker.date.soon(),
                endDateTime: faker.date.soon()
            },
            product: {
                id: faker.datatype.uuid(),
                user: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
            },
            bucket: [
                {
                    id: faker.datatype.uuid()
                }
            ]
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
                status: "created",
                lastUpdate: new Date(),
                callbackUrl: faker.internet.url(),
                validPeriod: {
                    startDateTime: faker.date.soon(),
                    endDateTime: faker.date.soon()
                },
                product: {
                    id: faker.datatype.uuid(),
                    user: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                },
                bucket: [
                    {
                        id: faker.datatype.uuid()
                    }
                ]
            }
        ]
    },
    destroy_request: function(request)
    {
        console.log("usage_consumption_controller.destroy_request")
        return {
            stub_information: {
                controller: 'usage_consumption_controller',
                method: 'destroy_request'
            },
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'destroy_request'
            },
            status: "usage_consumption request destroyed successfully"
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
            stub_information: {
                controller: 'usage_consumption_controller',
                method: 'destroy_hub'
            },
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Consumption',
                action: 'destroy_hub'
            },
            status: "usage_consumption hub destroyed successfully"
        }
    }
}