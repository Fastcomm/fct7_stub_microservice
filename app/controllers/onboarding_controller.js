//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("onboarding_controller.index")
        return {
            stub_information: {
                controller: 'onboarding_controller',
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
    },
    show: function(request)
    {
        console.log("onboarding_controller.show")
        return {
            stub_information: {
                controller: 'onboarding_controller',
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
    create: function(request)
    {
        console.log("onboarding_controller.create")
        return [
            {
                stub_information: {
                    controller: 'onboarding_controller',
                    method: 'create'
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
        console.log("onboarding_controller.update")
        return {
            stub_information: {
                controller: 'onboarding_controller',
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
    delete: function(request)
    {
        console.log("onboarding_controller.delete")
        return {
            stub_information: {
                controller: 'onboarding_controller',
                method: 'delete'
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
    }
}