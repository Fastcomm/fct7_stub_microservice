//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create_individual: function(request)
    {
        console.log("party_management_controller.create_individual")
        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_individual'
            },
            href: faker.internet.url(), 
            gender: "string",
            placeOfBirth: "string",
            countryOfBirth: "string",
            nationality: "string",
            maritalStatus: "string",
            birthDate: "2021-04-12",
            title: "string",
            givenName: "string",
            familyName: "string",
            middleName: "string",
            fullName: "string",
            formattedName: "string",
            location: "string",
            status: "string",
            disability: [
                {
                    disability: "string"
                }
            ],
            characteristic: [
                {
                    name: "string",
                    value: "string"
                }
            ],
            otherName: [
                {
                    title: "string",
                    givenName: "string",
                    familyName: "string",
                    middleName: "string",
                    fullName: "string",
                    formattedName: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                }
            ],
            individualIdentification: [
                {
                    type: "string",
                    identificationId: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date() 
                }
            ],
            externalReference: [
                {
                    href: "string",
                    type: "string"
                }
            ],
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            contactMedium: [
                {
                    type: "string",
                    preferred: true,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    medium: {
                        city: "string",
                        country: "string",
                        postcode: "string",
                        stateOrProvince: "string",
                        streetOne: "string",
                        streetTwo: "string",
                        emailAddress: "string",
                        type: "string",
                        number: "string"
                    }
                }
            ]
        }
    },
    index_individual: function(request)
    {
        console.log("party_management_controller.index_individual")
        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Party Management',
                    action: 'index_individual'
                },
                href: faker.internet.url(),
                gender: "string",
                placeOfBirth: "string",
                countryOfBirth: "string",
                nationality: "string",
                maritalStatus: "string",
                birthDate: "2021-04-12",
                title: "string",
                givenName: "string",
                familyName: "string",
                middleName: "string",
                fullName: "string",
                formattedName: "string",
                location: "string",
                status: "string",
                disability: [
                    {
                        disability: "string"
                    }
                ],
                characteristic: [
                    {
                        name: "string",
                        value: "string"
                    }
                ],
                otherName: [
                    {
                        title: "string",
                        givenName: "string",
                        familyName: "string",
                        middleName: "string",
                        fullName: "string",
                        formattedName: "string",
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        },
                    }
                ],
                individualIdentification: [
                    {
                        type: "string",
                        identificationId: "string",
                        issuingAuthority: "string",
                        issuingDate: new Date() 
                    }
                ],
                externalReference: [
                    {
                        href: "string",
                        type: "string"
                    }
                ],
                relatedParty: [
                    {
                        id: "string",
                        href: "string",
                        role: "string",
                        name: "string",
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        }
                    }
                ],
                contactMedium: [
                    {
                        type: "string",
                        preferred: true,
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        },
                        medium: {
                            city: "string",
                            country: "string",
                            postcode: "string",
                            stateOrProvince: "string",
                            streetOne: "string",
                            streetTwo: "string",
                            emailAddress: "string",
                            type: "string",
                            number: "string"
                        }
                    }
                ]
                
            }
        ]
    },
    show_individual: function(request)
    {
        console.log("party_management_controller.show_individual")
        return {
            id: request.params.individual_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'show_individual'
            },
            href: faker.internet.url(),
            gender: "string",
            placeOfBirth: "string",
            countryOfBirth: "string",
            nationality: "string",
            maritalStatus: "string",
            birthDate: "2021-04-12",
            title: "string",
            givenName: "string",
            familyName: "string",
            middleName: "string",
            fullName: "string",
            formattedName: "string",
            location: "string",
            status: "string",
            disability: [
                {
                    disability: "string"
                }
            ],
            characteristic: [
                {
                    name: "string",
                    value: "string"
                }
            ],
            otherName: [
                {
                    title: "string",
                    givenName: "string",
                    familyName: "string",
                    middleName: "string",
                    fullName: "string",
                    formattedName: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                }
            ],
            individualIdentification: [
                {
                    type: "string",
                    identificationId: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date() 
                }
            ],
            externalReference: [
                {
                    href: "string",
                    type: "string"
                }
            ],
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            contactMedium: [
                {
                    type: "string",
                    preferred: true,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    medium: {
                        city: "string",
                        country: "string",
                        postcode: "string",
                        stateOrProvince: "string",
                        streetOne: "string",
                        streetTwo: "string",
                        emailAddress: "string",
                        type: "string",
                        number: "string"
                    }
                }
            ] 
        }
    },
    put_update_individual: function(request)
    {
        console.log("party_management_controller.put_update_individual")
        return {
            id: request.params.individual_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'put_update_individual'
            },
            href: faker.internet.url(),
            gender: "string",
            placeOfBirth: "string",
            countryOfBirth: "string",
            nationality: "string",
            maritalStatus: "string",
            birthDate: "2021-04-12",
            title: "string",
            givenName: "string",
            familyName: "string",
            middleName: "string",
            fullName: "string",
            formattedName: "string",
            location: "string",
            status: "string",
            disability: [
                {
                    disability: "string"
                }
            ],
            characteristic: [
                {
                    name: "string",
                    value: "string"
                }
            ],
            otherName: [
                {
                    title: "string",
                    givenName: "string",
                    familyName: "string",
                    middleName: "string",
                    fullName: "string",
                    formattedName: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                }
            ],
            individualIdentification: [
                {
                    type: "string",
                    identificationId: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date() 
                }
            ],
            externalReference: [
                {
                    href: "string",
                    type: "string"
                }
            ],
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            contactMedium: [
                {
                    type: "string",
                    preferred: true,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    medium: {
                        city: "string",
                        country: "string",
                        postcode: "string",
                        stateOrProvince: "string",
                        streetOne: "string",
                        streetTwo: "string",
                        emailAddress: "string",
                        type: "string",
                        number: "string"
                    }
                }
            ]
        }
    },
    patch_update_individual: function(request)
    {
        console.log("party_management_controller.patch_update_individual")
        return {
            id: request.params.individual_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'patch_update_individual'
            },
            href: faker.internet.url(),
            gender: "string",
            placeOfBirth: "string",
            countryOfBirth: "string",
            nationality: "string",
            maritalStatus: "string",
            birthDate: "2021-04-12",
            title: "string",
            givenName: "string",
            familyName: "string",
            middleName: "string",
            fullName: "string",
            formattedName: "string",
            location: "string",
            status: "string",
            disability: [
                {
                    disability: "string"
                }
            ],
            characteristic: [
                {
                    name: "string",
                    value: "string"
                }
            ],
            otherName: [
                {
                    title: "string",
                    givenName: "string",
                    familyName: "string",
                    middleName: "string",
                    fullName: "string",
                    formattedName: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                }
            ],
            individualIdentification: [
                {
                    type: "string",
                    identificationId: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date() 
                }
            ],
            externalReference: [
                {
                    href: "string",
                    type: "string"
                }
            ],
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            contactMedium: [
                {
                    type: "string",
                    preferred: true,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    medium: {
                        city: "string",
                        country: "string",
                        postcode: "string",
                        stateOrProvince: "string",
                        streetOne: "string",
                        streetTwo: "string",
                        emailAddress: "string",
                        type: "string",
                        number: "string"
                    }
                }
            ] 
        }
    },
    destroy_individual: function(request)
    {
        console.log("party_management_controller.destroy_individual")
        return {
            id: request.params.individual_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'destroy_individual'
            },
            code: 0,
            reason: "string",
            message: "string",
            status: "string",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },
    create_organization: function(request)
    {
        console.log("party_management_controller.create_organization")
        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_organization'
            },
            href: faker.internet.url(), 
            isLegalEntity: true,
            type: "string",
            existsDuring: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            tradingName: "string",
            nameType: "string",
            status: "string",
            otherName: {
                nameType: "string",
                tradingName: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            characteristic: [
                {
                    name: "string",
                    value: "string"
                }
            ],
            organizationIdentification: [
                {
                    type: "string",
                    identificationId: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date(),  
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            externalReference: [
                {
                    href: "string",
                    type: "string"
                }
            ],
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            organizationParentRelationship: {
                id: "string",
                href: "string",
                relationshipType: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            organizationChildRelationship: [
                {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    } 
                }
            ],
            contactMedium: [
                {
                    type: "string",
                    preferred: true,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    medium: {
                        city: "string",
                        country: "string",
                        postcode: "string",
                        stateOrProvince: "string",
                        streetOne: "string",
                        streetTwo: "string",
                        emailAddress: "string",
                        type: "string",
                        number: "string"
                    }
                }
            ]
        }
    },
    index_organization: function(request)
    {
        console.log("party_management_controller.index_organization")
        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Party Management',
                    action: 'index_organization'
                },
                href: faker.internet.url(),
                isLegalEntity: true,
                type: "string",
                existsDuring: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                tradingName: "string",
                nameType: "string",
                status: "string",
                otherName: {
                    nameType: "string",
                    tradingName: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                },
                characteristic: [
                    {
                        name: "string",
                        value: "string"
                    }
                ],
                organizationIdentification: [
                    {
                        type: "string",
                        identificationId: "string",
                        issuingAuthority: "string",
                        issuingDate: new Date(),  
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        }
                    }
                ],
                externalReference: [
                    {
                        href: "string",
                        type: "string"
                    }
                ],
                relatedParty: [
                    {
                        id: "string",
                        href: "string",
                        role: "string",
                        name: "string",
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        }
                    }
                ],
                organizationParentRelationship: {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                },
                organizationChildRelationship: [
                    {
                        id: "string",
                        href: "string",
                        relationshipType: "string",
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        } 
                    }
                ],
                contactMedium: [
                    {
                        type: "string",
                        preferred: true,
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        },
                        medium: {
                            city: "string",
                            country: "string",
                            postcode: "string",
                            stateOrProvince: "string",
                            streetOne: "string",
                            streetTwo: "string",
                            emailAddress: "string",
                            type: "string",
                            number: "string"
                        }
                    }
                ]
            }
        ]
    },
    show_organization: function(request)
    {
        console.log("party_management_controller.show_organization")
        return {
            id: request.params.organization_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'show_organization'
            },
            href: faker.internet.url(),
            href: faker.internet.url(),
            isLegalEntity: true,
            type: "string",
            existsDuring: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            tradingName: "string",
            nameType: "string",
            status: "string",
            otherName: {
                nameType: "string",
                tradingName: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            characteristic: [
                {
                    name: "string",
                    value: "string"
                }
            ],
            organizationIdentification: [
                {
                    type: "string",
                    identificationId: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date(),  
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            externalReference: [
                {
                    href: "string",
                    type: "string"
                }
            ],
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            organizationParentRelationship: {
                id: "string",
                href: "string",
                relationshipType: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            organizationChildRelationship: [
                {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    } 
                }
            ],
            contactMedium: [
                {
                    type: "string",
                    preferred: true,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    medium: {
                        city: "string",
                        country: "string",
                        postcode: "string",
                        stateOrProvince: "string",
                        streetOne: "string",
                        streetTwo: "string",
                        emailAddress: "string",
                        type: "string",
                        number: "string"
                    }
                }
            ]  
        }
    },
    put_update_organization: function(request)
    {
        console.log("party_management_controller.put_update_organization")
        return {
            id: request.params.organization_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'put_update_organization'
            },
            href: faker.internet.url(),
            isLegalEntity: true,
            type: "string",
            existsDuring: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            tradingName: "string",
            nameType: "string",
            status: "string",
            otherName: {
                nameType: "string",
                tradingName: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            characteristic: [
                {
                    name: "string",
                    value: "string"
                }
            ],
            organizationIdentification: [
                {
                    type: "string",
                    identificationId: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date(),  
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            externalReference: [
                {
                    href: "string",
                    type: "string"
                }
            ],
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            organizationParentRelationship: {
                id: "string",
                href: "string",
                relationshipType: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            organizationChildRelationship: [
                {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    } 
                }
            ],
            contactMedium: [
                {
                    type: "string",
                    preferred: true,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    medium: {
                        city: "string",
                        country: "string",
                        postcode: "string",
                        stateOrProvince: "string",
                        streetOne: "string",
                        streetTwo: "string",
                        emailAddress: "string",
                        type: "string",
                        number: "string"
                    }
                }
            ]  
        }
    },
    patch_update_organization: function(request)
    {
        console.log("party_management_controller.patch_update_organization")
        return {
            id: request.params.organization_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'patch_update_organization'
            },
            href: faker.internet.url(),
            isLegalEntity: true,
            type: "string",
            existsDuring: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            tradingName: "string",
            nameType: "string",
            status: "string",
            otherName: {
                nameType: "string",
                tradingName: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            characteristic: [
                {
                    name: "string",
                    value: "string"
                }
            ],
            organizationIdentification: [
                {
                    type: "string",
                    identificationId: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date(),  
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            externalReference: [
                {
                    href: "string",
                    type: "string"
                }
            ],
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            organizationParentRelationship: {
                id: "string",
                href: "string",
                relationshipType: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            organizationChildRelationship: [
                {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    } 
                }
            ],
            contactMedium: [
                {
                    type: "string",
                    preferred: true,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    medium: {
                        city: "string",
                        country: "string",
                        postcode: "string",
                        stateOrProvince: "string",
                        streetOne: "string",
                        streetTwo: "string",
                        emailAddress: "string",
                        type: "string",
                        number: "string"
                    }
                }
            ]
        }
    },
    destroy_organization: function(request)
    {
        console.log("party_management_controller.destroy_organization")
        return {
            id: request.params.organization_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'destroy_organization'
            },
            code: 0,
            reason: "string",
            message: "string",
            status: "string",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },
    create_hub: function(request)
    {
        console.log("party_management_controller.create_hub")
        return [
            { 
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Party Management',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("party_management_controller.destroy_hub")
        return {  
            id: request.params.hub_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'destroy_hub'
            },
            code: 0,
            reason: "string",
            message: "string",
            status: "string",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    }
}