//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {

    index: function(request)
    {
        console.log("payment_method_controller.index")
        
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Payment Methods',
                    action: 'index'
                },
                href: faker.internet.url(),
                name: "string",
                description: "string",
                validFor: {
                  startDateTime: new Date(),
                  endDateTime: new Date()
                },
                account: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    description: "string",
                    "@referredType": "string"
                  }
                ],
                preferred: true,
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    "name": "string",
                    "role": "string"
                  }
                ],
                "@type": "cash",
                authorizationCode: "string",
                status: "string",
                statusDate: new Date(),
                details: {}
            }
        ]
    },
    create: function(request)
    {
        console.log("payment_method_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Payment Methods',
                action: 'create'
            },
            href: faker.internet.url(),
            name: "string",
            description: "string",
            validFor: {
              startDateTime: new Date(),
              endDateTime: new Date()
            },
            preferred: false,
            relatedParty: [
                {
                id: "55554444",
                href: "{customerManagementAPI}/customer/55554444",
                "@referredType": "customer",
                name: "John Doe ",
                role: "owner"
                }
            ],
            "@type": "bankAccountTransfer",
            authorizationCode: "1234567890",
            status: "Active",
            statusDate: new Date(),
            details: {
                accountNumber: "DE44 5001 0517 5407 3249 31",
                accountNumberType: "IBAN",
                BIC: "DEUTDEFF",
                owner: "John Doe",
                bank: "Deutsche Bank"
            }
        }
    },
    show: function(request)
    {
        console.log("payment_method_controller.show")
        return {
            id: request.params.payment_method_id,
            routeDetails: {
                controller: 'Payment Methods',
                action: 'show'
            },
            href: faker.internet.url(),
            name: "Main credit card",
            description: "My mastercard gold",
            validFor: {
              startDateTime: new Date(),
              endDateTime: new Date()
            },
            account: [
              {
                id: "321654",
                href: "{accountsManagementAPI}/account/321654",
                name: "John Doe’s account"
              },
              {
                id: "987654",
                href: "{accountsManagementAPI}/account/987654",
                name: "The account of John Doe’s daughter"
              }
            ],
            preferred: true,
            relatedParty: [
              {
                id: "55554444",
                href: "{customerManagementAPI}/customers/55554444",
                type: "customer",
                name: "John Doe",
                role: "owner"
              },
              {
                id: "66665555",
                href: "{customerManagementAPI}/customers/66665555",
                type: "customer",
                name: "John Doe’s daughter",
                role: "user"
              }
            ],
            "@type": "bankCard",
            authorizationCode: "1234567890",
            status: "Active",
            statusDate: new Date(),
            details: {
              brand: "MasterCard",
              type: "Debit",
              number: "00000000000000000",
              expirationDate: new Date(),
              cvv: "000",
              lastFourDigits: "0000",
              nameOnCard: "John Doe",
              bank: "Fictitious Bank.inc"
            }
          }
    },
    destroy: function(request)
    {
        console.log("payment_method_controller.destroy")
        return {
            id: request.params.payment_method_id,
            routeDetails: {
                controller: 'Payment Methods',
                action: 'destroy'
            },
            code: 204
        }
    },

    show_accounts: function(request)
    {
        console.log("payment_method_controller.show_accounts")
        return {
            id: request.params.account_id ,
            routeDetails: {
                controller: 'Payment Methods',
                action: 'show_accounts'
            },
            href: faker.internet.url(),
            name: "Main credit card",
            description: "My mastercard gold",
            validFor: {
              startDateTime: new Date(),
              endDateTime: new Date()
            },
            account: [
              {
                id: "321654",
                href: "{accountsManagementAPI}/account/321654",
                name: "John Doe’s account"
              },
              {
                id: "987654",
                href: "{accountsManagementAPI}/account/987654",
                name: "The account of John Doe’s daughter"
              }
            ],
            preferred: true,
            relatedParty: [
              {
                id: "55554444",
                href: "{customerManagementAPI}/customers/55554444",
                type: "customer",
                name: "John Doe",
                role: "owner"
              },
              {
                id: "66665555",
                href: "{customerManagementAPI}/customers/66665555",
                type: "customer",
                name: "John Doe’s daughter",
                role: "user"
              }
            ],
            "@type": "bankCard",
            authorizationCode: "1234567890",
            status: "Active",
            statusDate: new Date(),
            details: {
              brand: "MasterCard",
              type: "Debit",
              number: "00000000000000000",
              expirationDate: new Date(),
              cvv: "000",
              lastFourDigits: "0000",
              nameOnCard: "John Doe",
              bank: "Fictitious Bank.inc"
            }
        }
    }
}