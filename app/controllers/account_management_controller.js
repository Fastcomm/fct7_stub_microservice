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
                creditLimit: {
                    unit: "string",
                    value: faker.datatype.number()
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                lastModified: new Date(),
                name: "string",
                status: "string",
                type: "string",
                paymentStatus: "string",
                billStructure: {
                    presentationMedia: [
                        {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string",
                            activationDate: new Date()
                        }
                    ],
                    format: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    },
                    cycleSpecification: {
                        dateShift: faker.datatype.number(),
                        frequency: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"

                    }
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.datatype.number(),
                        paymentFrequency: "string",
                        priority: faker.datatype.number(),
                        status: "string",
                        totalAmount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        paymentMethod: {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string"
                        }

                    }
                ],
                financialAccount: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    accountBalance: {
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        }    
                    }
                },
                defaultPaymentMethod: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                relatedParty: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
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
                        }
                    }
                ],
                contact: [
                    {
                        contactName: "string",
                        contactType: true,
                        partyRoleType: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        contactMedium: [
                            {
                                type: "string",
                                validFor: {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                characteristic: {
                                    city: "string",
                                    country: "string",
                                    emailAddress: "string",
                                    faxNumber: "string",
                                    phoneNumber: "string",
                                    postCode: "string",
                                    stateOrProvince: "string",
                                    street1: "string",
                                    street2: "string",
                                    type: "string"
                                }
                            }
                        ],
                        relatedParty: {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string",
                            role: "string"
                        }
                    }
                ],
                accountBalance: [
                    {
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        }
                    }
                ],
                accountRelationship: [
                    {
                        relationshipType: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        account: {
                            description: "string",
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string"
                        }
                    }
                ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
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
                creditLimit: {
                    unit: "string",
                    value: faker.datatype.number()
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                lastModified: new Date(),
                name: "string",
                status: "string",
                type: "string",
                paymentStatus: "string",
                billStructure: {
                    presentationMedia: [
                        {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string",
                            activationDate: new Date()
                        }
                    ],
                    format: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    },
                    cycleSpecification: {
                        dateShift: faker.datatype.number(),
                        frequency: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"

                    }
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.datatype.number(),
                        paymentFrequency: "string",
                        priority: faker.datatype.number(),
                        status: "string",
                        totalAmount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        paymentMethod: {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string"
                        }
                    }
                ],
                financialAccount: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    accountBalance: {
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        }    
                    }
                },
                defaultPaymentMethod: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                relatedParty: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
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
                        }
                    }
                ],
                contact: [
                    {
                        contactName: "string",
                        contactType: true,
                        partyRoleType: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        contactMedium: [
                            {
                                type: "string",
                                validFor: {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                characteristic: {
                                    city: "string",
                                    country: "string",
                                    emailAddress: "string",
                                    faxNumber: "string",
                                    phoneNumber: "string",
                                    postCode: "string",
                                    stateOrProvince: "string",
                                    street1: "string",
                                    street2: "string",
                                    type: "string"
                                }
                            }
                        ],
                        relatedParty: {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string",
                            role: "string"
                        }
                    }
                ],
                accountBalance: [
                    {
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        }
                    }
                ],
                accountRelationship: [
                    {
                        relationshipType: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        account: {
                            description: "string",
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string"
                        }
                    }
                ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
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
                creditLimit: {
                    unit: "string",
                    value: faker.datatype.number()
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                lastModified: new Date(),
                name: "string",
                status: "string",
                type: "string",
                paymentStatus: "string",
                billStructure: {
                    presentationMedia: [
                        {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string",
                            activationDate: new Date()
                        }
                    ],
                    format: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    },
                    cycleSpecification: {
                        dateShift: faker.datatype.number(),
                        frequency: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"

                    }
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.datatype.number(),
                        paymentFrequency: "string",
                        priority: faker.datatype.number(),
                        status: "string",
                        totalAmount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        paymentMethod: {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string"
                        }

                    }
                ],
                financialAccount: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    accountBalance: {
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        }    
                    }
                },
                defaultPaymentMethod: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                relatedParty: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
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
                        }
                    }
                ],
                contact: [
                    {
                        contactName: "string",
                        contactType: true,
                        partyRoleType: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        contactMedium: [
                            {
                                type: "string",
                                validFor: {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                characteristic: {
                                    city: "string",
                                    country: "string",
                                    emailAddress: "string",
                                    faxNumber: "string",
                                    phoneNumber: "string",
                                    postCode: "string",
                                    stateOrProvince: "string",
                                    street1: "string",
                                    street2: "string",
                                    type: "string"
                                }
                            }
                        ],
                        relatedParty: {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string",
                            role: "string"
                        }
                    }
                ],
                accountBalance: [
                    {
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        }
                    }
                ],
                accountRelationship: [
                    {
                        relationshipType: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        account: {
                            description: "string",
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string"
                        }
                    }
                ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            paymentStatus: "string",
            billStructure: {
                presentationMedia: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.datatype.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.datatype.number(),
                    paymentFrequency: "string",
                    priority: faker.datatype.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }    
                }
            },
            defaultPaymentMethod: {
                href: faker.internet.url(),
                id: faker.datatype.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
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
                creditLimit: {
                    unit: "string",
                    value: faker.datatype.number()
                },
                description: faker.lorem.sentence(),
                href: faker.internet.url(),
                lastModified: new Date(),
                name: "string",
                status: "string",
                type: "string",
                relatedParty: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
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
                        }
                    }
                ],
                contact: [
                    {
                        contactName: "string",
                        contactType: true,
                        partyRoleType: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        contactMedium: [
                            {
                                type: "string",
                                validFor: {
                                    endDateTime: new Date(),
                                    startDateTime: new Date()
                                },
                                characteristic: {
                                    city: "string",
                                    country: "string",
                                    emailAddress: "string",
                                    faxNumber: "string",
                                    phoneNumber: "string",
                                    postCode: "string",
                                    stateOrProvince: "string",
                                    street1: "string",
                                    street2: "string",
                                    type: "string"
                                }
                            }
                        ],
                        relatedParty: {
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string",
                            role: "string"
                        }
                    }
                ],
                accountBalance: [
                    {
                        amount: {
                            unit: "string",
                            value: faker.datatype.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        }
                    }
                ],
                accountRelationship: [
                    {
                        relationshipType: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        account: {
                            description: "string",
                            href: faker.internet.url(),
                            id: faker.datatype.uuid(),
                            name: "string"
                        }
                    }
                ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            creditLimit: {
                unit: "string",
                value: faker.datatype.number()
            },
            description: faker.lorem.sentence(),
            href: faker.internet.url(),
            lastModified: new Date(),
            name: "string",
            status: "string",
            type: "string",
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
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
                    }
                }
            ],
            contact: [
                {
                    contactName: "string",
                    contactType: true,
                    partyRoleType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    contactMedium: [
                        {
                            type: "string",
                            validFor: {
                                endDateTime: new Date(),
                                startDateTime: new Date()
                            },
                            characteristic: {
                                city: "string",
                                country: "string",
                                emailAddress: "string",
                                faxNumber: "string",
                                phoneNumber: "string",
                                postCode: "string",
                                stateOrProvince: "string",
                                street1: "string",
                                street2: "string",
                                type: "string"
                            }
                        }
                    ],
                    relatedParty: {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.datatype.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    }
                }
            ],
            accountRelationship: [
                {
                    relationshipType: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    account: {
                        description: "string",
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                }
            ]
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
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
                billingDateShift: faker.datatype.number(),
                billingPeriod: "string",
                chargeDateOffset: faker.datatype.number(),
                creditDateOffset: faker.datatype.number(),
                description: faker.lorem.sentence(),
                frequency: "string",
                href: faker.internet.url(),
                mailingDateOffset: faker.datatype.number(),
                name: "string",
                paymentDueDateOffset: faker.datatype.number(),
                validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                }
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
            billingDateShift: faker.datatype.number(),
            billingPeriod: "string",
            chargeDateOffset: faker.datatype.number(),
            creditDateOffset: faker.datatype.number(),
            description: faker.lorem.sentence(),
            frequency: "string",
            href: faker.internet.url(),
            mailingDateOffset: faker.datatype.number(),
            name: "string",
            paymentDueDateOffset: faker.datatype.number(),
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            }
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
            billingDateShift: faker.datatype.number(),
            billingPeriod: "string",
            chargeDateOffset: faker.datatype.number(),
            creditDateOffset: faker.datatype.number(),
            description: faker.lorem.sentence(),
            frequency: "string",
            href: faker.internet.url(),
            mailingDateOffset: faker.datatype.number(),
            name: "string",
            paymentDueDateOffset: faker.datatype.number(),
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            }
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
            billingDateShift: faker.datatype.number(),
            billingPeriod: "string",
            chargeDateOffset: faker.datatype.number(),
            creditDateOffset: faker.datatype.number(),
            description: faker.lorem.sentence(),
            frequency: "string",
            href: faker.internet.url(),
            mailingDateOffset: faker.datatype.number(),
            name: "string",
            paymentDueDateOffset: faker.datatype.number(),
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            }
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
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
                description: "string",
                href: faker.internet.url(),
                name: "string"
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
            description: "string",
            name: "string"
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
            description: "string",
            href: faker.internet.url(),
            name: "string"
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
            description: "string",
            name: "string"
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
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
                description: "string",
                href: faker.internet.url(),
                name: "string"
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
            description: "string",
            name: "string"
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
            description: "string",
            href: faker.internet.url(),
            name: "string"
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
            description: "string",
            name: "string"
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
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: faker.datatype.number(),
            referenceError: "string"
        }
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