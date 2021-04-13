//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {

    index: function(request)
    {
        console.log("recommendation_management_controller.index")
        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Recommendation Management',
                    action: 'index'
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                name: "string",
                type: "string",
                validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                order: {
                    href: "string",
                    id: "string",
                    "@referredType": "string"
                },
                location: {
                    href: "string",
                    id: "string",
                    name: "string",
                    role: "string",
                    "@referredType": "string",
                    "@type": "string",
                    "@schemaLocation": "string",
                    "@baseType": "string"
                },
                channel: {
                    href: "string",
                    id: "string",
                    name: "string",
                    "@referredType": "string"
                },
                category: {
                    href: "string",
                    id: "string",
                    name: "string",
                    "@referredType": "string"
                },
                shoppingCart: {
                    href: "string",
                    id: "string",
                    "@referredType": "string"
                },
                relatedParty: {
                    href: "string",
                    id: "string",
                    name: "string",
                    role: "string",
                    "@referredType": "string"
                },
                item: [
                    {
                        priority: 0,
                        offering: {
                            href: "string",
                            id: "string",
                            name: "string",
                            "@referredType": "string"
                        },
                        "@type": "string",
                        "@schemaLocation": "string",
                        "@baseType": "string"
                    }
                ],
                "@type": "string",
                "@schemaLocation": "string",
                "@baseType": "string"
            }
        ]
    },
    show: function(request)
    {
        console.log("recommendation_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Recommendation Management',
                action: 'show'
            },
            description: faker.lorem.sentence(),
                href: faker.internet.url(),
                name: "string",
                type: "string",
                validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                order: {
                    href: "string",
                    id: "string",
                    "@referredType": "string"
                },
                location: {
                    href: "string",
                    id: "string",
                    name: "string",
                    role: "string",
                    "@referredType": "string",
                    "@type": "string",
                    "@schemaLocation": "string",
                    "@baseType": "string"
                },
                channel: {
                    href: "string",
                    id: "string",
                    name: "string",
                    "@referredType": "string"
                },
                category: {
                    href: "string",
                    id: "string",
                    name: "string",
                    "@referredType": "string"
                },
                shoppingCart: {
                    href: "string",
                    id: "string",
                    "@referredType": "string"
                },
                relatedParty: {
                    href: "string",
                    id: "string",
                    name: "string",
                    role: "string",
                    "@referredType": "string"
                },
                item: [
                    {
                        priority: 0,
                        offering: {
                            href: "string",
                            id: "string",
                            name: "string",
                            "@referredType": "string"
                        },
                        "@type": "string",
                        "@schemaLocation": "string",
                        "@baseType": "string"
                    }
                ],
                "@type": "string",
                "@schemaLocation": "string",
                "@baseType": "string"
        }
    },

    create_hub: function(request)
    {
        console.log("Recommendation Management.create_hub")
        return [
            { 
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Recommendation Management',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("Recommendation Management.destroy_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Recommendation Management',
                action: 'destroy_hub'
            },
            code: 0,
            reason: 0,
            message: "string",
            status: 0,
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },
    create_client_listener: function(request)
    {
        console.log("Recommendation Management.create_client_listener")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Recommendation Management',
                action: 'create_client_listener'
            },
            event: {},
            eventType: "EVENT_TYPE",
            eventTime: "string",
            eventId: "string"
        }
    }
}