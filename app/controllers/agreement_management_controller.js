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
                agreementPeriod: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                completionDate: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                description: faker.lorem.sentence(),
                documentNumber: faker.datatype.number(),
                href: faker.internet.url(),
                initialDate: new Date(),
                name: faker.name.findName(),
                statementOfIntent: faker.lorem.sentence(),
                status: "process",
                type: "commercial",
                version: "1.5",
                agreementSpecification: {
                    description: faker.lorem.sentence(),
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: faker.name.findName(),
                    "@referredType": "string"
                },
                agreementItem: [
                    {
                        productOffering: [
                            {
                                href: faker.internet.url(),
                                id: faker.datatype.uuid(),
                                name: faker.name.findName(),
                                "@referredType": "string"
                            }
                        ],
                        termOrCondition: [
                            {
                                description: faker.lorem.sentence(),
                                id: faker.datatype.uuid(),
                                validFor: 
                                {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                "@type": "string"
                            }
                        ],
                        "@type": "string"
                    }
                ],
                engagedPartyRole: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: faker.name.findName(),
                        partyId: faker.datatype.number(),
                        partyName: faker.name.findName(),
                        "@referredType": "string"
                    }
                ],
                agreementAuthorization: [
                    {
                        date: new Date(),
                        signatureRepresentation: faker.name.findName(),
                        status: "rejected",
                        "@type": "string"
                    }
                ],
                characteristic: [
                    {
                        name: faker.name.findName(),
                        value: faker.datatype.number(),
                        "@type": "string",
                        "@schemaLocation": "string"
                    }  
                ],
                associateAgreement: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: faker.name.findName(),
                        "@referredType": "string"
                    }
                ],
                "@type": "string",
                "@schemaLocation": "string",
                "@baseType": "string"
            }
        ]
    }
}