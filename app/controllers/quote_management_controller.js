//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log("quote_management_controller.create")
        return {
            id: faker.random.uuid(),
            status: "quote successfully created"
        }
    }
}