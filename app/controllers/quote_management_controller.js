//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log("quote_management_controller.create")
        return {
            stub_information: {
                controller: 'quote_management_controller',
                method: 'create'
            },
            id: faker.random.uuid(),
            status: "quote successfully created"
        }
    }
}