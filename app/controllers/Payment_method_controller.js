//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {

    index: function(request)
    {
        console.log("Payment_method_controller.index")
        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Payment Methods',
                    action: 'index'
                },
                href: faker.internet.url(),
                name: "string",
                description: faker.lorem.sentence(),
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                account: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        description: faker.lorem.sentence(),
                        "@referredType": "string"
                    }
                ],
                preferred: true,
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        "@referredType": "string",
                        name: "string",
                        role: "string"
                    }
                ],
                "@type": "cash",
                authorizationCode: "string",
                status: "string",
                statusDate: new Date(),
                details: {}
            }
        ]
    },
    create: function(request)
    {
        console.log("Payment_method_controller.create")
        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Payment Methods',
                action: 'create'
            },
            href: faker.internet.url(),
                name: "string",
                description: faker.lorem.sentence(),
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                preferred: true,
                account: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        description: faker.lorem.sentence(),
                        "@referredType": "string"
                    }
                ],
                relatedParty: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        "@referredType": "string",
                        name: "string",
                        role: "string"
                    }
                ],
                "@type": "cash",
                authorizationCode: "string",
                status: "string",
                statusDate: new Date(),
                details: {}
            
        }
    },
    show: function(request)
    {
        console.log("Payment_method_controller.show")
        return {
            id: request.params.payment_method_id,
            routeDetails: {
                controller: 'Payment Methods',
                action: 'show'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.lorem.sentence(),
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            account: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                },
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            preferred: true,
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: "customer",
                    name: "string",
                    role: "string"
                },
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: "customer",
                    name: "string",
                    role: "string"
                }
            ],
            "@type": "bankCard",
            authorizationCode: "string",
            status: "string",
            statusDate: new Date(),
            details: {
                brand: "MasterCard",
                type: "Debit",
                number: "000000000000000",
                expirationDate: new Date(),
                cvv: "000",
                lastFourDigits: "0000",
                nameOnCard: "John Doe",
                bank: "Fictional Bank"
            }
        }
    },
    destroy: function(request)
    {
        console.log("Payment_method_controller.destroy")
        return {
            id: request.params.payment_method_id,
            routeDetails: {
                controller: 'Payment Methods',
                action: 'destroy'
            },
            code: 0,
            reason: "Missing query parameter",
            message: "Invalid request",
            status: "failure",
            referenceError: "http://{dev_portal_domain}/{error_documentation_endpoint}",
            "@type": "type",
            "@schemaLocation": "schemaLocation"
        }
    },

    show_accounts: function(request)
    {
        console.log("Payment_method_controller.show_accounts")
        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Payment Methods',
                action: 'show_accounts'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.lorem.sentence(),
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            account: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                },
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            preferred: true,
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: "customer",
                    name: "string",
                    role: "string"
                },
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: "customer",
                    name: "string",
                    role: "string"
                }
            ],
            "@type": "bankCard",
            authorizationCode: "string",
            status: "string",
            statusDate: new Date(),
            details: {
                brand: "MasterCard",
                type: "Debit",
                number: "000000000000000",
                expirationDate: new Date(),
                cvv: "000",
                lastFourDigits: "0000",
                nameOnCard: "John Doe",
                bank: "Fictional Bank"
            }
        }
    }
}