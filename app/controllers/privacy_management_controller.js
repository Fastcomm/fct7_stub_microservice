//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create_profile: function(request)
    {
        console.log("privacy_management_controller.create_profile")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'create_profile'
            },
            id: faker.random.uuid(),
            href: faker.internet.url(),
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            dateCreated: new Date(),
            status: 'active',
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date,
            },
            agreedByParty: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                role: 'user',
                name: faker.commerce.department()
            },
            partyPrivacyProfileType: {
                id: faker.random.uuid(),
                href: faker.internet.url()
            },
            partyPrivacyProfileCharValue: [
                {
                    privacyUsagePurpose: faker.hacker.verb(),
                    name: faker.commerce.department(),
                    value: faker.random.number(),
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            role: 'owner'
                        }
                    ]
                }
            ],
            agreement: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                type: 'temporary'
            }
        }
    },
    index_profile: function(request)
    {
        console.log("privacy_management_controller.index_profile")
        return [
            {
                routeDetails: {
                    controller: 'Privacy Management',
                    action: 'index_profile'
                },
                id: faker.random.uuid(),
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: faker.name.findName(),
                description: faker.lorem.sentence(),
                dateCreated: new Date(),
                status: 'active',
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date,
                },
                agreedByParty: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    role: 'user',
                    name: faker.commerce.department()
                },
                partyPrivacyProfileType: {
                    id: faker.random.uuid(),
                    href: faker.internet.url()
                },
                partyPrivacyProfileCharValue: [
                    {
                        privacyUsagePurpose: faker.hacker.verb(),
                        name: faker.commerce.department(),
                        value: faker.random.number(),
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()
                        },
                        relatedParty: [
                            {
                                id: faker.random.uuid(),
                                href: faker.internet.url(),
                                role: 'owner'
                            }
                        ]
                    }
                ],
                agreement: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: 'temporary'
                }
            }
        ]
    },
    show_profile: function(request)
    {
        console.log("privacy_management_controller.show_profile")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'show_profile'
            },
            id: request.params.id,
            href: faker.internet.url(),
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            dateCreated: new Date(),
            status: 'active',
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date,
            },
            agreedByParty: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                role: 'user',
                name: faker.commerce.department()
            },
            partyPrivacyProfileType: {
                id: faker.random.uuid(),
                href: faker.internet.url()
            },
            partyPrivacyProfileCharValue: [
                {
                    privacyUsagePurpose: faker.hacker.verb(),
                    name: faker.commerce.department(),
                    value: faker.random.number(),
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            role: 'owner'
                        }
                    ]
                }
            ],
            agreement: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                type: 'temporary'
            }
        }
    },
    update_profile: function(request)
    {
        console.log("privacy_management_controller.update_profile")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'update_profile'
            },
            id: request.params.id,
            href: faker.internet.url(),
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            dateCreated: new Date(),
            status: 'active',
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date,
            },
            agreedByParty: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                role: 'user',
                name: faker.commerce.department()
            },
            partyPrivacyProfileType: {
                id: faker.random.uuid(),
                href: faker.internet.url()
            },
            partyPrivacyProfileCharValue: [
                {
                    privacyUsagePurpose: faker.hacker.verb(),
                    name: faker.commerce.department(),
                    value: faker.random.number(),
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            role: 'owner'
                        }
                    ]
                }
            ],
            agreement: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                type: 'temporary'
            }
        }
    },
    destroy_profile: function(request)
    {
        console.log("privacy_management_controller.destroy_profile")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'destroy_profile'
            },
            id: request.params.id,
            status: 'privacy_profile successfully destroyed'
        }
    },
    create_profile_type: function(request)
    {
        console.log("privacy_management_controller.create_profile_type")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'create_profile_type'
            },
            id: faker.random.uuid(),
            href: faker.internet.url(),
            version: '1.0.2x',
            lastUpdate: new Date(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            lastCycleStatus: 'active',
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date(),
            },
            applicableRole: [
                {
                    role: 'product'
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    role: 'user'
                }
            ],
            partyPrivacyProfileTypeCharacteristic: [
                {
                    id: faker.random.uuid(),
                    name: faker.commerce.productName(),
                    description: faker.lorem.sentence(),
                    privacyType: 'public',
                    criticityLevel: 'high',
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedRole: [
                        {
                            role: 'owner'
                        }
                    ],
                    partyPrivacyProfileTypeCharValue: [
                        {
                            valueType: 'ZAR',
                            default: '0.0',
                            value: '0.1',
                            validityDuration: 2000,
                            fromValue: '0.0',
                            toValue: '0.1',
                            rangeInterval: '5'
                        }
                    ]
                }
            ]
        }
    },
    show_profile_type: function(request)
    {
        console.log("privacy_management_controller.show_profile_type")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'show_profile_type'
            },
            id: request.params.id,
            href: faker.internet.url(),
            version: '1.0.2x',
            lastUpdate: new Date(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            lastCycleStatus: 'active',
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date(),
            },
            applicableRole: [
                {
                    role: 'product'
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    role: 'user'
                }
            ],
            partyPrivacyProfileTypeCharacteristic: [
                {
                    id: faker.random.uuid(),
                    name: faker.commerce.productName(),
                    description: faker.lorem.sentence(),
                    privacyType: 'public',
                    criticityLevel: 'high',
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedRole: [
                        {
                            role: 'owner'
                        }
                    ],
                    partyPrivacyProfileTypeCharValue: [
                        {
                            valueType: 'ZAR',
                            default: '0.0',
                            value: '0.1',
                            validityDuration: 2000,
                            fromValue: '0.0',
                            toValue: '0.1',
                            rangeInterval: '5'
                        }
                    ]
                }
            ]
        }
    },
    update_profile_type: function(request)
    {
        console.log("privacy_management_controller.update_profile_type")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'update_profile_type'
            },
            id: request.params.id,
            href: faker.internet.url(),
            version: '1.0.2x',
            lastUpdate: new Date(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            lastCycleStatus: 'active',
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date(),
            },
            applicableRole: [
                {
                    role: 'product'
                }
            ],
            relatedParty: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    role: 'user'
                }
            ],
            partyPrivacyProfileTypeCharacteristic: [
                {
                    id: faker.random.uuid(),
                    name: faker.commerce.productName(),
                    description: faker.lorem.sentence(),
                    privacyType: 'public',
                    criticityLevel: 'high',
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedRole: [
                        {
                            role: 'owner'
                        }
                    ],
                    partyPrivacyProfileTypeCharValue: [
                        {
                            valueType: 'ZAR',
                            default: '0.0',
                            value: '0.1',
                            validityDuration: 2000,
                            fromValue: '0.0',
                            toValue: '0.1',
                            rangeInterval: '5'
                        }
                    ]
                }
            ]
        }
    },
    destroy_profile_type: function(request)
    {
        console.log("privacy_management_controller.destroy_profile_type")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'destroy_profile_type'
            },
            id: request.params.id,
            status: 'privacy_profile_type successfully destroyed'
        }
    },
    create_agreement: function(request)
    {
        console.log("privacy_management_controller.create_agreement")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'create_agreement'
            },
            id: faker.random.uuid(),
            agreementPeriod: {
                startDateTime: new Date(),
                endDateTime: new Date()
            },
            name: faker.commerce.productName(),
            href: faker.internet.url(),
            status: 'active',
            type: 'idk',
            description: faker.lorem.sentence(),
            version: '2.7.1v',
            documentNumber: faker.random.number(),
            statementOfIntent: 'active',
            agreementSpecification: {
                id: faker.random.uuid(),
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                href: faker.internet.url()
            },
            initialDate: new Date(),
            completionDate: new Date(),
            agreementItem: [
                {
                    productOffering: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.commerce.productName(),
                            description: faker.lorem.sentence(),
                            partyId: faker.random.uuid(),
                            partyName: faker.commerce.department(),
                            bundeledProductOffering: [
                                {
                                    id: faker.random.uuid(),
                                    href: faker.internet.url(),
                                    name: faker.commerce.productName(),
                                    bundledProductOffering: []
                                }
                            ]
                        }
                    ],
                    termOrCondition: [
                        {
                            id: faker.random.uuid(),
                            description: faker.lorem.sentence(),
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()
                            }
                        }
                    ]
                }
            ],
            EngagedPartyRole: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName(),
                    partyId: faker.random.uuid(),
                    partyName: faker.commerce.department()
                }
            ],
            agreementAuthorization: [
                {
                    date: new Date(),
                    signatureRepresentation: 'active',
                    state: 'active'
                }
            ],
            characteristic: [
                {
                    name: faker.hacker.noun(),
                    value: '61.04'
                }
            ],
            associatedAgreement: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department()
                }
            ],
            partyPrivacyProfile: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department()
                }
            ],
            partyPrivacyProfileCharValue: [
                {
                    privacyUsagePurpose: 'stuff',
                    name: faker.commerce.department(),
                    value: faker.random.number(),
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            role: 'user',
                            name: faker.commerce.department()
                        }
                    ]
                }
            ]
        }
    },
    show_agreement: function(request)
    {
        console.log("privacy_management_controller.show_agreement")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'show_agreement'
            },
            id: request.params.id,
            agreementPeriod: {
                startDateTime: new Date(),
                endDateTime: new Date()
            },
            name: faker.commerce.productName(),
            href: faker.internet.url(),
            status: 'active',
            type: 'idk',
            description: faker.lorem.sentence(),
            version: '2.7.1v',
            documentNumber: faker.random.number(),
            statementOfIntent: 'active',
            agreementSpecification: {
                id: faker.random.uuid(),
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                href: faker.internet.url()
            },
            initialDate: new Date(),
            completionDate: new Date(),
            agreementItem: [
                {
                    productOffering: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.commerce.productName(),
                            description: faker.lorem.sentence(),
                            partyId: faker.random.uuid(),
                            partyName: faker.commerce.department(),
                            bundeledProductOffering: [
                                {
                                    id: faker.random.uuid(),
                                    href: faker.internet.url(),
                                    name: faker.commerce.productName(),
                                    bundledProductOffering: []
                                }
                            ]
                        }
                    ],
                    termOrCondition: [
                        {
                            id: faker.random.uuid(),
                            description: faker.lorem.sentence(),
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()
                            }
                        }
                    ]
                }
            ],
            EngagedPartyRole: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName(),
                    partyId: faker.random.uuid(),
                    partyName: faker.commerce.department()
                }
            ],
            agreementAuthorization: [
                {
                    date: new Date(),
                    signatureRepresentation: 'active',
                    state: 'active'
                }
            ],
            characteristic: [
                {
                    name: faker.hacker.noun(),
                    value: '61.04'
                }
            ],
            associatedAgreement: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department()
                }
            ],
            partyPrivacyProfile: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department()
                }
            ],
            partyPrivacyProfileCharValue: [
                {
                    privacyUsagePurpose: 'stuff',
                    name: faker.commerce.department(),
                    value: faker.random.number(),
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            role: 'user',
                            name: faker.commerce.department()
                        }
                    ]
                }
            ]
        }
    },
    update_agreement: function(request)
    {
        console.log("privacy_management_controller.update_agreement")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'update_agreement'
            },
            id: request.params.id,
            agreementPeriod: {
                startDateTime: new Date(),
                endDateTime: new Date()
            },
            name: faker.commerce.productName(),
            href: faker.internet.url(),
            status: 'active',
            type: 'idk',
            description: faker.lorem.sentence(),
            version: '2.7.1v',
            documentNumber: faker.random.number(),
            statementOfIntent: 'active',
            agreementSpecification: {
                id: faker.random.uuid(),
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                href: faker.internet.url()
            },
            initialDate: new Date(),
            completionDate: new Date(),
            agreementItem: [
                {
                    productOffering: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            name: faker.commerce.productName(),
                            description: faker.lorem.sentence(),
                            partyId: faker.random.uuid(),
                            partyName: faker.commerce.department(),
                            bundeledProductOffering: [
                                {
                                    id: faker.random.uuid(),
                                    href: faker.internet.url(),
                                    name: faker.commerce.productName(),
                                    bundledProductOffering: []
                                }
                            ]
                        }
                    ],
                    termOrCondition: [
                        {
                            id: faker.random.uuid(),
                            description: faker.lorem.sentence(),
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()
                            }
                        }
                    ]
                }
            ],
            EngagedPartyRole: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.productName(),
                    partyId: faker.random.uuid(),
                    partyName: faker.commerce.department()
                }
            ],
            agreementAuthorization: [
                {
                    date: new Date(),
                    signatureRepresentation: 'active',
                    state: 'active'
                }
            ],
            characteristic: [
                {
                    name: faker.hacker.noun(),
                    value: '61.04'
                }
            ],
            associatedAgreement: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department()
                }
            ],
            partyPrivacyProfile: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: faker.commerce.department()
                }
            ],
            partyPrivacyProfileCharValue: [
                {
                    privacyUsagePurpose: 'stuff',
                    name: faker.commerce.department(),
                    value: faker.random.number(),
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()
                    },
                    relatedParty: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            role: 'user',
                            name: faker.commerce.department()
                        }
                    ]
                }
            ]
        }
    },
    destroy_agreemeent: function(request)
    {
        console.log("privacy_management_controller.destroy_agreemeent")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'destroy_agreemeent'
            },
            id: request.params.id,
            status: 'privacy_agreement successfully destroyed'
        }
    } 
}