//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_party: function(request)
    {
        console.log("account_management_controller.index_party")
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_party'
                },
                creditLimit: {
                    unit: "string",
                    value: faker.random.number()
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
                            id: faker.random.uuid(),
                            name: "string",
                            activationDate: new Date()
                        }
                    ],
                    format: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    },
                    cycleSpecification: {
                        dateShift: faker.random.number(),
                        frequency: "string",
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"

                    }
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.random.number(),
                        paymentFrequency: "string",
                        priority: faker.random.number(),
                        status: "string",
                        totalAmount: {
                            unit: "string",
                            value: faker.random.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        paymentMethod: {
                            href: faker.internet.url(),
                            id: faker.random.uuid(),
                            name: "string"
                        }

                    }
                ],
                financialAccount: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string",
                    accountBalance: {
                        amount: {
                            unit: "string",
                            value: faker.random.number()
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
                    id: faker.random.uuid(),
                    name: "string"
                },
                relatedParty: [
                    {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
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
                            id: faker.random.uuid(),
                            name: "string",
                            role: "string"
                        }
                    }
                ],
                accountBalance: [
                    {
                        amount: {
                            unit: "string",
                            value: faker.random.number()
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
                            id: faker.random.uuid(),
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
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_party'
            },
            creditLimit: {
                unit: "string",
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string"
                    }
                }
            ]
        }
    },
    remove_party: function(request)
    {
        console.log("account_management_controller.remove_party")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_party'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },
    
    index_billing: function(request)
    {
        console.log("account_management_controller.index_billing")
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_billing'
                },
                creditLimit: {
                    unit: "string",
                    value: faker.random.number()
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
                            id: faker.random.uuid(),
                            name: "string",
                            activationDate: new Date()
                        }
                    ],
                    format: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    },
                    cycleSpecification: {
                        dateShift: faker.random.number(),
                        frequency: "string",
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"

                    }
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.random.number(),
                        paymentFrequency: "string",
                        priority: faker.random.number(),
                        status: "string",
                        totalAmount: {
                            unit: "string",
                            value: faker.random.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        paymentMethod: {
                            href: faker.internet.url(),
                            id: faker.random.uuid(),
                            name: "string"
                        }

                    }
                ],
                financialAccount: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string",
                    accountBalance: {
                        amount: {
                            unit: "string",
                            value: faker.random.number()
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
                    id: faker.random.uuid(),
                    name: "string"
                },
                relatedParty: [
                    {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
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
                            id: faker.random.uuid(),
                            name: "string",
                            role: "string"
                        }
                    }
                ],
                accountBalance: [
                    {
                        amount: {
                            unit: "string",
                            value: faker.random.number()
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
                            id: faker.random.uuid(),
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
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_billing'
            },
            creditLimit: {
                unit: "string",
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string"
                    }
                }
            ]
        }
    },
    remove_billing: function(request)
    {
        console.log("account_management_controller.remove_billing")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_billing'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },

    index_settlement: function(request)
    {
        console.log("account_management_controller.index_settlement")
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_settlement'
                },
                creditLimit: {
                    unit: "string",
                    value: faker.random.number()
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
                            id: faker.random.uuid(),
                            name: "string",
                            activationDate: new Date()
                        }
                    ],
                    format: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    },
                    cycleSpecification: {
                        dateShift: faker.random.number(),
                        frequency: "string",
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"

                    }
                },
                paymentPlan: [
                    {
                        numberOfPayments: faker.random.number(),
                        paymentFrequency: "string",
                        priority: faker.random.number(),
                        status: "string",
                        totalAmount: {
                            unit: "string",
                            value: faker.random.number()
                        },
                        type: "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        paymentMethod: {
                            href: faker.internet.url(),
                            id: faker.random.uuid(),
                            name: "string"
                        }

                    }
                ],
                financialAccount: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string",
                    accountBalance: {
                        amount: {
                            unit: "string",
                            value: faker.random.number()
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
                    id: faker.random.uuid(),
                    name: "string"
                },
                relatedParty: [
                    {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
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
                            id: faker.random.uuid(),
                            name: "string",
                            role: "string"
                        }
                    }
                ],
                accountBalance: [
                    {
                        amount: {
                            unit: "string",
                            value: faker.random.number()
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
                            id: faker.random.uuid(),
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
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_settlement'
            },
            creditLimit: {
                unit: "string",
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string",
                        activationDate: new Date()
                    }
                ],
                format: {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"
                },
                cycleSpecification: {
                    dateShift: faker.random.number(),
                    frequency: "string",
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
                    name: "string"

                }
            },
            paymentPlan: [
                {
                    numberOfPayments: faker.random.number(),
                    paymentFrequency: "string",
                    priority: faker.random.number(),
                    status: "string",
                    totalAmount: {
                        unit: "string",
                        value: faker.random.number()
                    },
                    type: "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    paymentMethod: {
                        href: faker.internet.url(),
                        id: faker.random.uuid(),
                        name: "string"
                    }

                }
            ],
            financialAccount: {
                href: faker.internet.url(),
                id: faker.random.uuid(),
                name: "string",
                accountBalance: {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                id: faker.random.uuid(),
                name: "string"
            },
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string"
                    }
                }
            ]
        }
    },
    remove_settlement: function(request)
    {
        console.log("account_management_controller.remove_settlement")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_settlement'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },

    index_financial: function(request)
    {
        console.log("account_management_controller.index_financial")
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_financial'
                },
                creditLimit: {
                    unit: "string",
                    value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                            id: faker.random.uuid(),
                            name: "string",
                            role: "string"
                        }
                    }
                ],
                accountBalance: [
                    {
                        amount: {
                            unit: "string",
                            value: faker.random.number()
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
                            id: faker.random.uuid(),
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
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_financial'
            },
            creditLimit: {
                unit: "string",
                value: faker.random.number()
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
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                value: faker.random.number()
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
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
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
                value: faker.random.number()
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
                    id: faker.random.uuid(),
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
                        id: faker.random.uuid(),
                        name: "string",
                        role: "string"
                    }
                }
            ],
            accountBalance: [
                {
                    amount: {
                        unit: "string",
                        value: faker.random.number()
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
                        id: faker.random.uuid(),
                        name: "string"
                    }
                }
            ]
        }
    },
    remove_financial: function(request)
    {
        console.log("account_management_controller.remove_financial")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_financial'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },

    index_billing_cycle_specification: function(request)
    {
        console.log("account_management_controller.index_billing_cycle_specification")
        return [
            {  
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'index_billing_cycle_specification'
                },
                billingDateShift: faker.random.number(),
                billingPeriod: "string",
                chargeDateOffset: faker.random.number(),
                creditDateOffset: faker.random.number(),
                description: faker.lorem.sentence(),
                frequency: "string",
                href: faker.internet.url(),
                mailingDateOffset: faker.random.number(),
                name: "string",
                paymentDueDateOffset: faker.random.number(),
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
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Account Management',
                action: 'create_billing_cycle_specification'
            },
            billingDateShift: faker.random.number(),
            billingPeriod: "string",
            chargeDateOffset: faker.random.number(),
            creditDateOffset: faker.random.number(),
            description: faker.lorem.sentence(),
            frequency: "string",
            href: faker.internet.url(),
            mailingDateOffset: faker.random.number(),
            name: "string",
            paymentDueDateOffset: faker.random.number(),
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
            billingDateShift: faker.random.number(),
            billingPeriod: "string",
            chargeDateOffset: faker.random.number(),
            creditDateOffset: faker.random.number(),
            description: faker.lorem.sentence(),
            frequency: "string",
            href: faker.internet.url(),
            mailingDateOffset: faker.random.number(),
            name: "string",
            paymentDueDateOffset: faker.random.number(),
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
            billingDateShift: faker.random.number(),
            billingPeriod: "string",
            chargeDateOffset: faker.random.number(),
            creditDateOffset: faker.random.number(),
            description: faker.lorem.sentence(),
            frequency: "string",
            href: faker.internet.url(),
            mailingDateOffset: faker.random.number(),
            name: "string",
            paymentDueDateOffset: faker.random.number(),
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            }
        }
    },
    remove_billing_cycle_specification: function(request)
    {
        console.log("account_management_controller.remove_billing_cycle_specification")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_billing_cycle_specification'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },

    index_bill_format: function(request)
    {
        console.log("account_management_controller.index_bill_format")
        return [
            {
                id: faker.random.uuid(),
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
            id: faker.random.uuid(),
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
    remove_bill_format: function(request)
    {
        console.log("account_management_controller.remove_bill_format")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_bill_format'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },

    index_bill_media: function(request)
    {
        console.log("account_management_controller.index_bill_media")
        return [
            { 
                id: faker.random.uuid(),
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
            id: faker.random.uuid(),
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
    remove_bill_media: function(request)
    {
        console.log("account_management_controller.remove_bill_media")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_bill_media'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },

    create_hub: function(request)
    {
        console.log("account_management_controller.create_hub")
        return [
            { 
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Account Management',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    remove_hub: function(request)
    {
        console.log("account_management_controller.remove_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Account Management',
                action: 'remove_hub'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    }
}