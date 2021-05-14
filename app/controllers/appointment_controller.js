//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("appointment_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Appointment',
                    action: 'index_appointment'
                },
                href: faker.internet.url(),
                category: "string",
                creationDate: new Date(),
                description: "string",
                externalId: "string",
                lastUpdate: new Date(),
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
                calendarEvent: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                contactMedium: [
                  {
                    mediumType: "string",
                    preferred: true,
                    characteristic: {
                      city: "string",
                      contactType: "string",
                      country: "string",
                      emailAddress: "string",
                      faxNumber: "string",
                      phoneNumber: "string",
                      postCode: "string",
                      socialNetworkId: "string",
                      stateOrProvince: "string",
                      street1: "string",
                      street2: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
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
                relatedPlace: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                status: "initialized",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
        ]
    },
    create: function(request)
    {
        console.log("appointment_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_appointment'
            },
            href: faker.internet.url(),
            category: "string",
            creationDate: new Date(),
            description: "string",
            externalId: "string",
            lastUpdate: new Date(),
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
            calendarEvent: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            contactMedium: [
              {
                mediumType: "string",
                preferred: true,
                characteristic: {
                  city: "string",
                  contactType: "string",
                  country: "string",
                  emailAddress: "string",
                  faxNumber: "string",
                  phoneNumber: "string",
                  postCode: "string",
                  socialNetworkId: "string",
                  stateOrProvince: "string",
                  street1: "string",
                  street2: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
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
            relatedPlace: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            status: "initialized",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    show: function(request)
    {
        console.log("appointment_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Appointment',
                action: 'show_appointment'
            },
            href: faker.internet.url(),
            category: "string",
            creationDate: new Date(),
            description: "string",
            externalId: "string",
            lastUpdate: new Date(),
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
            calendarEvent: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            contactMedium: [
              {
                mediumType: "string",
                preferred: true,
                characteristic: {
                  city: "string",
                  contactType: "string",
                  country: "string",
                  emailAddress: "string",
                  faxNumber: "string",
                  phoneNumber: "string",
                  postCode: "string",
                  socialNetworkId: "string",
                  stateOrProvince: "string",
                  street1: "string",
                  street2: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
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
            relatedPlace: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            status: "initialized",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update: function(request)
    {
        console.log("appointment_controller.update")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Appointment',
                action: 'update_appointment'
            },
            href: faker.internet.url(),
            category: "string",
            creationDate: new Date(),
            description: "string",
            externalId: "string",
            lastUpdate: new Date(),
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
            calendarEvent: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            contactMedium: [
              {
                mediumType: "string",
                preferred: true,
                characteristic: {
                  city: "string",
                  contactType: "string",
                  country: "string",
                  emailAddress: "string",
                  faxNumber: "string",
                  phoneNumber: "string",
                  postCode: "string",
                  socialNetworkId: "string",
                  stateOrProvince: "string",
                  street1: "string",
                  street2: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
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
            relatedPlace: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            status: "initialized",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }

    },
    destroy: function(request)
    {
        console.log("appointment_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Appointment',
                action: 'destroy_appointment'
            },
            code: 204,
        }
    },

    index_time_slot: function(request)
    {
        console.log("appointment_controller.index_time_slot")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Appointment',
                    action: 'index_time_slot'
                },
                href: faker.internet.url(),
                searchDate: new Date(),
                searchResult: "string",
                availableTimeSlot: [
                  {
                    id: "string",
                    href: "string",
                    relatedParty: {
                      id: "string",
                      href: "string",
                      name: "string",
                      role: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
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
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                relatedPlace: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                requestedTimeSlot: [
                  {
                    id: "string",
                    href: "string",
                    relatedParty: {
                      id: "string",
                      href: "string",
                      name: "string",
                      role: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                status: "inProgress",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
        ]
    },
    create_time_slot: function(request)
    {
        console.log("appointment_controller.create_time_slot")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_time_slot'
            },
            href: faker.internet.url(),
            searchDate: new Date(),
            searchResult: "string",
            availableTimeSlot: [
              {
                id: "string",
                href: "string",
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
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
            relatedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            relatedPlace: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            requestedTimeSlot: [
              {
                id: "string",
                href: "string",
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            status: "inProgress",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    show_time_slot: function(request)
    {
        console.log("appointment_controller.show_time_slot")
        return {
            id: request.params.slot_id,
            routeDetails: {
                controller: 'Appointment',
                action: 'show_time_slot'
            },
            href: faker.internet.url(),
            searchDate: new Date(),
            searchResult: "string",
            availableTimeSlot: [
              {
                id: "string",
                href: "string",
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
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
            relatedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            relatedPlace: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            requestedTimeSlot: [
              {
                id: "string",
                href: "string",
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            status: "inProgress",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    update_time_slot: function(request)
    {
        console.log("appointment_controller.update_time_slot")
        return {
            id: request.params.slot_id,
            routeDetails: {
                controller: 'Appointment',
                action: 'update_time_slot'
            },
            href: faker.internet.url(),
            searchDate: new Date(),
            searchResult: "string",
            availableTimeSlot: [
              {
                id: "string",
                href: "string",
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
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
            relatedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            relatedPlace: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            requestedTimeSlot: [
              {
                id: "string",
                href: "string",
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            status: "inProgress",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    destroy_time_slot: function(request)
    {
        console.log("appointment_controller.destroy_time_slot")
        return {
            id: request.params.slot_id,
            routeDetails: {
                controller: 'Appointment',
                action: 'destroy_time_slot'
            },
            code: 204
        }
    },

    create_appointment_notification_listener_create_event: function(request)
    {
        console.log("appointment_controller.create_appointment_notification_listener_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_appointment_notification_listener_create_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_appointment_notification_listener_attribute_value_change_event: function(request)
    {
        console.log("appointment_controller.create_appointment_notification_listener_attribute_value_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_appointment_notification_listener_attribute_value_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_appointment_notification_listener_state_change_event: function(request)
    {
        console.log("appointment_controller.create_appointment_notification_listener_state_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_appointment_notification_listener_state_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_appointment_notification_listener_delete_event: function(request)
    {
        console.log("appointment_controller.create_appointment_notification_listener_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_appointment_notification_listener_delete_event'
            },
            "callback": "string",
            "query": "string"
          }
    },

    create_search_time_slot_notification_listener_create_event: function(request)
    {
        console.log("appointment_controller.create_search_time_slot_notification_listener_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_search_time_slot_notification_listener_create_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_search_time_slot_notification_listener_attribute_value_change_event: function(request)
    {
        console.log("appointment_controller.create_search_time_slot_notification_listener_attribute_value_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_search_time_slot_notification_listener_attribute_value_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_search_time_slot_notification_listener_state_change_event: function(request)
    {
        console.log("appointment_controller.create_search_time_slot_notification_listener_state_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_search_time_slot_notification_listener_state_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_search_time_slot_notification_listener_delete_event: function(request)
    {
        console.log("appointment_controller.create_search_time_slot_notification_listener_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Appointment',
                action: 'create_search_time_slot_notification_listener_delete_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    
    create_hub: function(request)
    {
        console.log("appointment_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Appointment',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("appointment_controller.destroy_hub")
        return {  
            id: request.params.hub_id,
            routeDetails: {
                controller: 'Appointment',
                action: 'destroy_hub'
            },
            code: 204
        }
    }
}