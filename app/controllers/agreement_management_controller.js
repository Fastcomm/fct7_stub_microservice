//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("agreement_management_controller.index")

        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'index'
                },
                agreementPeriod: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                completionDate: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                description: faker.lorem.sentence(),
                documentNumber: faker.random.number(),
                href: faker.internet.url(),
                initialDate: new Date(),
                name: faker.name.findName(),
                statementOfIntent: faker.lorem.sentence(),
                status: "process",
                type: "commercial",
                version: "1.5",
                requestor: {
                    description: faker.lorem.sentence(),
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: faker.name.findName(),
                },
                agreementItem: [
                    {
                        productOffering: [
                            {
                                href: faker.internet.url(),
                                id: faker.random.uuid(),
                                name: faker.name.findName(),
                            }
                        ]
                    },
                    {
                        termOrCondition:{
                            description: faker.lorem.sentence(),
                            id: faker.random.uuid(),
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                        }
                            
                    }
                ],
                engagedPartyRole: [
                    {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: faker.name.findName(),
                        partyId: faker.random.number(),
                        partyName: faker.name.findName(),
                    }
                ],
                agreementAuthorization: [
                    {
                        date: new Date(),
                        signatureRepresentation: faker.name.findName(),
                        status: "rejected",

                    }
                ],
                characteristic: [
                    {
                        name: faker.name.findName(),
                        value: faker.random.number(),
                    },
                    {
                        name: faker.name.findName(),
                        value: faker.random.number(),
                    }
                ],
                associateAgreement: [
                    {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: faker.name.findName()
                    }
                ]
            }

        ]
       
    }

}