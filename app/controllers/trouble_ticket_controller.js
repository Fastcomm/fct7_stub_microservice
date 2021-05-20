//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("trouble_ticket_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Trouble Ticket',
                    action: 'index'
                },
                href: faker.internet.url(),
                creationDate: new Date(),
                description: "string",
                expectedResolutionDate: new Date(),
                externalId: "string",
                lastUpdate: new Date(),
                name: "string",
                priority: "string",
                requestedResolutionDate: new Date(),
                resolutionDate: new Date(),
                severity: "string",
                statusChangeDate: new Date(),
                statusChangeReason: "string",
                ticketType: "string",
                attachment: [
                  {
                    id: "string",
                    href: "string",
                    attachmentType: "string",
                    content: "string",
                    description: "string",
                    mimeType: "string",
                    name: "string",
                    url: "string",
                    size: {
                      amount: 1,
                      units: "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                note: [
                  {
                    id: "string",
                    author: "string",
                    date: new Date(),
                    text: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                relatedEntity: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                status: "acknowledged",
                statusChange: [
                  {
                    changeDate: new Date(),
                    changeReason: "string",
                    status: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                troubleTicketRelationship: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create: function(request)
    {
        console.log("trouble_ticket_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'create'
            },
            href: faker.internet.url(),
            creationDate: new Date(),
            description: "string",
            expectedResolutionDate: new Date(),
            externalId: "string",
            lastUpdate: new Date(),
            name: "string",
            priority: "string",
            requestedResolutionDate: new Date(),
            resolutionDate: new Date(),
            severity: "string",
            statusChangeDate: new Date(),
            statusChangeReason: "string",
            ticketType: "string",
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            note: [
              {
                id: "string",
                author: "string",
                date: new Date(),
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedEntity: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            status: "acknowledged",
            statusChange: [
              {
                changeDate: new Date(),
                changeReason: "string",
                status: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            troubleTicketRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show: function(request)
    {
        console.log("trouble_ticket_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'show'
            },
            href: faker.internet.url(),
            creationDate: new Date(),
            description: "string",
            expectedResolutionDate: new Date(),
            externalId: "string",
            lastUpdate: new Date(),
            name: "string",
            priority: "string",
            requestedResolutionDate: new Date(),
            resolutionDate: new Date(),
            severity: "string",
            statusChangeDate: new Date(),
            statusChangeReason: "string",
            ticketType: "string",
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            note: [
              {
                id: "string",
                author: "string",
                date: new Date(),
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedEntity: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            status: "acknowledged",
            statusChange: [
              {
                changeDate: new Date(),
                changeReason: "string",
                status: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            troubleTicketRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update: function(request)
    {
        console.log("trouble_ticket_controller.update")
        return{
            id: request.params.id,
            routeDetails: {
                controller: 'Trouble Ticket',
                action: 'update'
            },
            href: faker.internet.url(),
            creationDate: new Date(),
            description: "string",
            expectedResolutionDate: new Date(),
            externalId: "string",
            lastUpdate: new Date(),
            name: "string",
            priority: "string",
            requestedResolutionDate: new Date(),
            resolutionDate: new Date(),
            severity: "string",
            statusChangeDate: new Date(),
            statusChangeReason: "string",
            ticketType: "string",
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            note: [
              {
                id: "string",
                author: "string",
                date: new Date(),
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedEntity: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            status: "acknowledged",
            statusChange: [
              {
                changeDate: new Date(),
                changeReason: "string",
                status: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            troubleTicketRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            code: 204,
            status: 'trouble_ticket successfully destroyed'
        }
    },

    create_listener_create_event: function(request)
    {
        console.log("trouble_ticket_controller.create_listener_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'trouble_ticket_controller',
                action: 'create_listener_create_event'
            },
            callback: "string",
            query: "string"
        }
    },
    create_listener_attribute_value_change_event: function(request)
    {
        console.log("trouble_ticket_controller.create_listener_attribute_value_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'trouble_ticket_controller',
                action: 'create_listener_attribute_value_change_event'
            },
            callback: "string",
            query: "string"
        }
    },
    create_listener_status_change_event: function(request)
    {
        console.log("trouble_ticket_controller.create_listener_status_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'trouble_ticket_controller',
                action: 'create_listener_status_change_event'
            },
            callback: "string",
            query: "string"
        }
    },
    create_listener_delete_event: function(request)
    {
        console.log("trouble_ticket_controller.create_listener_delete_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'trouble_ticket_controller',
                action: 'create_listener_delete_event'
            },
            callback: "string",
            query: "string"
        }
    },
    create_listener_resolved_event: function(request)
    {
        console.log("trouble_ticket_controller.create_listener_resolved_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'trouble_ticket_controller',
                action: 'create_listener_resolved_event'
            },
            callback: "string",
            query: "string"
        }
    },
    create_listener_information_required_event: function(request)
    {
        console.log("trouble_ticket_controller.create_listener_information_required_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'trouble_ticket_controller',
                action: 'create_listener_information_required_event'
            },
            callback: "string",
            query: "string"
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
            code:204,
            status: 'trouble_ticket_hub successfully destroyed'
        }
    }
}