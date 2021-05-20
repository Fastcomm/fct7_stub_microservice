//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log('usage_management_controller.create')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Management',
                action: 'create'
            },
            href: faker.internet.url(),
            date: new Date(),
            type: "VOICE",
            description: faker.lorem.sentence(),
            status: "rated",
            usageSpecification: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            usageCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    value: String( faker.datatype.number() )
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    validFor: {
                        startDateTime: faker.date.soon(),
                        endDateTime: faker.date.soon()
                    }
                }
            ],
            ratedProductUsage: [
                {
                    ratingDate: new Date(),
                    usageRatingTag: "Usage",
                    isBilled: faker.random.boolean(),
                    ratyingAmountType: "Total",
                    taxIncludedRatingAmount: faker.datatype.number(),
                    taxExcludedRatingAmount: faker.datatype.number(),
                    taxRate: faker.datatype.number(),
                    isTaxExempt: false,
                    offerTariffType: "Normal",
                    currencyCode: faker.finance.currencyCode(),
                    productRef: faker.internet.url()
                }
            ]
        }
    },
    show: function(request)
    {
        console.log('usage_management_controller.show')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'show'
            },
            href: faker.internet.url(),
            date: new Date(),
            type: "VOICE",
            description: faker.lorem.sentence(),
            status: "rated",
            usageSpecification: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            usageCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    value: String( faker.datatype.number() )
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    validFor: {
                        startDateTime: faker.date.soon(),
                        endDateTime: faker.date.soon()
                    }
                }
            ],
            ratedProductUsage: [
                {
                    ratingDate: new Date(),
                    usageRatingTag: "Usage",
                    isBilled: faker.random.boolean(),
                    ratyingAmountType: "Total",
                    taxIncludedRatingAmount: faker.datatype.number(),
                    taxExcludedRatingAmount: faker.datatype.number(),
                    taxRate: faker.datatype.number(),
                    isTaxExempt: false,
                    offerTariffType: "Normal",
                    currencyCode: faker.finance.currencyCode(),
                    productRef: faker.internet.url()
                }
            ]
        }
    },
    index: function(request)
    {
        console.log('usage_management_controller.index')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Usage Management',
                    action: 'index'
                },
                href: faker.internet.url(),
                date: new Date(),
                type: "VOICE",
                description: faker.lorem.sentence(),
                status: "rated",
                usageSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName()
                },
                usageCharacteristic: [
                    {
                        name: faker.address.countryCode(),
                        value: String( faker.datatype.number() )
                    }
                ],
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        validFor: {
                            startDateTime: faker.date.soon(),
                            endDateTime: faker.date.soon()
                        }
                    }
                ],
                ratedProductUsage: [
                    {
                        ratingDate: new Date(),
                        usageRatingTag: "Usage",
                        isBilled: faker.random.boolean(),
                        ratyingAmountType: "Total",
                        taxIncludedRatingAmount: faker.datatype.number(),
                        taxExcludedRatingAmount: faker.datatype.number(),
                        taxRate: faker.datatype.number(),
                        isTaxExempt: false,
                        offerTariffType: "Normal",
                        currencyCode: faker.finance.currencyCode(),
                        productRef: faker.internet.url()
                    }
                ]
            }
        ]
    },
    update: function(request)
    {
        console.log('usage_management_controller.update')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'update'
            },
            href: faker.internet.url(),
            date: new Date(),
            type: "VOICE",
            description: faker.lorem.sentence(),
            status: "rated",
            usageSpecification: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            usageCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    value: String( faker.datatype.number() )
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    validFor: {
                        startDateTime: faker.date.soon(),
                        endDateTime: faker.date.soon()
                    }
                }
            ],
            ratedProductUsage: [
                {
                    ratingDate: new Date(),
                    usageRatingTag: "Usage",
                    isBilled: faker.random.boolean(),
                    ratyingAmountType: "Total",
                    taxIncludedRatingAmount: faker.datatype.number(),
                    taxExcludedRatingAmount: faker.datatype.number(),
                    taxRate: faker.datatype.number(),
                    isTaxExempt: false,
                    offerTariffType: "Normal",
                    currencyCode: faker.finance.currencyCode(),
                    productRef: faker.internet.url()
                }
            ]
        }
    },
    destroy: function(request)
    {
        console.log('usage_management_controller.destroy')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'destroy'
            },
            status: "usage entry destroyed successfully"
        }
    },

    create_specification: function(request)
    {
        console.log('usage_management_controller.create_specification')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Management',
                action: 'create_specification'
            },
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            validFor: {
                startDateTime: faker.date.soon(),
                endDateTime: faker.date.soon()
            },
            usageSpecCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    description: faker.lorem.sentence(),
                    configurable: faker.random.boolean(),
                    usageSpecCharacteristicValue: [
                        {
                            valueType: "number",
                            default: faker.random.boolean(),
                            value: String( faker.datatype.number() ),
                            valueFrom: String( faker.datatype.number() ),
                            valueTo: String( faker.datatype.number() )
                        }
                    ]
                }
            ]
        }
    },
    show_specification: function(request)
    {
        console.log('usage_management_controller.show_specification')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'show_specification'
            },
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            validFor: {
                startDateTime: faker.date.soon(),
                endDateTime: faker.date.soon()
            },
            usageSpecCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    description: faker.lorem.sentence(),
                    configurable: faker.random.boolean(),
                    usageSpecCharacteristicValue: [
                        {
                            valueType: "number",
                            default: faker.random.boolean(),
                            value: String( faker.datatype.number() ),
                            valueFrom: String( faker.datatype.number() ),
                            valueTo: String( faker.datatype.number() )
                        }
                    ]
                }
            ]
        }
    },
    destroy_specification: function(request)
    {
        console.log('usage_management_controller.destroy_specification')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'destroy_specification'
            },
            status: "usage_specification entry destroyed successfully"
        }
    },

    create_hub: function(request)
    {
        console.log('usage_management_controller.create_hub')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Management',
                action: 'create_hub'
            },
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    destroy_hub: function(request)
    {
        console.log('usage_management_controller.destroy_hub')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'destroy_hub'
            },
            status: "usage_hub entry destroyed successfully"
        }
    }
}