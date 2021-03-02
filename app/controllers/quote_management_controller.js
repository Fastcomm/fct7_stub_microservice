//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log("quote_management_controller.create")
        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Quote Management',
                action: 'create'
            },
            status: "quote successfully created"
        }
    }
}