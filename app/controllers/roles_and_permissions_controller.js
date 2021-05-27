//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_permissions: function(request)
    {
        console.log('roles_and_permissions_controller.index_permissions')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'index_permissions'
                },
                href: faker.internet.url(),
                creationDate: new Date(),
                description: "string",
                assetUserRole: [
                  {
                    manageableAsset: {
                      id: "string",
                      href: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    userRole: {
                      id: "string",
                      href: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                granter: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                privilege: [
                  {
                    action: "string",
                    function: "string",
                    manageableAsset: {
                      id: "string",
                      href: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                user: {
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
        ]
    },
    create_permission: function(request)
    {
        console.log('roles_and_permissions_controller.create_permission')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'create_permissions'
            },
            href: faker.internet.url(),
            creationDate: new Date(),
            description: "string",
            assetUserRole: [
              {
                manageableAsset: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                userRole: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            granter: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            privilege: [
              {
                action: "string",
                function: "string",
                manageableAsset: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            user: {
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
    },
    show_permission: function(request)
    {
        console.log('roles_and_permissions_controller.show_permission')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'show_permission'
            },
            href: faker.internet.url(),
            creationDate: new Date(),
            description: "string",
            assetUserRole: [
              {
                manageableAsset: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                userRole: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            granter: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            privilege: [
              {
                action: "string",
                function: "string",
                manageableAsset: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            user: {
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
    },
    update_permission: function(request)
    {
        console.log('roles_and_permissions_controller.update_permission')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'update_permission'
            },
            href: faker.internet.url(),
            creationDate: new Date(),
            description: "string",
            assetUserRole: [
              {
                manageableAsset: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                userRole: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            granter: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            privilege: [
              {
                action: "string",
                function: "string",
                manageableAsset: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            user: {
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
    },

    index_roles: function(request)
    {
        console.log('roles_and_permissions_controller.index_roles')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'index_roles'
                },
                href: faker.internet.url(),
                involvementRole: "string",
                entitlement: [
                  {
                    action: "string",
                    function: "string",
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
    create_role: function(request)
    {
        console.log('roles_and_permissions_controller.create_role')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'create_roles'
            },
            href: faker.internet.url(),
            "involvementRole": "string",
            "entitlement": [
              {
                "action": "string",
                "function": "string",
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
    show_role: function(request)
    {
        console.log('roles_and_permissions_controller.show_role')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'show_roles'
            },
            href: faker.internet.url(),
                involvementRole: "string",
                entitlement: [
                  {
                    action: "string",
                    function: "string",
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
    update_role: function(request)
    {
        console.log('roles_and_permissions_controller.update_role')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'update_role'
            },
            href: faker.internet.url(),
                involvementRole: "string",
                entitlement: [
                  {
                    action: "string",
                    function: "string",
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

    listener_permission_create_event: function(request)
    {
        console.log('roles_and_permissions_controller.listener_permission_create_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'listener_permission_create_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_permission_attribute_value_change: function(request)
    {
        console.log('roles_and_permissions_controller.listener_permission_attribute_value_change')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'listener_permission_attribute_value_change'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_permission_state_change_event: function(request)
    {
        console.log('roles_and_permissions_controller.listener_permission_state_change_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'listener_permission_state_change_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },   
    listener_permission_delete_event: function(request)
    {
        console.log('roles_and_permissions_controller.listener_permission_delete_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'listener_permission_delete_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },

    listener_roles_create_event: function(request)
    {
        console.log('roles_and_permissions_controller.listener_roles_create_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'listener_roles_create_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_roles_attribute_value_change: function(request)
    {
        console.log('roles_and_permissions_controller.listener_roles_attribute_value_change')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'listener_roles_attribute_value_change'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_roles_state_change_event: function(request)
    {
        console.log('roles_and_permissions_controller.listener_roles_state_change_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'listener_roles_state_change_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },   
    listener_roles_delete_event: function(request)
    {
        console.log('roles_and_permissions_controller.listener_roles_delete_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'listener_roles_delete_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },

    create_hub: function(request)
    {
        console.log("roles_and_permissions_controller.create_hub")
        return {
            routeDetails: {
                controller: 'roles_and_permissions_controller',
                action: 'create_hub'
            },
            id: faker.datatype.uuid(),
            callback: faker.internet.url(),
            query: faker.hacker.phrase()
        }
    },
    destroy_hub: function(request)
    {
        console.log("roles_and_permissions_controller.destroy_hub")
        return {
            routeDetails: {
                controller: 'roles_and_permissions_controller',
                action: 'destroy_hub'
            },
            code:204,
            status: 'trouble_ticket_hub successfully destroyed'
        }
    } 
    
}