//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log("product_ordering_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Ordering',
                action: 'create'
            },
            href: faker.internet.url(),
            externalId: faker.datatype.number(),
            priority: String( faker.datatype.number() ),
            description: faker.lorem.sentence(),
            state: "acknowledged",
            orderDate: new Date(),
            completionDate: faker.date.soon(),
            requestStartDate: faker.date.soon(),
            requestedCompletionDate: faker.date.soon(),
            expectedCompletionDate: faker.date.soon(),
            channel: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            note: {
                text: faker.lorem.sentence(),
                date: new Date(),
                author: faker.name.findName()
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName()
                }
            ]
        }
    },
    show: function(request)
    {
        console.log("product_ordering_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Ordering',
                action: 'show'
            },
            href: faker.internet.url(),
            externalId: faker.datatype.number(),
            priority: String( faker.datatype.number() ),
            description: faker.lorem.sentence(),
            state: "acknowledged",
            orderDate: new Date(),
            completionDate: faker.date.soon(),
            requestStartDate: faker.date.soon(),
            requestedCompletionDate: faker.date.soon(),
            expectedCompletionDate: faker.date.soon(),
            channel: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            note: {
                text: faker.lorem.sentence(),
                date: new Date(),
                author: faker.name.findName()
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName()
                }
            ]
        }
    },
    index: function(request)
    {
        console.log("product_ordering_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Ordering',
                    action: 'index'
                },
                href: faker.internet.url(),
                externalId: faker.datatype.number(),
                priority: String( faker.datatype.number() ),
                description: faker.lorem.sentence(),
                state: "acknowledged",
                orderDate: new Date(),
                completionDate: faker.date.soon(),
                requestStartDate: faker.date.soon(),
                requestedCompletionDate: faker.date.soon(),
                expectedCompletionDate: faker.date.soon(),
                channel: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName()
                },
                note: {
                    text: faker.lorem.sentence(),
                    date: new Date(),
                    author: faker.name.findName()
                },
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: faker.commerce.productName()
                    }
                ]
            }
        ]
    },
    update: function(request)
    {
        console.log("product_ordering_controller.update")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Ordering',
                action: 'update'
            },
            href: faker.internet.url(),
            externalId: faker.datatype.number(),
            priority: String( faker.datatype.number() ),
            description: faker.lorem.sentence(),
            state: "acknowledged",
            orderDate: new Date(),
            completionDate: faker.date.soon(),
            requestStartDate: faker.date.soon(),
            requestedCompletionDate: faker.date.soon(),
            expectedCompletionDate: faker.date.soon(),
            channel: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName()
            },
            note: {
                text: faker.lorem.sentence(),
                date: new Date(),
                author: faker.name.findName()
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName()
                }
            ]
        }

    },
    destroy: function(request)
    {
        console.log("product_ordering_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Ordering',
                action: 'destroy'
            },
            status: "product_order entry destroyed successfully"
        }
    }
}