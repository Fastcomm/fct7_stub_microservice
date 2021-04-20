//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("agreement_management_controller.index")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'index'
                },
                
            }

        ]
       
    }

}