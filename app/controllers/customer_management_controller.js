//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
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
                href: faker.internet.url(),
                name: "string",
                status: "string",
                statusReason: "string",
                account: [
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
                agreement: [
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
                creditProfile: [
                  {
                    creditProfileDate: new Date(),
                    creditRiskRating: 0,
                    creditScore: 0,
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                engagedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                paymentMethod: [
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
    create: function(request)
    {
        console.log("customer_management_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Customer Management',
                action: 'create'
            },
            href: faker.internet.url(),
            name: "string",
            status: "string",
            statusReason: "string",
            account: [
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
            agreement: [
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
            creditProfile: [
              {
                creditProfileDate: new Date(),
                creditRiskRating: 0,
                creditScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            engagedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentMethod: [
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
    show: function(request)
    {
        console.log("customer_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'show'
            },
            href: faker.internet.url(),
            name: "string",
            status: "string",
            statusReason: "string",
            account: [
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
            agreement: [
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
            creditProfile: [
              {
                creditProfileDate: new Date(),
                creditRiskRating: 0,
                creditScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            engagedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentMethod: [
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
    update: function(request)
    {
        console.log("customer_management_controller.update")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'update'
            },
            href: faker.internet.url(),
            name: "string",
            status: "string",
            statusReason: "string",
            account: [
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
            agreement: [
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
            creditProfile: [
              {
                creditProfileDate: new Date(),
                creditRiskRating: 0,
                creditScore: 0,
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            engagedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentMethod: [
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
        }
    },
    
    create_listner_create_event: function(request)
    {
        console.log("customer_management_controller.create_listner_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Customer Management',
                action: 'create_listner_create_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_attribute_value_change_event: function(request)
    {
        console.log("customer_management_controller.create_listner_attribute_value_change_event")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'create_listner_attribute_value_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_state_change_event: function(request)
    {
        console.log("customer_management_controller.create_listner_state_change_event")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'create_listner_state_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_delete_event: function(request)
    {
        console.log("customer_management_controller.create_listner_delete_event")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'create_listner_delete_event'
            },
            "callback": "string",
            "query": "string"
          }
    },

    create_hub: function(request)
    {
        console.log("communication_management_controller.create_hub")
        
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Customer Management',
                action: 'create_hub'
            },
            callback: "string",
            query: "string"
        }
    },
    destroy_hub: function(request)
    {
        console.log("communication_management_controller.destroy_hub")

        return {
            id: request.params.hub_id,
            routeDetails: {
                controller: 'Customer Management',
                action: 'destroy_hub'
            },
            code: 204
        }
    },
}