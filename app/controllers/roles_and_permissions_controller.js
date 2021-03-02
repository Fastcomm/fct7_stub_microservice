//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create_permission: function(request)
    {
        console.log('roles_and_permissions_controller.create_permission')
    },
    index_permissions: function(request)
    {
        console.log('roles_and_permissions_controller.index_permissions')
    },
    show_permission: function(request)
    {
        console.log('roles_and_permissions_controller.show_permission')
    },
    create_role: function(request)
    {
        console.log('roles_and_permissions_controller.create_role')
    },
    index_roles: function(request)
    {
        console.log('roles_and_permissions_controller.index_roles')
    },
    show_role: function(request)
    {
        console.log('roles_and_permissions_controller.show_role')
    }
}