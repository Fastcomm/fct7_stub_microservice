//  === Requirements ===
const faker = require('faker')
//  === Controller ===
module.exports = {
    index_product_buckets: function(request) 
    {
        console.log("prepay_balance_controller.index_product_buckets")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_product_buckets'
                },
                href: faker.internet.url(),
                name: faker.name.findName(),
                description: faker.lorem.sentence(),
                bucketType: "promotionalvoice" ,
                remainedAmount: [
                    {
                        amount: faker.random.number(),
                        units: "EUR"
                    }
                ],
                reservedAmount:[
                    {
                        amount: faker.random.number(),
                        units: "EUR"
                    }
                ],
                validFor: [
                    {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    }
            
                ],
                status: "active",
                product: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                ],
                partyAccount: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                ],
                realizingResource: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        value: "Resourse value"
                    }
                ],
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "Customer"
                    }
                ]
            }
        ]
    },
    show_product_buckets: function(request)
    {
        console.log("prepay_balance_controller.show_product_buckets")

        return {
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'show_product_buckets'
            },
            id: request.params.bucket_id,
            href: faker.internet.url(),
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            bucketType: "promotionalvoice" ,
            remainedAmount: [
                {
                    amount: faker.random.number(),
                    units: "EUR"
                }
            ],
            reservedAmount:[
                {
                    amount: faker.random.number(),
                    units: "EUR"
                }
            ],
            validFor: [
                {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                }
        
            ],
            status: "active",
            product: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
            ],
            partyAccount: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
            ],
            realizingResource: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    value: "Resourse value"
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "Customer"
                }
            ]
        
        }
    },
    create_product_adjustments: function(request)
    {
        console.log("prepay_balance_controller.create_product_adjustments")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_product_adjustments'
            },
            type: "voice",
            reason: faker.lorem.sentence(),
            amount: {
                amount: faker.random.number(),
                units: "EUR"
            },
            product:{
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName()
            }
        }
    },
    index_product_adjustments: function(request)
    {
        console.log("prepay_balance_controller.index_product_adjustments")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_product_adjustments'
                },
                type: "voice",
                reason: faker.lorem.sentence(),
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                },
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                },
                requestedDate: new Date(),
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
            }
        ]
    },
    show_product_adjustments: function(request)
    {
        console.log("prepay_balance_controller.show_product_adjustments")

        return {
                id: request.params.adjustment_id,
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'show_product_adjustments'
                },
                type: "voice",
                reason: faker.lorem.sentence(),
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                },
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                },
                requestedDate: new Date(),
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
        }
        
    },
    create_product_transfers: function(request)
    {
        console.log("prepay_balance_controller.create_product_transfers")

        return {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'create_product_transfers'
                },
                type: "roaming voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                targetId: "name",
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
        }
    },
    index_product_transfers: function(request)
    {
        console.log("prepay_balance_controller.index_product_transfers")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_product_transfers'
                },
                type: "roaming voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                targetId: "name",
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                reason: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                },
                targetType: faker.lorem.sentence(),
                receiver: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "billing account"
                },
                transferCost: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                costOwner: "originator",
                requestedDate: new Date(),
                confirmationDate: new Date(),
                status: "confirmed",
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
            }
        ]
    },
    create_product_topups: function(request)
    {
        console.log("prepay_balance_controller.create_product_topups")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_product_topups'
            },
            type: "string",
            channel: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName()
            },
            amount:{
                amount: faker.random.number(),
                units: "EUR"
            },
            product:{
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName(),
                
            }
        }
    },
    index_product_topups: function(request)
    {
        console.log("prepay_balance_controller.index_product_topups")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_product_topups'
                },
                type: "voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                amount:{
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "Customer"
                },
                isAutoTopup: true,
                recurringPeriod: "monthly",
                nrOfPeriods: faker.random.number(),
                paymentMethod: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    type: "credit card",
                    details:{
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "missing documentation"
                    }
                },
                voucher: "voucher voice",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                },
                requestedDate: new Date(),
                confirmationDate: new Date(),
                status: "confirmed",
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
            }
        ]
    },
    create_product_topups_status: function(request)
    {
        console.log("prepay_balance_controller.create_product_topups_status")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_product_topups_status'
            },
            status: "cancelled"
        }
    },
    index_product_topups_status: function(request)
    {
        console.log("prepay_balance_controller.index_product_topups_status")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'index_product_topups_status'
            },
            status: "cancelled",
            statusChangeDate: new Date()
        }
    },
    index_buckets: function(request)
    {
        console.log("prepay_balance_controller.index_buckets")

        return [
            {
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_buckets'
                },
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName(),
                description: faker.lorem.sentence(),
                bucketType: "promotionalvoice" ,
                remainedAmount: [
                    {
                        amount: faker.random.number(),
                        units: "EUR"
                    }
                ],
                reservedAmount:[
                    {
                        amount: faker.random.number(),
                        units: "EUR"
                    }
                ],
                validFor: [
                    {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    }
            
                ],
                status: "active",
                product: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                ],
                partyAccount: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                ],
                realizingResource: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        value: "Resourse value"
                    }
                ],
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "Customer"
                    }
                ]
            }
        ]
    },
    show_buckets: function(request)
    {
        console.log("prepay_balance_controller.show_buckets")

        return {

            routeDetails: {
                controller: 'Prepay Balance',
                action: 'show_buckets'
            },
            id: request.params.bucket_id,
            href: faker.internet.url(),
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            bucketType: "promotionalvoice" ,
            remainedAmount: [
                {
                    amount: faker.random.number(),
                    units: "EUR"
                }
            ],
            reservedAmount:[
                {
                    amount: faker.random.number(),
                    units: "EUR"
                }
            ],
            validFor: [
                {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                }
        
            ],
            status: "active",
            product: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
            ],
            partyAccount: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
            ],
            realizingResource: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    value: "Resourse value"
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "Customer"
                }
            ]
        }
    },
    index_accumulated_balance: function(request)
    {
        console.log("prepay_balance_controller.index_accumulated_balance")

        return [
            {   
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_accumulated_balance'
                },
                name: faker.name.findName(),
                description: faker.lorem.sentence(),
                totalBalance: 
                {
                    amount: faker.random.number(),
                    units: "EUR" 
                },
                bucket:[
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url()
                    },
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url()
                    }
                ],
                product: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                ],
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
            }
        ]
    },
    show_accumulated_balance_products: function(request)
    {
        console.log("prepay_balance_controller.show_accumulated_balance_products")

        return {
                routeDetails: {
                   controller: 'Prepay Balance',
                    action: 'show_accumulated_balance_products'
                },
                id: request.params.product_id,
                name: faker.name.findName(),
                description: faker.lorem.sentence(),
                totalBalance: 
                {
                    amount: faker.random.number(),
                    units: "EUR" 
                },
                bucket:[
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url()
                    },
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url()
                    }
                ],
                product: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                ],
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
        } 
    },
    index_activity: function(request)
    {
        console.log("prepay_balance_controller.index_activity")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_activity'
                },
                type: 'temporary',
                date: new Date(),
                action: 
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url()
                },
                amount: 
                {
                    amount: faker.random.number(),
                    units: "EUR" 
                },
                bucketBalance: 
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url() 
                },
                amountBefore: 
                {
                    amount: faker.random.number(),
                    units: "EUR" 
                },
                amountAfter: 
                {
                    amount: faker.random.number(),
                    units: "EUR" 
                },
                product: 
                [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                ],
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
            }
        ]
    },
    show_activity_products: function(request)
    {
        console.log("prepay_balance_controller.show_activity_products")

        return {
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'show_activity_products'
                },
                id: request.params.product_id,
                type: 'temporary',
                date: new Date(),
                action: 
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url()
                },
                amount: 
                {
                    amount: faker.random.number(),
                    units: "EUR" 
                },
                bucketBalance: 
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url() 
                },
                amountBefore: 
                {
                    amount: faker.random.number(),
                    units: "EUR" 
                },
                amountAfter: 
                {
                    amount: faker.random.number(),
                    units: "EUR" 
                },
                product: 
                [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName()
                    }
                ],
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]

        }
    },
    create_topups: function(request)
    {
        console.log("prepay_balance_controller.create_topups")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_topups'
            },
            type: "string",
            channel: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName()
            },
            amount:{
                amount: faker.random.number(),
                units: "EUR"
            },
            product:{
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName(),
                
            }
        }
    },
    index_topups: function(request)
    {
        console.log("prepay_balance_controller.index_topups")

        return [
            {
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_topups'
                },
                type: "voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                amount:{
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                id: faker.random.uuid(),
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "Customer"
                },
                isAutoTopup: true,
                recurringPeriod: "monthly",
                nrOfPeriods: faker.random.number(),
                paymentMethod: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    type: "credit card",
                    details:{
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "missing documentation"
                    }
                },
                voucher: "voucher voice",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                },
                requestedDate: new Date(),
                confirmationDate: new Date(),
                status: "confirmed",
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
            }
        ]
    },
    show_topups: function(request)
    {
        console.log("prepay_balance_controller.show_topups")

        return {
                id: request.params.topup_id,
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'show_topups'
                },
                type: "voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                amount:{
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "Customer"
                },
                isAutoTopup: true,
                recurringPeriod: "monthly",
                nrOfPeriods: faker.random.number(),
                paymentMethod: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    type: "credit card",
                    details:{
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "missing documentation"
                    }
                },
                voucher: "voucher voice",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                },
                requestedDate: new Date(),
                confirmationDate: new Date(),
                status: "confirmed",
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
        }
    },
    index_topups_status: function(request)
    {
        console.log("prepay_balance_controller.index_topups_status")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_topups_status'
                },
                status: "cancelled",
                statusChangeDate: new Date()
            }
        ]
    },
    update_topups_status: function(request)
    {
        console.log("prepay_balance_controller.update_topups_status")

        return {
            id: request.params.topup_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'update_topups_status'
            },
            status: "cancelled"
        }
    },
    create_transfers: function(request)
    {
        console.log("prepay_balance_controller.create_transfers")

        return {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'create_transfers'
                },
                type: "roaming voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                targetId: "name",
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                }
        }
    },
    index_transfers: function(request)
    {
        console.log("prepay_balance_controller.index_transfers")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_transfers'
                },
                type: "roaming voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                targetId: "name",
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                reason: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                },
                targetType: faker.lorem.sentence(),
                receiver: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "billing account"
                },
                transferCost: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                costOwner: "originator",
                requestedDate: new Date(),
                confirmationDate: new Date(),
                status: "confirmed",
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
            }
        ]
    },
    show_transfers: function(request)
    {
        console.log("prepay_balance_controller.show_transfers")

        return {
                id: request.params.transfers_id,
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'show_transfers'
                },
                type: "roaming voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                targetId: "name",
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                reason: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                },
                targetType: faker.lorem.sentence(),
                receiver: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "billing account"
                },
                transferCost: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                costOwner: "originator",
                requestedDate: new Date(),
                confirmationDate: new Date(),
                status: "confirmed",
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
        }
    },
    index_transfers_status: function(request)
    {
        console.log("prepay_balance_controller.index_transfers_status")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_transfers_status'
                },
                type: "roaming voice",
                channel: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                targetId: "name",
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                reason: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                },
                targetType: faker.lorem.sentence(),
                receiver: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "billing account"
                },
                transferCost: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                costOwner: "originator",
                requestedDate: new Date(),
                confirmationDate: new Date(),
                status: "confirmed",
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
            }
        ]
    },
    update_transfers_status: function(request)
    {
        console.log("prepay_balance_controller.update_transfers_status")

        return{
            id: request.params.transfers_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'update_transfers_status'
            },
            status: "cancelled"
        }
    },
    create_adjustments: function(request)
    {
        console.log("prepay_balance_controller.create_adjustments")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_adjustments'
            },
            type: "voice",
            reason: faker.lorem.sentence(),
            amount: {
                amount: faker.random.number(),
                units: "EUR"
            },
            product:{
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName()
            }
        }
    },
    index_adjustments: function(request)
    {
        console.log("prepay_balance_controller.index_adjustments")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_adjustments'
                },
                type: "voice",
                reason: faker.lorem.sentence(),
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                },
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                },
                requestedDate: new Date(),
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]

            }
        ]
    },
    show_adjustments: function(request)
    {
        console.log("prepay_balance_controller.show_adjustments")

        return {
                id: request.params.adjustments_id,
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'show_adjustments'
                },
                type: "voice",
                reason: faker.lorem.sentence(),
                amount: {
                    amount: faker.random.number(),
                    units: "EUR"
                },
                product:{
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                requestor: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "user"
                },
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                },
                requestedDate: new Date(),
                bucket: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                },
                partyAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: faker.name.findName(),
                        role: "customer"
                    }
                ]
        }
    },
    create_hub: function(request)
    {
        console.log("prepay_balance_controller.create_hub")
        
        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_hub'
            },
            callback: "string"
        }
    },
    remove_hub: function(request)
    {
        console.log("prepay_balance_controller.remove_hub")

        return {
            id: request.params.hub_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'remove_hub'
            },
            message: "Have succesfully removed"
        }
    },
    create_client_listener: function(request)
    {
        console.log("prepay_balance_controller.create_client_listener")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_client_listener'
            },
            eventId : faker.random.uuid(),
            eventType: "string",
            event: {
                id: faker.random.uuid(),
                callback: "string",
                query: "string"
            }
        }
    },
    reserve: function(request)
    {
        console.log("prepay_balance_controller.reserve")

        return {
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'reserve'
                },
                id: faker.random.uuid(),
                relatedParty: 
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "customer"
                },
                reservedAmount: {
                    amount: faker.random.number(),
                    units: "EUR"
                }
        }
    },
    unreserve: function(request)
    {
        console.log("prepay_balance_controller.unreserve")

        return {
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'unreserve'
                },
                id: faker.random.uuid(),
                relatedParty: 
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "customer"
                },
                balanceReserve: {
                    id: "string",
                    href: faker.internet.url()
                }
        }
    },
    deduct: function(request)
    {
        console.log("prepay_balance_controller.deduct")

        return {
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'deduct'
                },
                id: faker.random.uuid(),
                reason: faker.lorem.sentence(),
                relatedParty: 
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName(),
                    role: "customer"
                },
                balanceReserve: {
                    id: "string",
                    href: faker.internet.url()
                }
        }
    }

}
