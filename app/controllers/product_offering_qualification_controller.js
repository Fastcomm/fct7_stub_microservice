//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("product_offering_qualification_controller.index")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Offering Qualification',
                    action: 'index'
                },
                href: faker.internet.url(),
                productOfferingQualificationDateTime:  new Date(),
                description: faker.random.words(),
                state: "string",
                qualificationResult: "string",
                expectedQualificationDate: new Date(),
                estimatedResponseDate: new Date(),
                effectiveQualificationDate: new Date(),
                expirationDate: new Date(),
                provideAlternative: true,
                provideOnlyAvailable: true,
                provideUnavailabilityReason: "string",
                "@baseType": "string",
                "@type": "string",
                "@schemaLocation": "string",
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        role: "string",
                        name: "string",
                        "@referredType": "string"
                    }
                ],
                channel: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@type": "string"
                },
                productOfferingQualificationItem: [
                    {
                        id: faker.datatype.uuid(),
                        state: "string",
                        expectedActivationDate: new Date(),
                        qualificationItemResult: "string",
                        "@type": "string",
                        "@schemaLocation": "string",
                        eligibilityUnavailabilityReason: [
                            {
                                code: "string",
                                label: "string",
                                "@type": "string",
                                "@schemaLocation": "string"
                            }
                        ],
                        category: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            version: "string",
                            name: "string",
                            "@referredType": "string"
                        },
                        qualificationItemRelationship: [
                            {
                                type: "string",
                                id: faker.datatype.uuid()
                            }
                        ],
                        product: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            place: [
                                {
                                    id: faker.datatype.uuid(),
                                    href: faker.internet.url(),
                                    role: "string",
                                    name: "string",
                                    "@referredType": "string",
                                    "@schemaLocation": "string"
                                }
                            ],
                            productRelationship: [
                                {
                                    type: "string",
                                    productRefOrValue: "string"

                                }
                            ],
                            characteristic: [
                                {
                                    name: "string",
                                    value: "string",
                                    "@type": "string",
                                    "@schemaLocation": "string"
                                }
                            ],
                            relatedParty: [
                                {
                                    id: faker.datatype.uuid(),
                                    href: faker.internet.url(),
                                    role: "string",
                                    name: "string",
                                    "@referredType": "string"
                                }
                            ],
                            productSpecification: {
                                id: faker.datatype.uuid(),
                                href: faker.internet.url(),
                                version: "string",
                                name: "string",
                                "@referredType": "string",
                                "@schemaLocation": "string"
                            }
                        },
                        productOffering:{
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            "@referredType": "string"
                        },
                        terminationError: [
                            {
                                id: faker.datatype.uuid(),
                                value: "string"
                            }
                        ],
                        alternateProductOfferingProposal: [
                            {
                                id: faker.datatype.uuid(),
                                alternateActivationDate: new Date,
                                "@type": "string",
                                "@schemaLocation": "string",
                                alternateProductSpecification: [
                                    "string"
                                ],
                                alternateProductOffering: [
                                    "string"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}