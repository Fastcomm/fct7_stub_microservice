//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log("trouble_ticket_controller.create")
        return {
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'create'
            },
            id: faker.datatype.uuid(),
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            externalId: faker.datatype.uuid(),
            ticketType: 'yes',
            ticketArea: 'yes',
            ticketSubArea: 'yes',
            creationDate: new Date(),
            lastUpdate: new Date(),
            severity: 'high',
            priority: 'high',
            requestedResolutionDate: new Date(),
            expectedResolutionDate: new Date(),
            resolutionDate: new Date(),
            status: 'active',
            statusChangeReason: 'none',
            relatedEntity: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department(),
                    role: 'owner'
                }
            ],
            channel: {
                id: faker.datatype.uuid(),
                name: faker.commerce.department()
            },
            statusChange: [
                {
                    status: 'active',
                    changeReason: 'none',
                    changeDate: new Date()
                }
            ],
            note: [
                {
                    id: faker.datatype.uuid(),
                    date: new Date(),
                    text: faker.lorem.sentence(),
                    author: faker.name.findName()
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    role: 'user',
                    name: faker.commerce.department()
                }
            ],
            ticketRelationship: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    type: 'yes'
                }
            ],
            attachment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.image.fashion(),
                    size: faker.datatype.number(),
                    description: faker.lorem.sentence()
                }
            ]
        }
    },
    index: function(request)
    {
        console.log("trouble_ticket_controller.index")
        return [
            {
                routeDetails: {
                    controller: 'Trouble Ticket',
                    action: 'index'
                },
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                externalId: faker.datatype.uuid(),
                ticketType: 'yes',
                ticketArea: 'yes',
                ticketSubArea: 'yes',
                creationDate: new Date(),
                lastUpdate: new Date(),
                severity: 'high',
                priority: 'high',
                requestedResolutionDate: new Date(),
                expectedResolutionDate: new Date(),
                resolutionDate: new Date(),
                status: 'active',
                statusChangeReason: 'none',
                relatedEntity: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: faker.commerce.department(),
                        role: 'owner'
                    }
                ],
                channel: {
                    id: faker.datatype.uuid(),
                    name: faker.commerce.department()
                },
                statusChange: [
                    {
                        status: 'active',
                        changeReason: 'none',
                        changeDate: new Date()
                    }
                ],
                note: [
                    {
                        id: faker.datatype.uuid(),
                        date: new Date(),
                        text: faker.lorem.sentence(),
                        author: faker.name.findName()
                    }
                ],
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        role: 'user',
                        name: faker.commerce.department()
                    }
                ],
                ticketRelationship: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        type: 'yes'
                    }
                ],
                attachment: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: faker.image.fashion(),
                        size: faker.datatype.number(),
                        description: faker.lorem.sentence()
                    }
                ]
            }
        ]
    },
    show: function(request)
    {
        console.log("trouble_ticket_controller.show")
        return {
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'show'
            },
            id: request.params.id,
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            externalId: faker.datatype.uuid(),
            ticketType: 'yes',
            ticketArea: 'yes',
            ticketSubArea: 'yes',
            creationDate: new Date(),
            lastUpdate: new Date(),
            severity: 'high',
            priority: 'high',
            requestedResolutionDate: new Date(),
            expectedResolutionDate: new Date(),
            resolutionDate: new Date(),
            status: 'active',
            statusChangeReason: 'none',
            relatedEntity: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department(),
                    role: 'owner'
                }
            ],
            channel: {
                id: faker.datatype.uuid(),
                name: faker.commerce.department()
            },
            statusChange: [
                {
                    status: 'active',
                    changeReason: 'none',
                    changeDate: new Date()
                }
            ],
            note: [
                {
                    id: faker.datatype.uuid(),
                    date: new Date(),
                    text: faker.lorem.sentence(),
                    author: faker.name.findName()
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    role: 'user',
                    name: faker.commerce.department()
                }
            ],
            ticketRelationship: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    type: 'yes'
                }
            ],
            attachment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.image.fashion(),
                    size: faker.datatype.number(),
                    description: faker.lorem.sentence()
                }
            ]
        }
    },
    update: function(request)
    {
        console.log("trouble_ticket_controller.update")
        return {
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'update'
            },
            id: request.params.id,
            href: faker.internet.url(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            externalId: faker.datatype.uuid(),
            ticketType: 'yes',
            ticketArea: 'yes',
            ticketSubArea: 'yes',
            creationDate: new Date(),
            lastUpdate: new Date(),
            severity: 'high',
            priority: 'high',
            requestedResolutionDate: new Date(),
            expectedResolutionDate: new Date(),
            resolutionDate: new Date(),
            status: 'active',
            statusChangeReason: 'none',
            relatedEntity: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department(),
                    role: 'owner'
                }
            ],
            channel: {
                id: faker.datatype.uuid(),
                name: faker.commerce.department()
            },
            statusChange: [
                {
                    status: 'active',
                    changeReason: 'none',
                    changeDate: new Date()
                }
            ],
            note: [
                {
                    id: faker.datatype.uuid(),
                    date: new Date(),
                    text: faker.lorem.sentence(),
                    author: faker.name.findName()
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    role: 'user',
                    name: faker.commerce.department()
                }
            ],
            ticketRelationship: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    type: 'yes'
                }
            ],
            attachment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: faker.image.fashion(),
                    size: faker.datatype.number(),
                    description: faker.lorem.sentence()
                }
            ]
        }
    },
    destroy: function(request)
    {
        console.log("trouble_ticket_controller.destroy")
        return {
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'destroy'
            },
            id: request.params.id,
            status: 'trouble_ticket successfully destroyed'
        }
    },
    create_hub: function(request)
    {
        console.log("trouble_ticket_controller.create_hub")
        return {
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'create_hub'
            },
            id: faker.datatype.uuid(),
            callback: faker.internet.url(),
            query: faker.hacker.phrase()
        }
    },
    destroy_hub: function(request)
    {
        console.log("trouble_ticket_controller.destroy_hub")
        return {
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'destroy_hub'
            },
            id: request.params.id,
            status: 'trouble_ticket_hub successfully destroyed'
        }
    }
}