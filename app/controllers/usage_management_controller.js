//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log('usage_management_controller.create')
    },
    show: function(request)
    {
        console.log('usage_management_controller.show')
    },
    index: function(request)
    {
        console.log('usage_management_controller.index')
    },
    update: function(request)
    {
        console.log('usage_management_controller.update')
    },
    destroy: function(request)
    {
        console.log('usage_management_controller.destroy')
    },
    create_specification: function(request)
    {
        console.log('usage_management_controller.create_specification')
    },
    show_specification: function(request)
    {
        console.log('usage_management_controller.show_specification')
    },
    destroy_specification: function(request)
    {
        console.log('usage_management_controller.destroy_specification')
    },
    create_hub: function(request)
    {
        console.log('usage_management_controller.create_hub')
    },
    show_hub: function(request)
    {
        console.log('usage_management_controller.show_hub')
    },
    index_hub: function(request)
    {
        console.log('usage_management_controller.index_hub')
    },
    destroy_hub: function(request)
    {
        console.log('usage_management_controller.destroy_hub')
    }
}