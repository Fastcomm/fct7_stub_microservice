//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    show: function(request)
    {
        console.log("bill_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'show'
            },
            href: faker.internet.url(),
            billNo: String( faker.datatype.number() ),
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
                unit: faker.datatype.number()
            }
        }
    },
    index: function(request)
    {
        console.log("bill_management_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Bill Management',
                    action: 'index'
                },
                href: faker.internet.url(),
                billNo: String( faker.datatype.number() ),
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
                    unit: faker.datatype.number()
                }
            }
        ]
    },
    update: function(request)
    {
        console.log("bill_management_controller.update")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'update'
            },
            href: faker.internet.url(),
            billNo: String( faker.datatype.number() ),
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
                unit: faker.datatype.number()
            }
        }
    },
    show_rate: function(request)
    {
        console.log("bill_management_controller.show_rate")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'show_rate'
            },
            href: faker.internet.url(),
            type: faker.lorem.word(),
            date: new Date(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            bill: {
                id: faker.datatype.uuid(),
                href: faker.internet.url()
            },
            characteristic: [
                {
                    name: faker.commerce.productName(),
                    value: String( faker.datatype.number() )
                }
            ]
        }
    },
    index_rate: function(request)
    {
        console.log("bill_management_controller.index_rate")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Bill Management',
                    action: 'index_rate'
                },
                href: faker.internet.url(),
                type: faker.lorem.word(),
                date: new Date(),
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                bill: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url()
                },
                characteristic: [
                    {
                        name: faker.commerce.productName(),
                        value: String( faker.datatype.number() )
                    }
                ]
            }
        ]
    },
    create_on_demand: function(request)
    {
        console.log("bill_management_controller.create_on_demand")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Bill Management',
                action: 'create_on_demand'
            },
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            state: "inProgress",
            lastUpdate: new Date(),
            billingAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            relatedParty: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName(),
            },
            customerBill: {
                id: faker.datatype.uuid(),
                href: faker.internet.url()
            }
        }
    },
    show_on_demand: function(request)
    {
        console.log("bill_management_controller.show_on_demand")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'show_on_demand'
            },
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            state: "inProgress",
            lastUpdate: new Date(),
            billingAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            relatedParty: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName(),
            },
            customerBill: {
                id: faker.datatype.uuid(),
                href: faker.internet.url()
            }
        }
    },
    index_on_demand: function(request)
    {
        console.log("bill_management_controller.index_on_demand")
        return [
            {
                id: request.params.id,
                routeDetails: {
                    controller: 'Bill Management',
                    action: 'index_on_demand'
                },
                href: faker.internet.url(),
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                state: "inProgress",
                lastUpdate: new Date(),
                billingAccount: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName()
                },
                relatedParty: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName(),
                },
                customerBill: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url()
                }
            }
        ]
    },
    create_hub: function(request)
    {
        console.log("bill_management_controller.create_hub")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Bill Management',
                action: 'create_hub'
            },
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    destroy_hub: function(request)
    {
        console.log("bill_management_controller.destroy_hub")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'destroy_hub'
            },
            status: "bill hub destroyed successfully"
        }
    }
}