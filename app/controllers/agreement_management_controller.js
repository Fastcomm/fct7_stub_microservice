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
    },
    create: function(request)
    {
        console.log("agreement_management_controller.create")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'create'
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
    },
    show: function(request)
    {
        console.log("agreement_management_controller.show")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'show'
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
    },
    update: function(request)
    {
        console.log("agreement_management_controller.update")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'update'
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
    },
    destroy: function(request)
    {
        console.log("agreement_management_controller.destroy")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'destroy'
                },
                code: 204
            }
        ]
    },

    index_agreement_specification: function(request)
    {
        console.log("agreement_management_controller.index_agreement_specification")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'index_agreement_specification'
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                isBundle: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                validFor: 
                {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                version: "string",
                serviceCategory: {
                    href: "string",
                    id: "string",
                    name: "string",
                    "@referredType": "string"
                },
                specCharacteristic: [
                    {
                        configurable: true,
                        description:  "string",
                        name:  "string",
                        validFor: 
                        {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        valueType:  "string",
                        specCharacteristicValue: [
                            {
                                default: true,
                                unitOfMeasure:  "string",
                                validFor: 
                                {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                value: "string",
                                valueFrom: "string",
                                valueTo:  "string",
                                valueType:  "string",
                                "@type": "string"
                            }
                        ],
                        "@type": "string",
                        "@schemaLocation": "string"
                    }
                ],
                relatedParty: [
                    {
                        href: "string",
                        id: "string",
                        name: "string",
                        role: "string",
                        "@referredType": "string"
                    }
                ],
                attachment: [
                    {
                        href: "string",
                        id: "string",
                        type: "string",
                        url: "string",
                        "@type": "string"
                    }
                ],
                specificationRelationship: [
                    {
                        href: "string",
                        id: "string",
                        type: "string",
                        validFor: 
                        {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@type": "string"
                    }
                ],
                "@type": "string",
                "@schemaLocation": "string",
                "@baseType": "string"  
            }
        ]
    },
    create_agreement_specification: function(request)
    {
        console.log("agreement_management_controller.create_agreement_specification")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'create_agreement_specification'
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                isBundle: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                validFor: 
                {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                version: "string",
                serviceCategory: {
                    href: "string",
                    id: "string",
                    name: "string",
                    "@referredType": "string"
                },
                specCharacteristic: [
                    {
                        configurable: true,
                        description:  "string",
                        name:  "string",
                        validFor: 
                        {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        valueType:  "string",
                        specCharacteristicValue: [
                            {
                                default: true,
                                unitOfMeasure:  "string",
                                validFor: 
                                {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                value: "string",
                                valueFrom: "string",
                                valueTo:  "string",
                                valueType:  "string",
                                "@type": "string"
                            }
                        ],
                        "@type": "string",
                        "@schemaLocation": "string"
                    }
                ],
                relatedParty: [
                    {
                        href: "string",
                        id: "string",
                        name: "string",
                        role: "string",
                        "@referredType": "string"
                    }
                ],
                attachment: [
                    {
                        href: "string",
                        id: "string",
                        type: "string",
                        url: "string",
                        "@type": "string"
                    }
                ],
                specificationRelationship: [
                    {
                        href: "string",
                        id: "string",
                        type: "string",
                        validFor: 
                        {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@type": "string"
                    }
                ],
                "@type": "string",
                "@schemaLocation": "string",
                "@baseType": "string" 
            }
        ]
    },
    show_agreement_specification: function(request)
    {
        console.log("agreement_management_controller.show_agreement_specification")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'show_agreement_specification'
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                isBundle: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                validFor: 
                {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                version: "string",
                serviceCategory: {
                    href: "string",
                    id: "string",
                    name: "string",
                    "@referredType": "string"
                },
                specCharacteristic: [
                    {
                        configurable: true,
                        description:  "string",
                        name:  "string",
                        validFor: 
                        {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        valueType:  "string",
                        specCharacteristicValue: [
                            {
                                default: true,
                                unitOfMeasure:  "string",
                                validFor: 
                                {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                value: "string",
                                valueFrom: "string",
                                valueTo:  "string",
                                valueType:  "string",
                                "@type": "string"
                            }
                        ],
                        "@type": "string",
                        "@schemaLocation": "string"
                    }
                ],
                relatedParty: [
                    {
                        href: "string",
                        id: "string",
                        name: "string",
                        role: "string",
                        "@referredType": "string"
                    }
                ],
                attachment: [
                    {
                        href: "string",
                        id: "string",
                        type: "string",
                        url: "string",
                        "@type": "string"
                    }
                ],
                specificationRelationship: [
                    {
                        href: "string",
                        id: "string",
                        type: "string",
                        validFor: 
                        {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@type": "string"
                    }
                ],
                "@type": "string",
                "@schemaLocation": "string",
                "@baseType": "string" 
            }
        ]
    },
    update_agreement_specification: function(request)
    {
        console.log("agreement_management_controller.update_agreement_specification")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'update_agreement_specification'
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                isBundle: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                validFor: 
                {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                version: "string",
                serviceCategory: {
                    href: "string",
                    id: "string",
                    name: "string",
                    "@referredType": "string"
                },
                specCharacteristic: [
                    {
                        configurable: true,
                        description:  "string",
                        name:  "string",
                        validFor: 
                        {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        valueType:  "string",
                        specCharacteristicValue: [
                            {
                                default: true,
                                unitOfMeasure:  "string",
                                validFor: 
                                {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                value: "string",
                                valueFrom: "string",
                                valueTo:  "string",
                                valueType:  "string",
                                "@type": "string"
                            }
                        ],
                        "@type": "string",
                        "@schemaLocation": "string"
                    }
                ],
                relatedParty: [
                    {
                        href: "string",
                        id: "string",
                        name: "string",
                        role: "string",
                        "@referredType": "string"
                    }
                ],
                attachment: [
                    {
                        href: "string",
                        id: "string",
                        type: "string",
                        url: "string",
                        "@type": "string"
                    }
                ],
                specificationRelationship: [
                    {
                        href: "string",
                        id: "string",
                        type: "string",
                        validFor: 
                        {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@type": "string"
                    }
                ],
                "@type": "string",
                "@schemaLocation": "string",
                "@baseType": "string" 
            }
        ]
    },
    destroy_agreement_specification: function(request)
    {
        console.log("agreement_management_controller.destroy_agreement_specification")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'destroy_agreement_specification'
                },
                code: 204
            }
        ]
    },

    create_hub: function(request)
    {
        console.log("agreement_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Agreement Management',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("agreement_management_controller.destroy_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Agreement Management',
                action: 'destroy_hub'
            },
            code: 204
        }
    }

}