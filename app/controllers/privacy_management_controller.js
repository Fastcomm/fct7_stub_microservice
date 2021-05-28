//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_profile: function(request)
    {
        console.log("privacy_management_controller.index_profile")
        return [
            {
                routeDetails: {
                    controller: 'Privacy Management',
                    action: 'index_profile'
                },
                id: faker.datatype.uuid(),
                creationDate: new Date(),
                description: "string",
                name: "string",
                status: "string",
                agreedByParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "stringnew Date()",
                  "@type": "string",
                  "@referredType": "string"
                },
                agreement: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                applicableForParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                partyPrivacyProfileCharacteristic: [
                  {
                    id: "string",
                    name: "string",
                    privacyUsagePurpose: "string",
                    valueType: "string",
                    relatedParty: [
                      {
                        id: "string",
                        href: "string",
                        name: "string",
                        role: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                      }
                    ],
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                partyPrivacyProfileSpecification: {
                  id: "string",
                  href: "string",
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
        ]
    },
    create_profile: function(request)
    {
        console.log("privacy_management_controller.create_profile")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'create_profile'
            },
            id: faker.datatype.uuid(),
            creationDate: new Date(),
            description: "string",
            name: "string",
            status: "string",
            agreedByParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "stringnew Date()",
              "@type": "string",
              "@referredType": "string"
            },
            agreement: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            applicableForParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            partyPrivacyProfileCharacteristic: [
              {
                id: "string",
                name: "string",
                privacyUsagePurpose: "string",
                valueType: "string",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyPrivacyProfileSpecification: {
              id: "string",
              href: "string",
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
            creationDate: new Date(),
            description: "string",
            name: "string",
            status: "string",
            agreedByParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "stringnew Date()",
              "@type": "string",
              "@referredType": "string"
            },
            agreement: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            applicableForParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            partyPrivacyProfileCharacteristic: [
              {
                id: "string",
                name: "string",
                privacyUsagePurpose: "string",
                valueType: "string",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyPrivacyProfileSpecification: {
              id: "string",
              href: "string",
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
    },
    update_profile: function(request)
    {
        console.log("privacy_management_controller.update_profile")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'update_profile'
            },
            id: faker.datatype.uuid(),
            creationDate: new Date(),
            description: "string",
            name: "string",
            status: "string",
            agreedByParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "stringnew Date()",
              "@type": "string",
              "@referredType": "string"
            },
            agreement: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            applicableForParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            partyPrivacyProfileCharacteristic: [
              {
                id: "string",
                name: "string",
                privacyUsagePurpose: "string",
                valueType: "string",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyPrivacyProfileSpecification: {
              id: "string",
              href: "string",
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
    },
    destroy_profile: function(request)
    {
        console.log("privacy_management_controller.destroy_profile")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'destroy_profile'
            },
            code: 204
        }
    },

    index_profile_specification: function(request)
    {
        console.log("privacy_management_controller.index_profile_specification")
        return [
            {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Privacy Management',
                action: 'index_profile_specification'
            },
            href: faker.internet.url(),
            description: "string",
            lastUpdate: new Date(),
            name: "string",
            status: "string",
            version: "string",
            applicableRole: [
              {
                description: "string",
                name: "string",
                agreementSpecification: [
                  {
                    id: "string",
                    href: "string",
                    description: "string",
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
              }
            ],
            partyPrivacyProfileSpecCharacteristic: [
              {
                id: "string",
                criticalityLevel: "string",
                description: "string",
                name: "string",
                privacyType: "string",
                privacyUsagePurpose: "string",
                allowedRole: [
                  {
                    description: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                partyPrivacyProfileSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: 0,
                    valueTo: 0,
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
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
            productOffering: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
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
        ]
    },
    create_profile_specification: function(request)
    {
        console.log("privacy_management_controller.create_profile_specification")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Privacy Management',
                action: 'create_profile_specification'
            },
            href: faker.internet.url(),
            description: "string",
            lastUpdate: new Date(),
            name: "string",
            status: "string",
            version: "string",
            applicableRole: [
              {
                description: "string",
                name: "string",
                agreementSpecification: [
                  {
                    id: "string",
                    href: "string",
                    description: "string",
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
              }
            ],
            partyPrivacyProfileSpecCharacteristic: [
              {
                id: "string",
                criticalityLevel: "string",
                description: "string",
                name: "string",
                privacyType: "string",
                privacyUsagePurpose: "string",
                allowedRole: [
                  {
                    description: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                partyPrivacyProfileSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: 0,
                    valueTo: 0,
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
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
            productOffering: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
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
    },
    show_profile_specification: function(request)
    {
        console.log("privacy_management_controller.show_profile_specification")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Privacy Management',
                action: 'show_profile_specification'
            },
            href: faker.internet.url(),
            description: "string",
            lastUpdate: new Date(),
            name: "string",
            status: "string",
            version: "string",
            applicableRole: [
              {
                description: "string",
                name: "string",
                agreementSpecification: [
                  {
                    id: "string",
                    href: "string",
                    description: "string",
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
              }
            ],
            partyPrivacyProfileSpecCharacteristic: [
              {
                id: "string",
                criticalityLevel: "string",
                description: "string",
                name: "string",
                privacyType: "string",
                privacyUsagePurpose: "string",
                allowedRole: [
                  {
                    description: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                partyPrivacyProfileSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: 0,
                    valueTo: 0,
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
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
            productOffering: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
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
    },
    update_profile_specification: function(request)
    {
        console.log("privacy_management_controller.update_profile_specification")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Privacy Management',
                action: 'update_profile_specification'
            },
            href: faker.internet.url(),
            description: "string",
            lastUpdate: new Date(),
            name: "string",
            status: "string",
            version: "string",
            applicableRole: [
              {
                description: "string",
                name: "string",
                agreementSpecification: [
                  {
                    id: "string",
                    href: "string",
                    description: "string",
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
              }
            ],
            partyPrivacyProfileSpecCharacteristic: [
              {
                id: "string",
                criticalityLevel: "string",
                description: "string",
                name: "string",
                privacyType: "string",
                privacyUsagePurpose: "string",
                allowedRole: [
                  {
                    description: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                partyPrivacyProfileSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: 0,
                    valueTo: 0,
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
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
            productOffering: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
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
    },
    destroy_profile_specification: function(request)
    {
        console.log("privacy_management_controller.destroy_profile_specification")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'destroy_profile_specification'
            },
            code: 204
        }
    },

    index_agreement: function(request)
    {
        console.log("privacy_management_controller.index_agreement")
        return [
            {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Privacy Management',
                action: 'index_agreement'
            },
            href: faker.internet.url(),
            agreementType: "string",
            description: "string",
            documentNumber: 0,
            initialDate: new Date(),
            name: "string",
            statementOfIntent: "string",
            status: "string",
            version: "string",
            agreementAuthorization: [
              {
                date: new Date(),
                signatureRepresentation: "string",
                state: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            agreementItem: [
              {
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                productOffering: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                termOrCondition: [
                  {
                    id: "string",
                    description: "string",
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
            ],
            agreementPeriod: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            agreementSpecification: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            associatedAgreement: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            characteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            completionDate: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            engagedPartyRole: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            partyPrivacyProfile: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            partyPrivacyProfileCharacteristic: [
              {
                id: "string",
                name: "string",
                privacyUsagePurpose: "string",
                valueType: "string",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                value: "string",
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
    create_agreement: function(request)
    {
        console.log("privacy_management_controller.create_agreement")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Privacy Management',
                action: 'create_agreement'
            },
            href: faker.internet.url(),
            agreementType: "string",
            description: "string",
            documentNumber: 0,
            initialDate: new Date(),
            name: "string",
            statementOfIntent: "string",
            status: "string",
            version: "string",
            agreementAuthorization: [
              {
                date: new Date(),
                signatureRepresentation: "string",
                state: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            agreementItem: [
              {
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                productOffering: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                termOrCondition: [
                  {
                    id: "string",
                    description: "string",
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
            ],
            agreementPeriod: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            agreementSpecification: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            associatedAgreement: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            characteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            completionDate: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            engagedPartyRole: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            partyPrivacyProfile: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            partyPrivacyProfileCharacteristic: [
              {
                id: "string",
                name: "string",
                privacyUsagePurpose: "string",
                valueType: "string",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                value: "string",
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
    show_agreement: function(request)
    {
        console.log("privacy_management_controller.show_agreement")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Privacy Management',
                action: 'show_agreement'
            },
            href: faker.internet.url(),
            agreementType: "string",
            description: "string",
            documentNumber: 0,
            initialDate: new Date(),
            name: "string",
            statementOfIntent: "string",
            status: "string",
            version: "string",
            agreementAuthorization: [
              {
                date: new Date(),
                signatureRepresentation: "string",
                state: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            agreementItem: [
              {
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                productOffering: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                termOrCondition: [
                  {
                    id: "string",
                    description: "string",
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
            ],
            agreementPeriod: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            agreementSpecification: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            associatedAgreement: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            characteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            completionDate: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            engagedPartyRole: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            partyPrivacyProfile: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            partyPrivacyProfileCharacteristic: [
              {
                id: "string",
                name: "string",
                privacyUsagePurpose: "string",
                valueType: "string",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                value: "string",
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
    update_agreement: function(request)
    {
        console.log("privacy_management_controller.update_agreement")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Privacy Management',
                action: 'update_agreement'
            },
            href: faker.internet.url(),
            agreementType: "string",
            description: "string",
            documentNumber: 0,
            initialDate: new Date(),
            name: "string",
            statementOfIntent: "string",
            status: "string",
            version: "string",
            agreementAuthorization: [
              {
                date: new Date(),
                signatureRepresentation: "string",
                state: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            agreementItem: [
              {
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                productOffering: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                termOrCondition: [
                  {
                    id: "string",
                    description: "string",
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
            ],
            agreementPeriod: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            agreementSpecification: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            associatedAgreement: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            characteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            completionDate: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            engagedPartyRole: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            partyPrivacyProfile: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            partyPrivacyProfileCharacteristic: [
              {
                id: "string",
                name: "string",
                privacyUsagePurpose: "string",
                valueType: "string",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                value: "string",
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
    destroy_agreemeent: function(request)
    {
        console.log("privacy_management_controller.destroy_agreemeent")
        return {
            routeDetails: {
                controller: 'Privacy Management',
                action: 'destroy_agreemeent'
            },
            code: 204
        }
    },

    listener_profile_create_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_profile_create_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_profile_create_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_profile_attribute_value_change: function(request)
    {
        console.log('profile_and_permissions_controller.listener_profile_attribute_value_change')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_profile_attribute_value_change'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_profile_state_change_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_profile_state_change_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_profile_state_change_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },   
    listener_profile_delete_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_profile_delete_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_profile_delete_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },

    listener_specification_create_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_specification_create_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_specification_create_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_specification_attribute_value_change: function(request)
    {
        console.log('profile_and_permissions_controller.listener_specification_attribute_value_change')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_specification_attribute_value_change'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_specification_state_change_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_specification_state_change_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_specification_state_change_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },   
    listener_specification_delete_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_specification_delete_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_specification_delete_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },

    listener_agreement_create_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_agreement_create_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_agreement_create_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_agreement_attribute_value_change: function(request)
    {
        console.log('profile_and_permissions_controller.listener_agreement_attribute_value_change')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_agreement_attribute_value_change'
                },
                callback: "string",
                query: "string"
            } 
        ]
    }, 
    listener_agreement_state_change_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_agreement_state_change_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_agreement_state_change_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },   
    listener_agreement_delete_event: function(request)
    {
        console.log('profile_and_permissions_controller.listener_agreement_delete_event')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'User profile and Permissions',
                    action: 'listener_agreement_delete_event'
                },
                callback: "string",
                query: "string"
            } 
        ]
    },

    create_hub: function(request)
    {
        console.log("profile_and_permissions_controller.create_hub")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'profile_and_permissions_controller',
                action: 'create_hub'
            },
            callback: faker.internet.url(),
            query: faker.hacker.phrase()
        }
    },
    destroy_hub: function(request)
    {
        console.log("profile_and_permissions_controller.destroy_hub")
        return {
            routeDetails: {
                controller: 'profile_and_permissions_controller',
                action: 'destroy_hub'
            },
            code:204,
        }
    } 


}