//  === Controller ===
module.exports = {
    show: function(request)
    {
        console.log("usage_consumption_controller.show")
        return {
            id: request.param.id
        }
    },
    index: function(request)
    {
        console.log("usage_consumption_controller.index")
    },
    destroy: function(request)
    {
        console.log("usage_consumption_controller.destroy")
    },
    create_request: function(request)
    {
        console.log("usage_consumption_controller.create_request")
    },
    show_request: function(request)
    {
        console.log("usage_consumption_controller.show_request")
    },
    index_requests: function(request)
    {
        console.log("usage_consumption_controller.index_request")
    },
    destroy_request: function(request)
    {
        console.log("usage_consumption_controller.destroy_request")
    },
    create_hub: function(request)
    {
        console.log("usage_consumption_controller.create_hub")
    },
    destroy_hub: function(request)
    {
        console.log("usage_consumption_controller.destroy_hub")
    }
}