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
                }


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
            href: faker.internet.url(),
            
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
            href: faker.internet.url(),
            
        }
    },
    show_message: function(request)
    {
        console.log("communication_management_controller.index_message")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Communication Management',
                    action: 'index_message'
                },
                href: faker.internet.url(),
                
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
            href: faker.internet.url(),
            
        }

    },
    destroy_message: function(request)
    {
        console.log("communication_management_controller.destroy_message")
        return {
            stub_information: {
                controller: 'product_ordering_controller',
                method: 'destroy'
            },
            id: request.params.id,
            routeDetails: {
                controller: 'Communication Management',
                action: 'destroy_message'
            },
            status: "product_order entry destroyed successfully"
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
            callback: "string"
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
            message: "Have succesfully removed"
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
            eventId : faker.datatype.uuid(),
            eventType: "string",
            event: {
                id: faker.datatype.uuid(),
                callback: "string",
                query: "string"
            }
        }
    },

}