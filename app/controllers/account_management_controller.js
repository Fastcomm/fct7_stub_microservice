//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_party: function(request)
    {
        console.log("account_management_controller.index_party")
        return [
            {  

                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_party'
                },
                href: faker.internet.url(),
                accountType: "string",
                description: faker.lorem.sentence(),
                lastModified: new Date(),
                name: "string",
                paymentStatus: "string",
                state: "string",
                accountBalance: [
                    {
                        balanceType: "string",
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                accountRelationship: [
                    {
                        relationshipType: "string",
                        account: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            description: "string",
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                billStructure: {
                    cycleSpecification: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        billingDateShift: 0,
                        billingPeriod: "string",
                        chargeDateOffset: 0,
                        creditDateOffset:0,
                        dateShift: 0,
                        description: "string",
                        frequency: "string",
                        isRef: true,
                        mailingDateOffset: 0,
                        name: "string",
                        paymentDueDateOffset: 0,
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    format:{
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string", 
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    presentationMedia: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            description: "string", 
                            isRef: true,
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                contact: [
                    {
                        contactName: "string",
                        contactType: true,
                        partyRoleType: "string",
                        contactMedium: [
                            {
                                mediumType: "string",
                                preferred: true,
                                characteristic: {
                                    city: "string",
                                    contactType: "string",
                                    country: "string",
                                    emailAddress: "string",
                                    faxNumber: "string",
                                    phoneNumber: "string",
                                    postCode: "string",
                                    socialNetworkId: "string",
                                    stateOrProvince: "string",
                                    street1: "string",
                                    street2: "string",
                                    "@baseType": "string",
                                    "@schemaLocation": "string",
                                    "@type": "string"
                                },
                                validFor: {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"  
                            }
                        ],
                        relatedParty: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                creditLimit: {
                    unit: "string",
                    value: 0
                },
                defaultPaymentMethod: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                financialAccount: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    accountBalance: {
                        balanceType: "string",
                        amount: {
                            unit: "string",
                            value: 0
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"    
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.datatype.number(),
                        paymentFrequency: "string",
                        planType: "string",
                        priority: faker.datatype.number(),
                        status: "string",
                        paymentMethod: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        },
                        totalAmount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                taxExemption: [
                    {
                        certificateNumber: "string",
                        issuingJurisdiction: "string",
                        reason: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"  
            }
        ]
    },
    create_party: function(request)
    {
        console.log("account_management_controller.create_party")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_party'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset:0,
                    dateShift: 0,
                    description: "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format:{
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string", 
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string", 
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType: "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                contactType: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: 0
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"    
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string" 
        }
    },
    show_party: function(request)
    {
        console.log("account_management_controller.show_party")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'show_party'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset:0,
                    dateShift: 0,
                    description: "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format:{
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string", 
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string", 
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType: "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                contactType: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: 0
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"    
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string" 
        }
    },
    update_party: function(request)
    {
        console.log("account_management_controller.update_party")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'update_party'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset:0,
                    dateShift: 0,
                    description: "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format:{
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string", 
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string", 
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType: "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                contactType: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: 0
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"    
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string" 
        }
    },
    destroy_party: function(request)
    {
        console.log("account_management_controller.destroy_party")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'destroy_party'
            },
            code: 204
        }
    },
    
    index_billing: function(request)
    {
        console.log("account_management_controller.index_billing")
        return [
            {  
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_billing'
                },
                href: faker.internet.url(),
                accountType: "string",
                description: faker.lorem.sentence(),
                lastModified: new Date(),
                name: "string",
                paymentStatus: "string",
                state: "string",
                accountBalance: [
                    {
                        balanceType: "string",
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                accountRelationship: [
                    {
                        relationshipType: "string",
                        account: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            description: "string",
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                billStructure: {
                    cycleSpecification: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        billingDateShift: 0,
                        billingPeriod: "string",
                        chargeDateOffset: 0,
                        creditDateOffset: 0,
                        dateShift: 0,
                        description: "string",
                        frequency: "string",
                        isRef: true,
                        mailingDateOffset: 0,
                        name: "string",
                        paymentDueDateOffset: 0,
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    format: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    presentationMedia: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            description: "string",
                            isRef: true,
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],  
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                contact: [
                    {
                        contactName: "string",
                        contactType: "string",
                        partyRoleType: "string",
                        contactMedium: [
                            {
                                mediumType:  "string",
                                preferred: true,
                                characteristic: {
                                    city: "string",
                                    country: "string",
                                    emailAddress: "string",
                                    faxNumber: "string",
                                    phoneNumber: "string",
                                    postCode: "string",
                                    socialNetworkId: "string",
                                    stateOrProvince: "string",
                                    street1: "string",
                                    street2: "string",
                                    "@baseType": "string",
                                    "@schemaLocation": "string",
                                    "@type": "string"
                                },
                                validFor: {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"  
                            }
                        ],
                        relatedParty: [
                            {
                                id: faker.datatype.uuid(),
                                href: faker.internet.url(),
                                name: "string",
                                role: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                "@referredType": "string"
                            }
                        ],
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                creditLimit: {
                    unit: "string",
                    value: faker.datatype.number()
                },
                defaultPaymentMethod: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                financialAccount: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    accountBalance: {
                        balanceType: "string",
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.datatype.number(),
                        paymentFrequency: "string",
                        planType: "string",
                        priority: faker.datatype.number(),
                        status: "string",
                        paymentMethod: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        },
                        totalAmount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"   
                    }
                ],
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                taxExemption: [
                    {
                        certificateNumber: "string",
                        issuingJurisdiction: "string",
                        reason: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_billing: function(request)
    {
        console.log("account_management_controller.create_billing")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_billing'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset: 0,
                    dateShift: 0,
                    description: "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string",
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],  
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            defaultPaymentMethod: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"   
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_billing: function(request)
    {
        console.log("account_management_controller.show_billing")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'show_billing'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset: 0,
                    dateShift: 0,
                    description: "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string",
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],  
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            defaultPaymentMethod: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"   
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_billing: function(request)
    {
        console.log("account_management_controller.update_billing")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'update_billing'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset: 0,
                    dateShift: 0,
                    description: "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string",
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],  
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            defaultPaymentMethod: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"   
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_billing: function(request)
    {
        console.log("account_management_controller.destroy_billing")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'destroy_billing'
            },
            code: 204,
        }
    },

    index_settlement: function(request)
    {
        console.log("account_management_controller.index_settlement")
        return [
            {  
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_settlement'
                },
                href: faker.internet.url(),
                accountType: "string",
                description: faker.lorem.sentence(),
                lastModified: new Date(),
                name: "string",
                paymentStatus: "string",
                state: "string",
                accountBalance: [
                    {
                        balanceType: "string",
                        amount: {
                            unit: "string",
                            value: 0
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                accountRelationship: [
                    {
                        relationshipType: "string",
                        account: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            description: "string",
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                billStructure: {
                    cycleSpecification: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        billingDateShift: 0,
                        billingPeriod: "string",
                        chargeDateOffset: 0,
                        creditDateOffset: 0,
                        dateShift: faker.datatype.number(),
                        description:  "string",
                        frequency: "string",
                        isRef: true,
                        mailingDateOffset: 0,
                        name: "string",
                        paymentDueDateOffset: 0,
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    format: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    presentationMedia: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            description: "string",
                            isRef: true,
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                contact: [
                    {
                        contactName: "string",
                        contactType: "string",
                        partyRoleType: "string",
                        contactMedium: [
                            {
                                mediumType:  "string",
                                preferred: true,
                                characteristic: {
                                    city: "string",
                                    country: "string",
                                    emailAddress: "string",
                                    faxNumber: "string",
                                    phoneNumber: "string",
                                    postCode: "string",
                                    socialNetworkId: "string",
                                    stateOrProvince: "string",
                                    street1: "string",
                                    street2: "string",
                                    "@baseType": "string",
                                    "@schemaLocation": "string",
                                    "@type": "string"
                                },
                                validFor: {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"  
                            }
                        ],
                        relatedParty: [
                            {
                                id: faker.datatype.uuid(),
                                href: faker.internet.url(),
                                name: "string",
                                role: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                "@referredType": "string"
                            }
                        ],
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                creditLimit: {
                    unit: "string",
                    value: faker.datatype.number()
                },
                defaultPaymentMethod: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                financialAccount: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    accountBalance: {
                        balanceType: "string",
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.datatype.number(),
                        paymentFrequency: "string",
                        planType: "string",
                        priority: faker.datatype.number(),
                        status: "string",
                        paymentMethod: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        },
                        totalAmount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"   
                    }
                ],
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                taxExemption: [
                    {
                        certificateNumber: "string",
                        issuingJurisdiction: "string",
                        reason: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"                
            }
        ]
    },
    create_settlement: function(request)
    {
        console.log("account_management_controller.create_settlement")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_settlement'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset: 0,
                    dateShift: faker.datatype.number(),
                    description:  "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string",
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            defaultPaymentMethod: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"   
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"    
        }
    },
    show_settlement: function(request)
    {
        console.log("account_management_controller.show_settlement")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'show_billing'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset: 0,
                    dateShift: faker.datatype.number(),
                    description:  "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string",
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            defaultPaymentMethod: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"   
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_settlement: function(request)
    {
        console.log("account_management_controller.update_settlement")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'update_settlement'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            paymentStatus: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            billStructure: {
                cycleSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    billingDateShift: 0,
                    billingPeriod: "string",
                    chargeDateOffset: 0,
                    creditDateOffset: 0,
                    dateShift: faker.datatype.number(),
                    description:  "string",
                    frequency: "string",
                    isRef: true,
                    mailingDateOffset: 0,
                    name: "string",
                    paymentDueDateOffset: 0,
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                format: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    description: "string",
                    isRef: true,
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                },
                presentationMedia: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        isRef: true,
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            },
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            defaultPaymentMethod: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            financialAccount: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                accountBalance: {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    planType: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    paymentMethod: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"   
                }
            ],
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_settlement: function(request)
    {
        console.log("account_management_controller.destroy_settlement")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'destroy_settlement'
            },
            code: 204
        }
    },

    index_financial: function(request)
    {
        console.log("account_management_controller.index_financial")
        return [
            {  
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_financial'
                },
                href: faker.internet.url(),
                accountType: "string",
                description: faker.lorem.sentence(),
                lastModified: new Date(),
                name: "string",
                state: "string",
                accountBalance: [
                    {
                        balanceType: "string",
                        amount: {
                            unit: "string",
                            value: 0
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                accountRelationship: [
                    {
                        relationshipType: "string",
                        account: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            description: "string",
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        },
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                contact: [
                    {
                        contactName: "string",
                        contactType: "string",
                        partyRoleType: "string",
                        contactMedium: [
                            {
                                mediumType:  "string",
                                preferred: true,
                                characteristic: {
                                    city: "string",
                                    country: "string",
                                    emailAddress: "string",
                                    faxNumber: "string",
                                    phoneNumber: "string",
                                    postCode: "string",
                                    socialNetworkId: "string",
                                    stateOrProvince: "string",
                                    street1: "string",
                                    street2: "string",
                                    "@baseType": "string",
                                    "@schemaLocation": "string",
                                    "@type": "string"
                                },
                                validFor: {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"  
                            }
                        ],
                        relatedParty: [
                            {
                                id: faker.datatype.uuid(),
                                href: faker.internet.url(),
                                name: "string",
                                role: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                "@referredType": "string"
                            }
                        ],
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                creditLimit: {
                    unit: "string",
                    value: faker.datatype.number()
                },
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    }
                ],
                taxExemption: [
                    {
                        certificateNumber: "string",
                        issuingJurisdiction: "string",
                        reason: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                    }
                ],
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_financial: function(request)
    {
        console.log("account_management_controller.create_financial")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_financial'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_financial: function(request)
    {
        console.log("account_management_controller.show_financial")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'show_financial'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_financial: function(request)
    {
        console.log("account_management_controller.update_financial")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'update_financial'
            },
            href: faker.internet.url(),
            accountType: "string",
            description: faker.lorem.sentence(),
            lastModified: new Date(),
            name: "string",
            state: "string",
            accountBalance: [
                {
                    balanceType: "string",
                    amount: {
                        unit: "string",
                        value: 0
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    account: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        description: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                    },
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: "string",
                    partyRoleType: "string",
                    contactMedium: [
                        {
                            mediumType:  "string",
                            preferred: true,
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                socialNetworkId: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                            },
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"  
                        }
                    ],
                    relatedParty: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            name: "string",
                            role: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                        }
                    ],
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                }
            ],
            taxExemption: [
                {
                    certificateNumber: "string",
                    issuingJurisdiction: "string",
                    reason: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                }
            ],
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_financial: function(request)
    {
        console.log("account_management_controller.remove_financial")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_financial'
            },
            code: 204
        }
    },

    index_billing_cycle_specification: function(request)
    {
        console.log("account_management_controller.index_billing_cycle_specification")
        return [
            {  
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_billing_cycle_specification'
                },
                href: faker.internet.url(),
                billingDateShift: faker.datatype.number(),
                billingPeriod: "string",
                chargeDateOffset: 0,
                creditDateOffset: 0,
                description: faker.lorem.sentence(),
                frequency: "string",
                mailingDateOffset: 0,
                name: "string",
                paymentDueDateOffset: 0,
                validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_billing_cycle_specification: function(request)
    {
        console.log("account_management_controller.create_billing_cycle_specification")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_billing_cycle_specification'
            },
            href: faker.internet.url(),
            billingDateShift: faker.datatype.number(),
            billingPeriod: "string",
            chargeDateOffset: 0,
            creditDateOffset: 0,
            description: faker.lorem.sentence(),
            frequency: "string",
            mailingDateOffset: 0,
            name: "string",
            paymentDueDateOffset: 0,
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_billing_cycle_specification: function(request)
    {
        console.log("account_management_controller.show_billing_cycle_specification")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'show_billing_cycle_specification'
            },
            href: faker.internet.url(),
            billingDateShift: faker.datatype.number(),
            billingPeriod: "string",
            chargeDateOffset: 0,
            creditDateOffset: 0,
            description: faker.lorem.sentence(),
            frequency: "string",
            mailingDateOffset: 0,
            name: "string",
            paymentDueDateOffset: 0,
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_billing_cycle_specification: function(request)
    {
        console.log("account_management_controller.update_billing_cycle_specification")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'update_billing_cycle_specification'
            },
            href: faker.internet.url(),
            billingDateShift: faker.datatype.number(),
            billingPeriod: "string",
            chargeDateOffset: 0,
            creditDateOffset: 0,
            description: faker.lorem.sentence(),
            frequency: "string",
            mailingDateOffset: 0,
            name: "string",
            paymentDueDateOffset: 0,
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_billing_cycle_specification: function(request)
    {
        console.log("account_management_controller.destroy_billing_cycle_specification")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'destroy_billing_cycle_specification'
            },
            code: 204
        }
    },

    index_bill_format: function(request)
    {
        console.log("account_management_controller.index_bill_format")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_bill_format'
                },
                href: faker.internet.url(),
                description: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_bill_format: function(request)
    {
        console.log("account_management_controller.create_bill_format")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_bill_format'
            },
            href: faker.internet.url(),
            description: "string",
            name: "string",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_bill_format: function(request)
    {
        console.log("account_management_controller.show_bill_format")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'show_bill_format'
            },
            href: faker.internet.url(),
            description: "string",
            name: "string",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_bill_format: function(request)
    {
        console.log("account_management_controller.update_bill_format")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'update_bill_format'
            },
            href: faker.internet.url(),
            description: "string",
            name: "string",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_bill_format: function(request)
    {
        console.log("account_management_controller.destroy_bill_format")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'destroy_bill_format'
            },
            code: 204
        }
    },

    index_bill_media: function(request)
    {
        console.log("account_management_controller.index_bill_media")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_bill_media'
                },
                href: faker.internet.url(),
                description: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_bill_media: function(request)
    {
        console.log("account_management_controller.create_bill_media")
        return { 
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_bill_media'
            },
            href: faker.internet.url(),
            description: "string",
            name: "string",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_bill_media: function(request)
    {
        console.log("account_management_controller.show_bill_media")
        return { 
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'show_bill_media'
            },
            href: faker.internet.url(),
            description: "string",
            name: "string",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_bill_media: function(request)
    {
        console.log("account_management_controller.update_bill_media")
        return { 
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'update_bill_media'
            },
            href: faker.internet.url(),
            description: "string",
            name: "string",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_bill_media: function(request)
    {
        console.log("account_management_controller.destroy_bill_media")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'destroy_bill_media'
            },
            code: 204
        }
    },

    create_listeners_party_acc_attribute_value_change_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_party_acc_attribute_value_change_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_party_acc_state_change_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_party_acc_state_change_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_billing_acc_attribute_value_change_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_billing_acc_attribute_value_change_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_billing_acc_state_change_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_billing_acc_state_change_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_settlement_acc_attribute_value_change_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_settlement_acc_attribute_value_change_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_settlement_acc_state_change_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_settlement_acc_state_change_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_financial_acc_create_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_financial_acc_create_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_financial_acc_attribute_value_change_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_financial_acc_attribute_value_change_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_financial_acc_state_change_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_financial_acc_state_change_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    create_listeners_financial_acc_delete_event: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_listeners_financial_acc_delete_event'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    
    create_hub: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("account_management_controller.destroy_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'destroy_hub'
            },
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
        }
    }
}