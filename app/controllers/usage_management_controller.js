//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log('usage_management_controller.create')
        return {
            stub_information: {
                controller: 'usage_management_controller',
                method: 'create'
            },
            id: faker.random.uuid(),
            href: faker.internet.url(),
            date: new Date(),
            type: "VOICE",
            description: faker.lorem.sentence(),
            status: "rated",
            usageSpecification: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            usageCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    value: String( faker.random.number() )
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
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
                    taxIncludedRatingAmount: faker.random.number(),
                    taxExcludedRatingAmount: faker.random.number(),
                    taxRate: faker.random.number(),
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
            stub_information: {
                controller: 'usage_management_controller',
                method: 'show'
            },
            id: request.params.id,
            href: faker.internet.url(),
            date: new Date(),
            type: "VOICE",
            description: faker.lorem.sentence(),
            status: "rated",
            usageSpecification: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            usageCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    value: String( faker.random.number() )
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
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
                    taxIncludedRatingAmount: faker.random.number(),
                    taxExcludedRatingAmount: faker.random.number(),
                    taxRate: faker.random.number(),
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
                stub_information: {
                    controller: 'usage_management_controller',
                    method: 'index'
                },
            id: faker.random.uuid(),
            href: faker.internet.url(),
            date: new Date(),
            type: "VOICE",
            description: faker.lorem.sentence(),
            status: "rated",
            usageSpecification: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            usageCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    value: String( faker.random.number() )
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
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
                    taxIncludedRatingAmount: faker.random.number(),
                    taxExcludedRatingAmount: faker.random.number(),
                    taxRate: faker.random.number(),
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
            stub_information: {
                controller: 'usage_management_controller',
                method: 'update'
            },
            id: request.params.id,
            href: faker.internet.url(),
            date: new Date(),
            type: "VOICE",
            description: faker.lorem.sentence(),
            status: "rated",
            usageSpecification: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            usageCharacteristic: [
                {
                    name: faker.address.countryCode(),
                    value: String( faker.random.number() )
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
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
                    taxIncludedRatingAmount: faker.random.number(),
                    taxExcludedRatingAmount: faker.random.number(),
                    taxRate: faker.random.number(),
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
            stub_information: {
                controller: 'usage_management_controller',
                method: 'destroy'
            },
            id: request.params.id,
            status: "usage entry destroyed successfully"
        }
    },
    create_specification: function(request)
    {
        console.log('usage_management_controller.create_specification')
        return {
            stub_information: {
                controller: 'usage_management_controller',
                method: 'create_specification'
            },
            id: faker.random.uuid(),
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
                            value: String( faker.random.number() ),
                            valueFrom: String( faker.random.number() ),
                            valueTo: String( faker.random.number() )
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
            stub_information: {
                controller: 'usage_management_controller',
                method: 'show_specification'
            },
            id: request.params.id,
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
                            value: String( faker.random.number() ),
                            valueFrom: String( faker.random.number() ),
                            valueTo: String( faker.random.number() )
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
            stub_information: {
                controller: 'usage_management_controller',
                method: 'destroy_specification'
            },
            id: request.params.id,
            status: "usage_specification entry destroyed successfully"
        }
    },
    create_hub: function(request)
    {
        console.log('usage_management_controller.create_hub')
        return {
            stub_information: {
                controller: 'usage_management_controller',
                method: 'create_hub'
            },
            id: faker.random.uuid(),
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    show_hub: function(request)
    {
        console.log('usage_management_controller.show_hub')
        return {
            stub_information: {
                controller: 'usage_management_controller',
                method: 'show_hub'
            },
            id: request.params.id,
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    index_hub: function(request)
    {
        console.log('usage_management_controller.index_hub')
        return [
                {
                stub_information: {
                    controller: 'usage_management_controller',
                    method: 'index_hub'
                },
                id: faker.random.uuid(),
                callback: faker.internet.url(),
                query: faker.hacker.verb()
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log('usage_management_controller.destroy_hub')
        return {
            stub_information: {
                controller: 'usage_management_controller',
                method: 'destroy_hub'
            },
            id: request.params.id,
            status: "usage_hub entry destroyed successfully"
        }
    }
}