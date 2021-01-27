//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    show: function(request)
    {
        return {
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
        return [
            {
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
        return {
            id: request.params.id,
            status: "usage_consumption entry destroyed successfully"
        }
    },
    create_request: function(request)
    {
        return {
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
        return {
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
        return [
            {
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
        return {
            id: request.params.id,
            status: "usage_consumption request destroyed successfully"
        }
    },
    create_hub: function(request)
    {
        return {
            id: faker.random.uuid(),
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    destroy_hub: function(request)
    {
        return {
            id: request.params.id,
            status: "usage_consumption hub destroyed successfully"
        }
    }
}