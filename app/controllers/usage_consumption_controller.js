//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    show: function(request)
    {
        console.log("usage_consumption_controller.show")
        return {
            information: {
                controller: 'usage_consumption_controller',
                method: 'show'
            },
            id: request.params.id,
            href: faker.internet.url(),
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            effectiveDate: faker.date.soon(),
            relatedParty: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.company.companyName()
            },
            bucket: [
                {
                    id: faker.random.uuid(),
                    name: faker.system.fileName(),
                    isShared: faker.random.boolean(),
                    product: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.commerce.productName(),
                        desc: faker.lorem.sentence(),
                        code: faker.address.zipCode()
                    },
                    bucketBalance: [
                        {
                            unit: faker.finance.currencyCode(),
                            remainingValue: faker.random.number(),
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
                information: {
                    controller: 'usage_consumption_controller',
                    method: 'index'
                },
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName(),
                description: faker.lorem.sentence(),
                effectiveDate: faker.date.soon(),
                relatedParty: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.company.companyName()
                },
                bucket: [
                    {
                        id: faker.random.uuid(),
                        name: faker.system.fileName(),
                        isShared: faker.random.boolean(),
                        product: {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.commerce.productName(),
                            desc: faker.lorem.sentence(),
                            code: faker.address.zipCode()
                        },
                        bucketBalance: [
                            {
                                unit: faker.finance.currencyCode(),
                                remainingValue: faker.random.number(),
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
            information: {
                controller: 'usage_consumption_controller',
                method: 'destroy'
            },
            id: request.params.id,
            status: "usage_consumption entry destroyed successfully"
        }
    },
    create_request: function(request)
    {
        console.log("usage_consumption_controller.create_request")
        return {
            information: {
                controller: 'usage_consumption_controller',
                method: 'create_request'
            },
            id: faker.random.uuid(),
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
                id: faker.random.uuid(),
                user: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
            },
            bucket: [
                {
                    id: faker.random.uuid()
                }
            ]
        }
    },
    show_request: function(request)
    {
        console.log("usage_consumption_controller.show_request")
        return {
            information: {
                controller: 'usage_consumption_controller',
                method: 'show_request'
            },
            id: faker.random.uuid(),
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
                id: faker.random.uuid(),
                user: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
            },
            bucket: [
                {
                    id: faker.random.uuid()
                }
            ]
        }
    },
    index_requests: function(request)
    {
        console.log("usage_consumption_controller.index_requests")
        return [
            {
                information: {
                    controller: 'usage_consumption_controller',
                    method: 'index_requests'
                },
                id: faker.random.uuid(),
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
                    id: faker.random.uuid(),
                    user: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                },
                bucket: [
                    {
                        id: faker.random.uuid()
                    }
                ]
            }
        ]
    },
    destroy_request: function(request)
    {
        console.log("usage_consumption_controller.destroy_request")
        return {
            information: {
                controller: 'usage_consumption_controller',
                method: 'destroy_request'
            },
            id: request.params.id,
            status: "usage_consumption request destroyed successfully"
        }
    },
    create_hub: function(request)
    {
        console.log("usage_consumption_controller.create_hub")
        return {
            information: {
                controller: 'usage_consumption_controller',
                method: 'create_hub'
            },
            id: faker.random.uuid(),
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    destroy_hub: function(request)
    {
        console.log("usage_consumption_controller.destroy_hub")
        return {
            information: {
                controller: 'usage_consumption_controller',
                method: 'destroy_hub'
            },
            id: request.params.id,
            status: "usage_consumption hub destroyed successfully"
        }
    }
}