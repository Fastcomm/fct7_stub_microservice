//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    show: function(request)
    {
        console.log("bill_management_controller.show")
        return {
            information: {
                controller: 'bill_management',
                method: 'show'
            },
            id: request.params.id,
            href: faker.internet.url(),
            billNo: String( faker.random.number() ),
            state: "new",
            lastUpdate: new Date(),
            billDate: new Date(),
            nextBillDate: faker.date.soon(),
            billingPeriod: {
                startDateTime: faker.date.soon(),
                endDateTime: faker.date.soon()
            },
            amountDue: {
                unit: faker.finance.currencyCode(),
                unit: faker.random.number()
            }
        }
    },
    index: function(request)
    {
        console.log("bill_management_controller.index")
        return [
            {
                information: {
                    controller: 'bill_management',
                    method: 'index'
                },    
                id: faker.random.uuid(),
                href: faker.internet.url(),
                billNo: String( faker.random.number() ),
                state: "new",
                lastUpdate: new Date(),
                billDate: new Date(),
                nextBillDate: faker.date.soon(),
                billingPeriod: {
                    startDateTime: faker.date.soon(),
                    endDateTime: faker.date.soon()
                },
                amountDue: {
                    unit: faker.finance.currencyCode(),
                    unit: faker.random.number()
                }
            }
        ]
    },
    update: function(request)
    {
        console.log("bill_management_controller.update")
        return {
            information: {
                controller: 'bill_management',
                method: 'update'
            },
            id: request.params.id,
            href: faker.internet.url(),
            billNo: String( faker.random.number() ),
            state: "new",
            lastUpdate: new Date(),
            billDate: new Date(),
            nextBillDate: faker.date.soon(),
            billingPeriod: {
                startDateTime: faker.date.soon(),
                endDateTime: faker.date.soon()
            },
            amountDue: {
                unit: faker.finance.currencyCode(),
                unit: faker.random.number()
            }
        }
    },
    show_rate: function(request)
    {
        console.log("bill_management_controller.show_rate")
        return {
            information: {
                controller: 'bill_management',
                method: 'show_rate'
            },
            id: request.params.id,
            href: faker.internet.url(),
            type: faker.lorem.word(),
            date: new Date(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            bill: {
                id: faker.random.uuid(),
                href: faker.internet.url()
            },
            characteristic: [
                {
                    name: faker.commerce.productName(),
                    value: String( faker.random.number() )
                }
            ]
        }
    },
    index_rate: function(request)
    {
        console.log("bill_management_controller.index_rate")
        return [
            {
                information: {
                    controller: 'bill_management',
                    method: 'index_rate'
                },
                id: faker.random.uuid(),
                href: faker.internet.url(),
                type: faker.lorem.word(),
                date: new Date(),
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                bill: {
                    id: faker.random.uuid(),
                    href: faker.internet.url()
                },
                characteristic: [
                    {
                        name: faker.commerce.productName(),
                        value: String( faker.random.number() )
                    }
                ]
            }
        ]
    },
    create_on_demand: function(request)
    {
        console.log("bill_management_controller.create_on_demand")
        return {
            information: {
                controller: 'bill_management',
                method: 'create_on_demand'
            },
            id: faker.random.uuid(),
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            state: "inProgress",
            lastUpdate: new Date(),
            billingAccount: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            relatedParty: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName(),
            },
            customerBill: {
                id: faker.random.uuid(),
                href: faker.internet.url()
            }
        }
    },
    show_on_demand: function(request)
    {
        console.log("bill_management_controller.show_on_demand")
        return {
            information: {
                controller: 'bill_management',
                method: 'show_on_demand'
            },
            id: request.params.id,
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            state: "inProgress",
            lastUpdate: new Date(),
            billingAccount: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            relatedParty: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName(),
            },
            customerBill: {
                id: faker.random.uuid(),
                href: faker.internet.url()
            }
        }
    },
    index_on_demand: function(request)
    {
        console.log("bill_management_controller.index_on_demand")
        return [
            {
                information: {
                    controller: 'bill_management',
                    method: 'index_on_demand'
                },
                id: request.params.id,
                href: faker.internet.url(),
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                state: "inProgress",
                lastUpdate: new Date(),
                billingAccount: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName()
                },
                relatedParty: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName(),
                },
                customerBill: {
                    id: faker.random.uuid(),
                    href: faker.internet.url()
                }
            }
        ]
    },
    create_hub: function(request)
    {
        console.log("bill_management_controller.create_hub")
        return {
            information: {
                controller: 'bill_management',
                method: 'create_hub'
            },
            id: faker.random.uuid(),
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    destroy_hub: function(request)
    {
        console.log("bill_management_controller.destroy_hub")
        return {
            information: {
                controller: 'bill_management',
                method: 'destroy_hub'
            },
            id: request.params.id,
            status: "bill hub destroyed successfully"
        }
    }
}