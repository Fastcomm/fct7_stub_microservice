//  === Requirements ===

const faker = require('faker')

//  === Controller ===
module.exports = {
    
    index_message: function(request){
        console.log("communication_management_controller.index_message")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Communication Management',
                    action: 'index_message'
                },
                href: faker.internet.url(),
                type: "1",
                priority: "1",
                subject: "News: the latest promotion for you ",
                sendTime: new Date(),
                sendTimeComplete: new Date(),
                status: "Completed",
                description: faker.random.words(),
                content: "Dear $Parameter1,Here is the information of the promotion $Parameter2",
                contactLogFlag: "false",
                callbackFlag: "true",
                tryTimes: "3",
                version: "1.0",
                characteristic: [
                    {
                        name: faker.name.findName(),
                        value: "string"
                    },
                    {
                        name: faker.name.findName(),
                        value: "string"
                    }
                ],
                attachment: {
                    description: faker.random.words(),
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    path: "/attachedfile/1", 
                    name: "File_XYZ_001",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    }
                },
                sender: {
                    id: faker.datatype.uuid(),
                    name: faker.name.findName(),
                    phoneNumber: "10086",
                    relatedParty: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        role: "agent",
                        name: "johathan doelock"
                    }
                },
                receiver: [
                    {
                        id: faker.datatype.uuid(),
                        name: faker.name.findName(),
                        phoneNumber: "10086",
                        relatedParty: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            role: "customer",
                            name: "John Lock"
                        }
                    }
                ]
            }
        ]
    },
    create_message: function(request)
    {
        console.log("communication_management_controller.create_message")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Communication Management',
                action: 'create_message'
            },
            callbackFlag: false,
            content: faker.random.words(),
            description: faker.random.words(),
            logFlag: true,
            priority: "1",
            sendTime: new Date(),
            sendTimeComplete: new Date(),
            status: "Completed",
            subject: "News: the latest promotion for you ",
            tryTimes: "3",
            type: "email",
            version: "1.0",
            attachment: [
                {
                    description: faker.random.words(),
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    mimeType: "string",
                    name: "string",
                    path: "string",
                    size: 0,
                    sizeUnit: 0,
                    url: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    "@type": "string",
                    "@schemaLocation": "string",
                    "@baseType": "string"
                }
            ],
            receiver: [
                {
                    appUserId: "string",
                    email:"joebush@yahoo.com",
                    id:"10234",
                    ip: "string",
                    name:"Joe Bush",
                    phoneNumber: "string",
                    type:"string",
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "John Lock",
                        role: "customer",
                        "@referredType": "string"
                    },
                    "@type": "string",
                    "@baseType": "string",
                    "@schemaLocation": "string"
                }
            ],
            sender: {
                email:"joe@yahoo.com",
                id:"1094",
                name:"ABC Bush",
                phoneNumber: "string",
                relatedParty: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "John Lock",
                    role: "customer",
                    "@referredType": "string"
                },
                "@type": "string",
                "@baseType": "string",
                "@schemaLocation": "string"
            },
            characteristic:[
                {
                    name: "string",
                    value: "string"
                }
            ],
            "@type": "string",
            "@schemaLocation": "string",
            "@baseType": "string" 
        }
    },
    create_message_send: function(request)
    {
        console.log("communication_management_controller.create_message_send")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Communication Management',
                action: 'create_message_send'
            },
            callbackFlag: false,
            content: faker.random.words(),
            description: faker.random.words(),
            logFlag: true,
            priority: "1",
            sendTime: new Date(),
            sendTimeComplete: new Date(),
            status: "Completed",
            subject: "News: the latest promotion for you ",
            tryTimes: "3",
            type: "email",
            version: "1.0",
            attachment: [
                {
                    description: faker.random.words(),
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    mimeType: "string",
                    name: "string",
                    path: "string",
                    size: 0,
                    sizeUnit: 0,
                    url: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    "@type": "string",
                    "@schemaLocation": "string",
                    "@baseType": "string"
                }
            ],
            receiver: [
                {
                    appUserId: "string",
                    email:"joebush@yahoo.com",
                    id:"10234",
                    ip: "string",
                    name:"Joe Bush",
                    phoneNumber: "string",
                    type:"string",
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "John Lock",
                        role: "customer",
                        "@referredType": "string"
                    },
                    "@type": "string",
                    "@baseType": "string",
                    "@schemaLocation": "string"
                }
            ],
            sender: {
                email:"joe@yahoo.com",
                id:"1094",
                name:"ABC Bush",
                phoneNumber: "string",
                relatedParty: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "John Lock",
                    role: "customer",
                    "@referredType": "string"
                },
                "@type": "string",
                "@baseType": "string",
                "@schemaLocation": "string"
            },
            characteristic:[
                {
                    name: "string",
                    value: "string"
                }
            ],
            "@type": "string",
            "@schemaLocation": "string",
            "@baseType": "string"      
        }
    },
    show_message: function(request)
    {
        console.log("communication_management_controller.index_message")
        return [
            {
                id: request.params.id,
                routeDetails: {
                    controller: 'Communication Management',
                    action: 'index_message'
                },
                href: faker.internet.url(),
                type: "1",
                priority: "1",
                subject: "News: the latest promotion for you ",
                sendTime: new Date(),
                sendTimeComplete: new Date(),
                status: "Completed",
                description: faker.random.words(),
                content: "Dear $Parameter1,Here is the information of the promotion $Parameter2",
                contactLogFlag: "false",
                callbackFlag: "true",
                tryTimes: "3",
                version: "1.0",
                characteristic: [
                    {
                        name: faker.name.findName(),
                        value: "string"
                    },
                    {
                        name: faker.name.findName(),
                        value: "string"
                    }
                ],
                attachment: {
                    description: faker.random.words(),
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    path: "/attachedfile/1", 
                    name: "File_XYZ_001",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    }
                },
                sender: {
                    id: faker.datatype.uuid(),
                    name: faker.name.findName(),
                    phoneNumber: "10086",
                    relatedParty: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        role: "agent",
                        name: "johathan doelock"
                    }
                },
                receiver: [
                    {
                        id: faker.datatype.uuid(),
                        name: faker.name.findName(),
                        phoneNumber: "10086",
                        relatedParty: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            role: "customer",
                            name: "John Lock"
                        }
                    }
                ]
            }
        ]
    },
    update_message: function(request)
    {
        console.log("communication_management_controller.update_message")
        return {
            stub_information: {
                controller: 'product_ordering_controller',
                method: 'update'
            },
            id: request.params.id,
            routeDetails: {
                controller: 'Communication Management',
                action: 'update_message'
            },
            callbackFlag: false,
            content: faker.random.words(),
            description: faker.random.words(),
            logFlag: true,
            priority: "1",
            sendTime: new Date(),
            sendTimeComplete: new Date(),
            status: "Completed",
            subject: "News: the latest promotion for you ",
            tryTimes: 0,
            type: "email",
            version: "1.0",
            attachment: [
                {
                    description: faker.random.words(),
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    mimeType: "string",
                    name: "string",
                    path: "string",
                    size: 0,
                    sizeUnit: 0,
                    url: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    "@type": "string",
                    "@schemaLocation": "string",
                    "@baseType": "string"
                }
            ],
            receiver: [
                {
                    appUserId: "string",
                    email:"joebush@yahoo.com",
                    id:"10234",
                    ip: "string",
                    name:"Joe Bush",
                    phoneNumber: "string",
                    type:"string",
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "John Lock",
                        role: "customer",
                        "@referredType": "string"
                    },
                    "@type": "string",
                    "@baseType": "string",
                    "@schemaLocation": "string"
                }
            ],
            sender: {
                email:"joe@yahoo.com",
                id:"1094",
                name:"ABC Bush",
                phoneNumber: "string",
                relatedParty: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "John Lock",
                    role: "customer",
                    "@referredType": "string"
                },
                "@type": "string",
                "@baseType": "string",
                "@schemaLocation": "string"
            },
            characteristic:[
                {
                    name: "string",
                    value: "string"
                }
            ],
            "@type": "string",
            "@schemaLocation": "string",
            "@baseType": "string" 
            
        }

    },
    destroy_message: function(request)
    {
        console.log("communication_management_controller.destroy_message")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Communication Management',
                action: 'destroy_message'
            },
            code: 204,
            reason: "string",
            message: "string",
            status: "product_order entry destroyed successfully",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },
    create_send: function(request)
    {
        console.log("communication_management_controller.create_send")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Communication Management',
                action: 'create_send'
            },
            href: faker.internet.url(),
            type: "1",
            priority: "1",
            subject: "News: the latest promotion for you ",
            sendTime: new Date(),
            sendTimeComplete: new Date(),
            status: "Completed",
            description: faker.random.words(),
            content: "Dear $Parameter1,Here is the information of the promotion $Parameter2",
            contactLogFlag: "false",
            callbackFlag: "true",
            tryTimes: "3",
            version: "1.0",
            characteristic: [
                {
                    name: faker.name.findName(),
                    value: "string"
                },
                {
                    name: faker.name.findName(),
                    value: "string"
                }
            ],
            attachment: {
                description: faker.random.words(),
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                path: "/attachedfile/1", 
                name: "File_XYZ_001",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                }
            },
            sender: {
                id: faker.datatype.uuid(),
                name: faker.name.findName(),
                phoneNumber: "10086",
                relatedParty: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    role: "agent",
                    name: "johathan doelock"
                }
            },
            receiver: [
                {
                    id: faker.datatype.uuid(),
                    name: faker.name.findName(),
                    phoneNumber: "10086",
                    relatedParty: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        role: "customer",
                        name: "John Lock"
                    }
                }
            ]
        }
    },
    create_hub: function(request)
    {
        console.log("communication_management_controller.create_hub")
        
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Communication Management',
                action: 'create_hub'
            },
            callback: "string",
            query: "string"
        }
    },
    destroy_hub: function(request)
    {
        console.log("communication_management_controller.destroy_hub")

        return {
            id: request.params.hub_id,
            routeDetails: {
                controller: 'Communication Management',
                action: 'destroy_hub'
            },
            code: 204,
            reason: "string",
            message: "string",
            status: "destroy_hub entry destroyed successfully",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },
    create_client_listener: function(request)
    {
        console.log("communication_management_controller.create_client_listener")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Communication Management',
                action: 'create_client_listener'
            },
            event: {},
            eventType: "string",
            eventTime: "string",
            eventId: "string", 
        }
    },
}