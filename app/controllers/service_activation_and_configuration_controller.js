//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.index_service")
        
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'index_service'
                }
            }
        ]
    },
    create_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_service")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_service'
            }
        }
    },
    show_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.show_service")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'show_service'
            }
        }
    },
    update_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.update_service")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'update_service'
            }
        }
    },
    remove_service: function(request)
    {
        console.log("service_activation_and_configuration_controller.remove_service")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'remove_service'
            }
        }
    },

    index_monitor: function(request)
    {
        console.log("service_activation_and_configuration_controller.index_monitor")
        
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'index_monitor'
                }
            }
        ]
    },
    show_monitor: function(request)
    {
        console.log("service_activation_and_configuration_controller.show_monitor")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'show_monitor'
            }
        }
    },

    create_listener_notification_monitor_create: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_monitor_create")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_monitor_create'
            }
        }
    },
    create_listener_notification_monitor_attribute_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_monitor_attribute_change")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_monitor_attribute_change'
            }
        }
    },
    create_listener_notification_monitor_state_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_monitor_state_change")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_monitor_state_change'
            }
        }
    },
    create_listener_notification_monitor_delete: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_monitor_delete")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_monitor_delete'
            }
        }
    },
    create_listener_notification_service_create: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_service_create")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_service_create'
            }
        }
    },
    create_listener_notification_service_attribute_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_service_attribute_change")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_service_attribute_change'
            }
        }
    },
    create_listener_notification_service_state_change: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_service_state_change")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_service_state_change'
            }
        }
    },
    create_listener_notification_service_delete: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_listener_notification_service_delete")
        return {  
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_listener_notification_service_delete'
            }
        }
    },

    create_hub: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_hub")
        return [
            { 
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Service Activation and Configuration',
                    action: 'create_hub'
                },
            
            }
        ]
    },
    remove_hub: function(request)
    {
        console.log("service_activation_and_configuration_controller.remove_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'remove_hub'
            },
            
        }
    },
    create_client_listener: function(request)
    {
        console.log("service_activation_and_configuration_controller.create_client_listener")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Service Activation and Configuration',
                action: 'create_client_listener'
            }
            
        }
    }
}