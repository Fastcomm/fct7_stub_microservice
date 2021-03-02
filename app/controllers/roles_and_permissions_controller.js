//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create_permission: function(request)
    {
        console.log('roles_and_permissions_controller.create_permission')
        return {
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'create_permission'
            },
            id: faker.random.uuid(),
            description: faker.lorem.sentence(),
            period: {
                startDateTime: new Date(),
                endDateTime: new Date()
            },
            user: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName()
            },
            granter: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName()
            },
            privilege: [
                {
                    manageableAsset: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        entityType: 'yes'
                    },
                    function: faker.hacker.adjective(),
                    action: faker.hacker.verb()
                }
            ],
            assetUserRole: [
                {
                    manageableAsset: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        entityType: 'yes'
                    },
                    userRole: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        role: 'owner'
                    }
                }
            ]
        }
    },
    index_permissions: function(request)
    {
        console.log('roles_and_permissions_controller.index_permissions')
        return [
            {
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'index_permissions'
                },
                id: faker.random.uuid(),
                description: faker.lorem.sentence(),
                period: {
                    startDateTime: new Date(),
                    endDateTime: new Date()
                },
                user: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                granter: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.name.findName()
                },
                privilege: [
                    {
                        manageableAsset: {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            entityType: 'yes'
                        },
                        function: faker.hacker.adjective(),
                        action: faker.hacker.verb()
                    }
                ],
                assetUserRole: [
                    {
                        manageableAsset: {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            entityType: 'yes'
                        },
                        userRole: {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            role: 'owner'
                        }
                    }
                ]
            }
        ]
    },
    show_permission: function(request)
    {
        console.log('roles_and_permissions_controller.show_permission')
        return {
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'show_permission'
            },
            id: request.params.id,
            description: faker.lorem.sentence(),
            period: {
                startDateTime: new Date(),
                endDateTime: new Date()
            },
            user: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName()
            },
            granter: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName()
            },
            privilege: [
                {
                    manageableAsset: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        entityType: 'yes'
                    },
                    function: faker.hacker.adjective(),
                    action: faker.hacker.verb()
                }
            ],
            assetUserRole: [
                {
                    manageableAsset: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        entityType: 'yes'
                    },
                    userRole: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        role: 'owner'
                    }
                }
            ]
        }
    },
    create_role: function(request)
    {
        console.log('roles_and_permissions_controller.create_role')
        return {
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'create_role'
            },
            id: faker.random.uuid(),
            href: faker.internet.url(),
            involvementRole: 'owner',
            entitlement: [
                {
                    manageableAsset: {
                        id: faker.random.uuid(),
                        entityType: 'yes'
                    },
                    function: faker.hacker.adjective(),
                    action: faker.hacker.verb()
                }
            ]
        }
    },
    index_roles: function(request)
    {
        console.log('roles_and_permissions_controller.index_roles')
        return [
            {
                routeDetails: {
                    controller: 'User Roles and Permissions',
                    action: 'index_roles'
                },
                id: faker.random.uuid(),
                href: faker.internet.url(),
                involvementRole: 'owner',
                entitlement: [
                    {
                        manageableAsset: {
                            id: faker.random.uuid(),
                            entityType: 'yes'
                        },
                        function: faker.hacker.adjective(),
                        action: faker.hacker.verb()
                    }
                ]
            }
        ]
    },
    show_role: function(request)
    {
        console.log('roles_and_permissions_controller.show_role')
        return {
            routeDetails: {
                controller: 'User Roles and Permissions',
                action: 'show_role'
            },
            id: request.params.id,
            href: faker.internet.url(),
            involvementRole: 'owner',
            entitlement: [
                {
                    manageableAsset: {
                        id: faker.random.uuid(),
                        entityType: 'yes'
                    },
                    function: faker.hacker.adjective(),
                    action: faker.hacker.verb()
                }
            ]
        }
    }
}