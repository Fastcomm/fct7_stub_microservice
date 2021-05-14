//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_individual: function(request)
    {
        console.log("party_management_controller.index_individual")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Party Management',
                    action: 'index_individual'
                },
                href: faker.internet.url(),
                aristocraticTitle: "string",
                birthDate: new Date(),
                countryOfBirth: "string",
                deathDate: new Date(),
                familyName: "string",
                familyNamePrefix: "string",
                formattedName: "string",
                fullName: "string",
                gender: "string",
                generation: "string",
                givenName: "string",
                legalName: "string",
                location: "string",
                maritalStatus: "string",
                middleName: "string",
                nationality: "string",
                placeOfBirth: "string",
                preferredGivenName: "string",
                title: "string",
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
                creditRating: [
                  {
                    creditAgencyName: "string",
                    creditAgencyType: "string",
                    ratingReference: "string",
                    ratingScore: 0,
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                disability: [
                  {
                    disabilityCode: "string",
                    disabilityName: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                externalReference: [
                  {
                    externalReferenceType: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                individualIdentification: [
                  {
                    identificationId: "string",
                    identificationType: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date(),
                    attachment: {
                      id: "string",
                      href: "string",
                      attachmentType: "string",
                      content: "string",
                      description: "string",
                      mimeType: "string",
                      name: "string",
                      url: "string",
                      size: {
                        amount: 1,
                        units: "string"
                      },
                      validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                      },
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
                languageAbility: [
                  {
                    isFavouriteLanguage: true,
                    languageCode: "string",
                    languageName: "string",
                    listeningProficiency: "string",
                    readingProficiency: "string",
                    speakingProficiency: "string",
                    writingProficiency: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                otherName: [
                  {
                    aristocraticTitle: "string",
                    familyName: "string",
                    familyNamePrefix: "string",
                    formattedName: "string",
                    fullName: "string",
                    generatin: "string",
                    givenName: "string",
                    legalName: "string",
                    middleName: "string",
                    preferredGivenName: "string",
                    title: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                partyCharacteristic: [
                  {
                    name: "string",
                    valueType: "string",
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
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
                skill: [
                  {
                    comment: "string",
                    evaluatedLevel: "string",
                    skillCode: "string",
                    skillName: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                status: "initialized",
                taxExemptionCertificate: [
                  {
                    id: "string",
                    attachment: {
                      id: "string",
                      href: "string",
                      attachmentType: "string",
                      content: "string",
                      description: "string",
                      mimeType: "string",
                      name: "string",
                      url: "string",
                      size: {
                        amount: 1,
                        units: "string"
                      },
                      validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                      },
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    taxDefinition: [
                      {
                        id: "string",
                        name: "string",
                        taxType: "string",
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
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
        ]
    },
    create_individual: function(request)
    {
        console.log("party_management_controller.create_individual")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_individual'
            },
            href: faker.internet.url(),
            aristocraticTitle: "string",
            birthDate: new Date(),
            countryOfBirth: "string",
            deathDate: new Date(),
            familyName: "string",
            familyNamePrefix: "string",
            formattedName: "string",
            fullName: "string",
            gender: "string",
            generation: "string",
            givenName: "string",
            legalName: "string",
            location: "string",
            maritalStatus: "string",
            middleName: "string",
            nationality: "string",
            placeOfBirth: "string",
            preferredGivenName: "string",
            title: "string",
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
            creditRating: [
              {
                creditAgencyName: "string",
                creditAgencyType: "string",
                ratingReference: "string",
                ratingScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            disability: [
              {
                disabilityCode: "string",
                disabilityName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            externalReference: [
              {
                externalReferenceType: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            individualIdentification: [
              {
                identificationId: "string",
                identificationType: "string",
                issuingAuthority: "string",
                issuingDate: new Date(),
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
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
            languageAbility: [
              {
                isFavouriteLanguage: true,
                languageCode: "string",
                languageName: "string",
                listeningProficiency: "string",
                readingProficiency: "string",
                speakingProficiency: "string",
                writingProficiency: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            otherName: [
              {
                aristocraticTitle: "string",
                familyName: "string",
                familyNamePrefix: "string",
                formattedName: "string",
                fullName: "string",
                generatin: "string",
                givenName: "string",
                legalName: "string",
                middleName: "string",
                preferredGivenName: "string",
                title: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            skill: [
              {
                comment: "string",
                evaluatedLevel: "string",
                skillCode: "string",
                skillName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            status: "initialized",
            taxExemptionCertificate: [
              {
                id: "string",
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxDefinition: [
                  {
                    id: "string",
                    name: "string",
                    taxType: "string",
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
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    show_individual: function(request)
    {
        console.log("party_management_controller.show_individual")
        return {
            id: require.params.individual_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'show_individual'
            },
            href: faker.internet.url(),
            aristocraticTitle: "string",
            birthDate: new Date(),
            countryOfBirth: "string",
            deathDate: new Date(),
            familyName: "string",
            familyNamePrefix: "string",
            formattedName: "string",
            fullName: "string",
            gender: "string",
            generation: "string",
            givenName: "string",
            legalName: "string",
            location: "string",
            maritalStatus: "string",
            middleName: "string",
            nationality: "string",
            placeOfBirth: "string",
            preferredGivenName: "string",
            title: "string",
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
            creditRating: [
              {
                creditAgencyName: "string",
                creditAgencyType: "string",
                ratingReference: "string",
                ratingScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            disability: [
              {
                disabilityCode: "string",
                disabilityName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            externalReference: [
              {
                externalReferenceType: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            individualIdentification: [
              {
                identificationId: "string",
                identificationType: "string",
                issuingAuthority: "string",
                issuingDate: new Date(),
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
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
            languageAbility: [
              {
                isFavouriteLanguage: true,
                languageCode: "string",
                languageName: "string",
                listeningProficiency: "string",
                readingProficiency: "string",
                speakingProficiency: "string",
                writingProficiency: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            otherName: [
              {
                aristocraticTitle: "string",
                familyName: "string",
                familyNamePrefix: "string",
                formattedName: "string",
                fullName: "string",
                generatin: "string",
                givenName: "string",
                legalName: "string",
                middleName: "string",
                preferredGivenName: "string",
                title: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            skill: [
              {
                comment: "string",
                evaluatedLevel: "string",
                skillCode: "string",
                skillName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            status: "initialized",
            taxExemptionCertificate: [
              {
                id: "string",
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxDefinition: [
                  {
                    id: "string",
                    name: "string",
                    taxType: "string",
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
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    // put_update_individual: function(request)
    // {
    //     console.log("party_management_controller.put_update_individual")
    //     return {
    //         id: request.params.individual_id,
    //         routeDetails: {
    //             controller: 'Party Management',
    //             action: 'put_update_individual'
    //         },
    //         href: faker.internet.url(),
    //         gender: "string",
    //         placeOfBirth: "string",
    //         countryOfBirth: "string",
    //         nationality: "string",
    //         maritalStatus: "string",
    //         birthDate: "2021-04-12",
    //         title: "string",
    //         givenName: "string",
    //         familyName: "string",
    //         middleName: "string",
    //         fullName: "string",
    //         formattedName: "string",
    //         location: "string",
    //         status: "string",
    //         disability: [
    //             {
    //                 disability: "string"
    //             }
    //         ],
    //         characteristic: [
    //             {
    //                 name: "string",
    //                 value: "string"
    //             }
    //         ],
    //         otherName: [
    //             {
    //                 title: "string",
    //                 givenName: "string",
    //                 familyName: "string",
    //                 middleName: "string",
    //                 fullName: "string",
    //                 formattedName: "string",
    //                 validFor: {
    //                     startDateTime: new Date(),
    //                     endDateTime: new Date()    
    //                 },
    //             }
    //         ],
    //         individualIdentification: [
    //             {
    //                 type: "string",
    //                 identificationId: "string",
    //                 issuingAuthority: "string",
    //                 issuingDate: new Date() 
    //             }
    //         ],
    //         externalReference: [
    //             {
    //                 href: "string",
    //                 type: "string"
    //             }
    //         ],
    //         relatedParty: [
    //             {
    //                 id: "string",
    //                 href: "string",
    //                 role: "string",
    //                 name: "string",
    //                 validFor: {
    //                     startDateTime: new Date(),
    //                     endDateTime: new Date()    
    //                 }
    //             }
    //         ],
    //         contactMedium: [
    //             {
    //                 type: "string",
    //                 preferred: true,
    //                 validFor: {
    //                     startDateTime: new Date(),
    //                     endDateTime: new Date()    
    //                 },
    //                 medium: {
    //                     city: "string",
    //                     country: "string",
    //                     postcode: "string",
    //                     stateOrProvince: "string",
    //                     streetOne: "string",
    //                     streetTwo: "string",
    //                     emailAddress: "string",
    //                     type: "string",
    //                     number: "string"
    //                 }
    //             }
    //         ]
    //     }
    // },
    patch_update_individual: function(request)
    {
        console.log("party_management_controller.patch_update_individual")
        return {
            id: require.params.individual_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'patch_update_individual'
            },
            href: faker.internet.url(),
            aristocraticTitle: "string",
            birthDate: new Date(),
            countryOfBirth: "string",
            deathDate: new Date(),
            familyName: "string",
            familyNamePrefix: "string",
            formattedName: "string",
            fullName: "string",
            gender: "string",
            generation: "string",
            givenName: "string",
            legalName: "string",
            location: "string",
            maritalStatus: "string",
            middleName: "string",
            nationality: "string",
            placeOfBirth: "string",
            preferredGivenName: "string",
            title: "string",
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
            creditRating: [
              {
                creditAgencyName: "string",
                creditAgencyType: "string",
                ratingReference: "string",
                ratingScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            disability: [
              {
                disabilityCode: "string",
                disabilityName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            externalReference: [
              {
                externalReferenceType: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            individualIdentification: [
              {
                identificationId: "string",
                identificationType: "string",
                issuingAuthority: "string",
                issuingDate: new Date(),
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
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
            languageAbility: [
              {
                isFavouriteLanguage: true,
                languageCode: "string",
                languageName: "string",
                listeningProficiency: "string",
                readingProficiency: "string",
                speakingProficiency: "string",
                writingProficiency: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            otherName: [
              {
                aristocraticTitle: "string",
                familyName: "string",
                familyNamePrefix: "string",
                formattedName: "string",
                fullName: "string",
                generatin: "string",
                givenName: "string",
                legalName: "string",
                middleName: "string",
                preferredGivenName: "string",
                title: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            skill: [
              {
                comment: "string",
                evaluatedLevel: "string",
                skillCode: "string",
                skillName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            status: "initialized",
            taxExemptionCertificate: [
              {
                id: "string",
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxDefinition: [
                  {
                    id: "string",
                    name: "string",
                    taxType: "string",
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
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            code: 204
        }
    },

    index_organization: function(request)
    {
        console.log("party_management_controller.index_organization")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Party Management',
                    action: 'index_organization'
                },
                href: faker.internet.url(),
                isHeadOffice: true,
                isLegalEntity: true,
                name: "string",
                nameType: "string",
                organizationType: "string",
                tradingName: "string",
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
                creditRating: [
                  {
                    creditAgencyName: "string",
                    creditAgencyType: "string",
                    ratingReference: "string",
                    ratingScore: 0,
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                existsDuring: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                externalReference: [
                  {
                    externalReferenceType: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                organizationChildRelationship: [
                  {
                    relationshipType: "string",
                    organization: {
                      id: "string",
                      href: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                organizationIdentification: [
                  {
                    identificationId: "string",
                    identificationType: "string",
                    issuingAuthority: "string",
                    issuingDate: new Date(),
                    attachment: {
                      id: "string",
                      href: "string",
                      attachmentType: "string",
                      content: "string",
                      description: "string",
                      mimeType: "string",
                      name: "string",
                      url: "string",
                      size: {
                        amount: 1,
                        units: "string"
                      },
                      validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                      },
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
                organizationParentRelationship: {
                  relationshipType: "string",
                  organization: {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                otherName: [
                  {
                    name: "string",
                    nameType: "string",
                    tradingName: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                partyCharacteristic: [
                  {
                    name: "string",
                    valueType: "string",
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
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
                status: "initialized",
                taxExemptionCertificate: [
                  {
                    id: "string",
                    attachment: {
                      id: "string",
                      href: "string",
                      attachmentType: "string",
                      content: "string",
                      description: "string",
                      mimeType: "string",
                      name: "string",
                      url: "string",
                      size: {
                        amount: 1,
                        units: "string"
                      },
                      validFor: {
                        endDateTime: new Date(),
                        startDateTime: new Date()
                      },
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    taxDefinition: [
                      {
                        id: "string",
                        name: "string",
                        taxType: "string",
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
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_organization: function(request)
    {
        console.log("party_management_controller.create_organization")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_organization'
            },
            href: faker.internet.url(),
            isHeadOffice: true,
            isLegalEntity: true,
            name: "string",
            nameType: "string",
            organizationType: "string",
            tradingName: "string",
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
            creditRating: [
              {
                creditAgencyName: "string",
                creditAgencyType: "string",
                ratingReference: "string",
                ratingScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            existsDuring: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            externalReference: [
              {
                externalReferenceType: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            organizationChildRelationship: [
              {
                relationshipType: "string",
                organization: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            organizationIdentification: [
              {
                identificationId: "string",
                identificationType: "string",
                issuingAuthority: "string",
                issuingDate: new Date(),
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
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
            organizationParentRelationship: {
              relationshipType: "string",
              organization: {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            otherName: [
              {
                name: "string",
                nameType: "string",
                tradingName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            status: "initialized",
            taxExemptionCertificate: [
              {
                id: "string",
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxDefinition: [
                  {
                    id: "string",
                    name: "string",
                    taxType: "string",
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
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_organization: function(request)
    {
        console.log("party_management_controller.show_organization")
        return {
            id: require.params.organization_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'show_organization'
            },
            href: faker.internet.url(),
            isHeadOffice: true,
            isLegalEntity: true,
            name: "string",
            nameType: "string",
            organizationType: "string",
            tradingName: "string",
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
            creditRating: [
              {
                creditAgencyName: "string",
                creditAgencyType: "string",
                ratingReference: "string",
                ratingScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            existsDuring: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            externalReference: [
              {
                externalReferenceType: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            organizationChildRelationship: [
              {
                relationshipType: "string",
                organization: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            organizationIdentification: [
              {
                identificationId: "string",
                identificationType: "string",
                issuingAuthority: "string",
                issuingDate: new Date(),
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
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
            organizationParentRelationship: {
              relationshipType: "string",
              organization: {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            otherName: [
              {
                name: "string",
                nameType: "string",
                tradingName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            status: "initialized",
            taxExemptionCertificate: [
              {
                id: "string",
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxDefinition: [
                  {
                    id: "string",
                    name: "string",
                    taxType: "string",
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
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    // put_update_organization: function(request)
    // {
    //     console.log("party_management_controller.put_update_organization")
    //     return {
    //         id: request.params.organization_id,
    //         routeDetails: {
    //             controller: 'Party Management',
    //             action: 'put_update_organization'
    //         },
    //         href: faker.internet.url(),
    //         isLegalEntity: true,
    //         type: "string",
    //         existsDuring: {
    //             startDateTime: new Date(),
    //             endDateTime: new Date()    
    //         },
    //         tradingName: "string",
    //         nameType: "string",
    //         status: "string",
    //         otherName: {
    //             nameType: "string",
    //             tradingName: "string",
    //             validFor: {
    //                 startDateTime: new Date(),
    //                 endDateTime: new Date()    
    //             }
    //         },
    //         characteristic: [
    //             {
    //                 name: "string",
    //                 value: "string"
    //             }
    //         ],
    //         organizationIdentification: [
    //             {
    //                 type: "string",
    //                 identificationId: "string",
    //                 issuingAuthority: "string",
    //                 issuingDate: new Date(),  
    //                 validFor: {
    //                     startDateTime: new Date(),
    //                     endDateTime: new Date()    
    //                 }
    //             }
    //         ],
    //         externalReference: [
    //             {
    //                 href: "string",
    //                 type: "string"
    //             }
    //         ],
    //         relatedParty: [
    //             {
    //                 id: "string",
    //                 href: "string",
    //                 role: "string",
    //                 name: "string",
    //                 validFor: {
    //                     startDateTime: new Date(),
    //                     endDateTime: new Date()    
    //                 }
    //             }
    //         ],
    //         organizationParentRelationship: {
    //             id: "string",
    //             href: "string",
    //             relationshipType: "string",
    //             validFor: {
    //                 startDateTime: new Date(),
    //                 endDateTime: new Date()    
    //             }
    //         },
    //         organizationChildRelationship: [
    //             {
    //                 id: "string",
    //                 href: "string",
    //                 relationshipType: "string",
    //                 validFor: {
    //                     startDateTime: new Date(),
    //                     endDateTime: new Date()    
    //                 } 
    //             }
    //         ],
    //         contactMedium: [
    //             {
    //                 type: "string",
    //                 preferred: true,
    //                 validFor: {
    //                     startDateTime: new Date(),
    //                     endDateTime: new Date()    
    //                 },
    //                 medium: {
    //                     city: "string",
    //                     country: "string",
    //                     postcode: "string",
    //                     stateOrProvince: "string",
    //                     streetOne: "string",
    //                     streetTwo: "string",
    //                     emailAddress: "string",
    //                     type: "string",
    //                     number: "string"
    //                 }
    //             }
    //         ]  
    //     }
    // },
    patch_update_organization: function(request)
    {
        console.log("party_management_controller.patch_update_organization")
        return {
            id: require.params.organization_id,
            routeDetails: {
                controller: 'Party Management',
                action: 'patch_update_organization'
            },
            href: faker.internet.url(),
            isHeadOffice: true,
            isLegalEntity: true,
            name: "string",
            nameType: "string",
            organizationType: "string",
            tradingName: "string",
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
            creditRating: [
              {
                creditAgencyName: "string",
                creditAgencyType: "string",
                ratingReference: "string",
                ratingScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            existsDuring: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            externalReference: [
              {
                externalReferenceType: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            organizationChildRelationship: [
              {
                relationshipType: "string",
                organization: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            organizationIdentification: [
              {
                identificationId: "string",
                identificationType: "string",
                issuingAuthority: "string",
                issuingDate: new Date(),
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
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
            organizationParentRelationship: {
              relationshipType: "string",
              organization: {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            otherName: [
              {
                name: "string",
                nameType: "string",
                tradingName: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            partyCharacteristic: [
              {
                name: "string",
                valueType: "string",
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            status: "initialized",
            taxExemptionCertificate: [
              {
                id: "string",
                attachment: {
                  id: "string",
                  href: "string",
                  attachmentType: "string",
                  content: "string",
                  description: "string",
                  mimeType: "string",
                  name: "string",
                  url: "string",
                  size: {
                    amount: 1,
                    units: "string"
                  },
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxDefinition: [
                  {
                    id: "string",
                    name: "string",
                    taxType: "string",
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
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            code: 204
        }
    },

    create_hub: function(request)
    {
        console.log("party_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
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