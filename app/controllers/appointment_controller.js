//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
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
            externalId: "string",
            description: faker.lorem.sentence(),
            category: "string",
            status: "initialized",
            creationDate: new Date(),
            lastUpdate: new Date(),
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            "@baseType": "string",
            "@type": "string",
            "@schemaLocation": "string",
            attachment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    description: faker.lorem.sentence(),
                    mimeType:  "string",
                    sizeUnit:  "string",
                    size: faker.datatype.number(),
                    url:  "string",
                    "@type": "string",
                    "@schemaLocation": "string"
                }
            ],
            calendarEvent: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                "@referredType": "string"
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@referredType": "string"
                }
            ],
            place: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                role: "string",
                "@referredType": "string",
                "@schemaLocation": "string"
            },
            contactMedium: {
                type: "string",
                characteristic: {
                    phoneNumber: "string",
                    emailAddress: "string",
                    "@type": "string",
                    "@schemaLocation": "string"
                }
            },
            relatedEntity: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@referredType": "string"
                }
            ],
            note: [
                {
                    date: new Date(),
                    author: "string",
                    text: faker.lorem.sentence(),
                }
            ]
            
        }
    },
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
                externalId: "string",
                category: "string",
                description: faker.lorem.sentence(),
                status: "accepted",
                creationDate: new Date(),
                lastUpdate: new Date(),
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                attachment: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        mimeType:  "string",
                        sizeUnit:  "string",
                        size: faker.datatype.number(),
                        url:  "string",
                        "@type": "string"
                    }
                ],
                calendarEvent: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: faker.lorem.sentence(),
                },
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                    },
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                    }
                ],
                place: {
                    role: "interventionAddress",
                    "@referredType": "geographicAddress",
                    geographicAddress: {
                        streetNr: faker.datatype.number(),
                        streetType: "Avenue",
                        streetName: "string",
                        postCode: faker.datatype.number(),
                        city: "Paris",
                        country: "France"
                    }
                },
                relatedEntity: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@referredType": "string"
                    },
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "Work order generated for technician intervention",
                        "@referredType": "workOrder"
                    }
                ],
                note: [
                    {
                        date: new Date(),
                        author: "string",
                        text: faker.lorem.sentence()
                    },
                    {
                        date: new Date(),
                        author: "string",
                        text: faker.lorem.sentence()
                    }
                ]

                
            }
        ]
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
            externalId: "string",
            category: "string",
            description: faker.lorem.sentence(),
            status: "accepted",
            creationDate: new Date(),
            lastUpdate: new Date(),
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            attachment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    mimeType:  "string",
                    sizeUnit:  "string",
                    size: faker.datatype.number(),
                    url:  "string",
                    "@type": "string"
                }
            ],
            calendarEvent: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                },
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                }
            ],
            place: {
                role: "interventionAddress",
                "@referredType": "geographicAddress",
                geographicAddress: {
                    streetNr: faker.datatype.number(),
                    streetType: "Avenue",
                    streetName: "string",
                    postCode: faker.datatype.number(),
                    city: "Paris",
                    country: "France"
                }
            },
            relatedEntity: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@referredType": "string"
                },
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "Work order generated for technician intervention",
                    "@referredType": "workOrder"
                }
            ],
            note: [
                {
                    date: new Date(),
                    author: "string",
                    text: faker.lorem.sentence()
                },
                {
                    date: new Date(),
                    author: "string",
                    text: faker.lorem.sentence()
                }
            ]
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
            externalId: "string",
            description: faker.lorem.sentence(),
            category: "string",
            status: "initialized",
            creationDate: new Date(),
            lastUpdate: new Date(),
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            "@baseType": "string",
            "@type": "string",
            "@schemaLocation": "string",
            attachment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    description: faker.lorem.sentence(),
                    mimeType:  "string",
                    sizeUnit:  "string",
                    size: faker.datatype.number(),
                    url:  "string",
                    "@type": "string",
                    "@schemaLocation": "string"
                }
            ],
            calendarEvent: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                description: faker.lorem.sentence(),
                "@referredType": "string"
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@referredType": "string"
                }
            ],
            place: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                role: "string",
                "@referredType": "string",
                "@schemaLocation": "string"
            },
            contactMedium: {
                type: "string",
                characteristic: {
                    phoneNumber: "string",
                    emailAddress: "string",
                    "@type": "string",
                    "@schemaLocation": "string"
                }
            },
            relatedEntity: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@referredType": "string"
                }
            ],
            note: [
                {
                    date: new Date(),
                    author: "string",
                    text: faker.lorem.sentence(),
                }
            ]
            
           
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: "Appointment entry destroyed successfully",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
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
            relatedParty: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                role: "string",
                "@referredType": "string"
            },
            relatedEntity: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                role: "string",
                "@referredType": "string"
            },
            place: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                role: "string",
                "@referredType": "string",
                "@schemaLocation": "string"
            },
            requestedTimeSlot: [
                {
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    relatedParty: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@referredType": "string",
                        
                    },
                }
            ]    
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
                requestedTimeSlot: [
                    {
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        }
                    }
                ],
                relatedParty: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                },
                place: {
                    role: "interventionAddress",
                    "@referredType": "geographicAddress",
                    geographicAddress: {
                        streetNr: faker.datatype.number(),
                        streetType: "Avenue",
                        streetName: "string",
                        postCode: faker.datatype.number(),
                        city: "Paris",
                        country: "France" 
                    }
                },
                relatedEntity: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "Internet connection problem to solve",
                        "@referredType": "troubleTicket"
                    }
                ]
            }
        ]
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
            requestedTimeSlot: [
                {
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            relatedParty: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                role: "string",
            },
            place: {
                role: "interventionAddress",
                "@referredType": "geographicAddress",
                geographicAddress: {
                    streetNr: faker.datatype.number(),
                    streetType: "Avenue",
                    streetName: "string",
                    postCode: faker.datatype.number(),
                    city: "Paris",
                    country: "France" 
                }
            },
            relatedEntity: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "Internet connection problem to solve",
                    "@referredType": "troubleTicket"
                }
            ]
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
            status: "string",
            searchDate: new Date(),
            searchResult: "string",
            "@type": "string",
            "@schemaLocation": "string",
            availableTimeSlot: [
                {
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    relatedParty: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@referredType": "string",
                    }
                }
            ]

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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: "Time slot destroyed successfully",
            referenceError: "string"
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
        }
    }
}