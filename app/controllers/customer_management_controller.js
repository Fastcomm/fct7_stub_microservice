//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log("customer_management_controller.create")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Customer Management',
                action: 'create'
            },
            "@schemaLocation": "string",
            status: "string",
            contactMedium: [
                {
                    "@schemaLocation": "string",
                    preferred: true,
                    "@baseType": "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    characteristic: {
                        country: "string",
                        stateOrProvince: "string",
                        street2: "string",
                        faxNumber: "string",
                        phoneNumber: "string",
                        city: "string",
                        emailAddress: "string",
                        postCode: "string",
                        street1: "string",
                        type: "string"
                    },
                    "@type": "string",
                    type: "string"
                }
            ],
            agreement: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string"
                }
            ],
            account: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string",
                    description: "string"
                }
            ],
            href: "string",
            name: "string",
            engagedParty: {
                href: "string",
                name: "string",
                id: "string",
                "@referredType": "string",
                description: "string"
            },
            "@baseType": "string",
            id: "string",
            paymentMethod: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string"
                }
            ],
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            },
            characteristic: [
                {
                    value: "string",
                    name: "string"
                }
            ],
            "@type": "string",
            statusReason: "string",
            type: {
                partnershipHref: "string",
                name: "string",
                "@referredType": "string",
                partnershipName: "string",
                partnershipId: "string",
            },
            creditProfile: [
                {
                    "@schemaLocation": "string",
                    creditScore: 0,
                    creditProfileDate: new Date(),
                    "@baseType": "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@type": "string",
                    creditRiskRating: 0
                }
            ],
            relatedParty: [
                {
                    href: "string",
                    role: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string" 
                }
            ]
        }
    },
    index: function(request)
    {
        console.log("customer_management_controller.index")
        return [
            {  
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Customer Management',
                    action: 'index'
                },
                "@schemaLocation": "string",
                status: "string",
                contactMedium: [
                    {
                        "@schemaLocation": "string",
                        preferred: true,
                        "@baseType": "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        characteristic: {
                            country: "string",
                            stateOrProvince: "string",
                            street2: "string",
                            faxNumber: "string",
                            phoneNumber: "string",
                            city: "string",
                            emailAddress: "string",
                            postCode: "string",
                            street1: "string",
                            type: "string"
                        },
                        "@type": "string",
                        type: "string"
                    }
                ],
                agreement: [
                    {
                        href: "string",
                        name: "string",
                        id: "string",
                        "@referredType": "string"
                    }
                ],
                account: [
                    {
                        href: "string",
                        name: "string",
                        id: "string",
                        "@referredType": "string",
                        description: "string"
                    }
                ],
                href: "string",
                name: "string",
                engagedParty: {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string",
                    description: "string"
                },
                "@baseType": "string",
                id: "string",
                paymentMethod: [
                    {
                        href: "string",
                        name: "string",
                        id: "string",
                        "@referredType": "string"
                    }
                ],
                validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                },
                characteristic: [
                    {
                        value: "string",
                        name: "string"
                    }
                ],
                "@type": "string",
                statusReason: "string",
                type: {
                    partnershipHref: "string",
                    name: "string",
                    "@referredType": "string",
                    partnershipName: "string",
                    partnershipId: "string",
                },
                creditProfile: [
                    {
                        "@schemaLocation": "string",
                        creditScore: 0,
                        creditProfileDate: new Date(),
                        "@baseType": "string",
                        validFor: {
                            endDateTime: new Date(),
                            startDateTime: new Date()
                        },
                        "@type": "string",
                        creditRiskRating: 0
                    }
                ],
                relatedParty: [
                    {
                        href: "string",
                        role: "string",
                        name: "string",
                        id: "string",
                        "@referredType": "string" 
                    }
                ]  
            }
        ]
    },
    update: function(request)
    {
        console.log("customer_management_controller.update")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'update'
            },
            "@schemaLocation": "string",
            status: "string",
            contactMedium: [
                {
                    "@schemaLocation": "string",
                    preferred: true,
                    "@baseType": "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    characteristic: {
                        country: "string",
                        stateOrProvince: "string",
                        street2: "string",
                        faxNumber: "string",
                        phoneNumber: "string",
                        city: "string",
                        emailAddress: "string",
                        postCode: "string",
                        street1: "string",
                        type: "string"
                    },
                    "@type": "string",
                    type: "string"
                }
            ],
            agreement: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string"
                }
            ],
            account: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string",
                    description: "string"
                }
            ],
            href: "string",
            name: "string",
            engagedParty: {
                href: "string",
                name: "string",
                id: "string",
                "@referredType": "string",
                description: "string"
            },
            "@baseType": "string",
            id: "string",
            paymentMethod: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string"
                }
            ],
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            },
            characteristic: [
                {
                    value: "string",
                    name: "string"
                }
            ],
            "@type": "string",
            statusReason: "string",
            type: {
                partnershipHref: "string",
                name: "string",
                "@referredType": "string",
                partnershipName: "string",
                partnershipId: "string",
            },
            creditProfile: [
                {
                    "@schemaLocation": "string",
                    creditScore: 0,
                    creditProfileDate: new Date(),
                    "@baseType": "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@type": "string",
                    creditRiskRating: 0
                }
            ],
            relatedParty: [
                {
                    href: "string",
                    role: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string" 
                }
            ] 
        }
    },
    show: function(request)
    {
        console.log("customer_management_controller.show")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'show'
            },
            "@schemaLocation": "string",
            status: "string",
            contactMedium: [
                {
                    "@schemaLocation": "string",
                    preferred: true,
                    "@baseType": "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    characteristic: {
                        country: "string",
                        stateOrProvince: "string",
                        street2: "string",
                        faxNumber: "string",
                        phoneNumber: "string",
                        city: "string",
                        emailAddress: "string",
                        postCode: "string",
                        street1: "string",
                        type: "string"
                    },
                    "@type": "string",
                    type: "string"
                }
            ],
            agreement: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string"
                }
            ],
            account: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string",
                    description: "string"
                }
            ],
            href: "string",
            name: "string",
            engagedParty: {
                href: "string",
                name: "string",
                id: "string",
                "@referredType": "string",
                description: "string"
            },
            "@baseType": "string",
            id: "string",
            paymentMethod: [
                {
                    href: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string"
                }
            ],
            validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
            },
            characteristic: [
                {
                    value: "string",
                    name: "string"
                }
            ],
            "@type": "string",
            statusReason: "string",
            type: {
                partnershipHref: "string",
                name: "string",
                "@referredType": "string",
                partnershipName: "string",
                partnershipId: "string",
            },
            creditProfile: [
                {
                    "@schemaLocation": "string",
                    creditScore: 0,
                    creditProfileDate: new Date(),
                    "@baseType": "string",
                    validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                    },
                    "@type": "string",
                    creditRiskRating: 0
                }
            ],
            relatedParty: [
                {
                    href: "string",
                    role: "string",
                    name: "string",
                    id: "string",
                    "@referredType": "string" 
                }
            ]
           
        }
    },    
    destroy: function(request)
    {
        console.log("customer_management_controller.destroy")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'destroy'
            },
            code: 204,
            reason: "string",
            message: "Customer succesfully removed.",
            status: faker.datatype.number(),
            referenceError: "string",
            "@type": "string",
        }
    }

}