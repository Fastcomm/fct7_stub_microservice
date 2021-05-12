//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {

    index_on_demand: function(request)
    {
        console.log("bill_management_controller.index_on_demand")
        return [
            {
                id: faker.params.uuid(),
                routeDetails: {
                    controller: 'Bill Management',
                    action: 'index_on_demand'
                },
                href: faker.internet.url(),
                description: "string",
                lastUpdate: "string",
                name: "string",
                billingAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                customerBill: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                state: "inProgress",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
        ]
    },
    create_on_demand: function(request)
    {
        console.log("bill_management_controller.create_on_demand")
        return {
                id: faker.params.uuid(),
                routeDetails: {
                    controller: 'Bill Management',
                    action: 'create_on_demand'
                },
                href: faker.internet.url(),
                description: "string",
                lastUpdate: "string",
                name: "string",
                billingAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                customerBill: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                state: "inProgress",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
    },
    show_on_demand: function(request)
    {
        console.log("bill_management_controller.show_on_demand")
        return {
            id: faker.params.uuid(),
            routeDetails: {
                controller: 'Bill Management',
                action: 'show_on_demand'
            },
            href: faker.internet.url(),
            description: "string",
            lastUpdate: "string",
            name: "string",
            billingAccount: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            customerBill: {
              id: "string",
              href: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            relatedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            state: "inProgress",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },


    index: function(request)
    {
        console.log("bill_management_controller.index")
        return [
            {
                id: faker.params.uuid(),
                routeDetails: {
                    controller: 'Bill Management',
                    action: 'index'
                },
                href: faker.internet.url(),
                billDate: new Date(),
                billNo: "string",
                category: "string",
                lastUpdate: new Date(),
                nextBillDate: new Date(),
                paymentDueDate: new Date(),
                runType: "string",
                amountDue: {
                  unit: "string",
                  value: 0
                },
                appliedPayment: [
                  {
                    appliedAmount: {
                      unit: "string",
                      value: 0
                    },
                    payment: {
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
                billDocument: [
                  {
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
                  }
                ],
                billingAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                billingPeriod: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                financialAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
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
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                paymentMethod: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
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
                remainingAmount: {
                  unit: "string",
                  value: 0
                },
                state: "new",
                taxExcludedAmount: {
                  unit: "string",
                  value: 0
                },
                taxIncludedAmount: {
                  unit: "string",
                  value: 0
                },
                taxItem: [
                  {
                    taxCategory: "string",
                    taxRate: 0,
                    taxAmount: {
                      unit: "string",
                      value: 0
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
    show: function(request)
    {
        console.log("bill_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'show'
            },
            href: faker.internet.url(),
            billDate: new Date(),
            billNo: "string",
            category: "string",
            lastUpdate: new Date(),
            nextBillDate: new Date(),
            paymentDueDate: new Date(),
            runType: "string",
            amountDue: {
              unit: "string",
              value: 0
            },
            appliedPayment: [
              {
                appliedAmount: {
                  unit: "string",
                  value: 0
                },
                payment: {
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
            billDocument: [
              {
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
              }
            ],
            billingAccount: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            billingPeriod: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            financialAccount: {
              id: "string",
              href: "string",
              name: "string",
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
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentMethod: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
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
            remainingAmount: {
              unit: "string",
              value: 0
            },
            state: "new",
            taxExcludedAmount: {
              unit: "string",
              value: 0
            },
            taxIncludedAmount: {
              unit: "string",
              value: 0
            },
            taxItem: [
              {
                taxCategory: "string",
                taxRate: 0,
                taxAmount: {
                  unit: "string",
                  value: 0
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
    update: function(request)
    {
        console.log("bill_management_controller.update")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'update'
            },
            href: faker.internet.url(),
            billDate: new Date(),
            billNo: "string",
            category: "string",
            lastUpdate: new Date(),
            nextBillDate: new Date(),
            paymentDueDate: new Date(),
            runType: "string",
            amountDue: {
              unit: "string",
              value: 0
            },
            appliedPayment: [
              {
                appliedAmount: {
                  unit: "string",
                  value: 0
                },
                payment: {
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
            billDocument: [
              {
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
              }
            ],
            billingAccount: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            billingPeriod: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            financialAccount: {
              id: "string",
              href: "string",
              name: "string",
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
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentMethod: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
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
            remainingAmount: {
              unit: "string",
              value: 0
            },
            state: "new",
            taxExcludedAmount: {
              unit: "string",
              value: 0
            },
            taxIncludedAmount: {
              unit: "string",
              value: 0
            },
            taxItem: [
              {
                taxCategory: "string",
                taxRate: 0,
                taxAmount: {
                  unit: "string",
                  value: 0
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

    index_rate: function(request)
    {
        console.log("bill_management_controller.index_rate")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Bill Management',
                    action: 'index_rate'
                },
                href: faker.internet.url(),
                date: new Date(),
                description: "string",
                isBilled: true,
                name: "string",
                type: "string",
                appliedTax: [
                  {
                    taxCategory: "string",
                    taxRate: 0,
                    taxAmount: {
                      unit: "string",
                      value: 0
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                bill: {
                  id: "string",
                  href: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                billingAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
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
                periodCoverage: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                product: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxExcludedAmount: {
                  unit: "string",
                  value: 0
                },
                taxIncludedAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
        ]
    },
    show_rate: function(request)
    {
        console.log("bill_management_controller.show_rate")
        return {
            id: require.datatype.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'show_rate'
            },
            href: faker.internet.url(),
            date: new Date(),
            description: "string",
            isBilled: true,
            name: "string",
            type: "string",
            appliedTax: [
              {
                taxCategory: "string",
                taxRate: 0,
                taxAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            bill: {
              id: "string",
              href: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            billingAccount: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
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
            periodCoverage: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            product: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            taxExcludedAmount: {
              unit: "string",
              value: 0
            },
            taxIncludedAmount: {
              unit: "string",
              value: 0
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    
    create_hub: function(request)
    {
        console.log("bill_management_controller.create_hub")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Bill Management',
                action: 'create_hub'
            },
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    destroy_hub: function(request)
    {
        console.log("bill_management_controller.destroy_hub")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Bill Management',
                action: 'destroy_hub'
            },
            code: 204,
            status: "bill hub destroyed successfully"
        }
    }
}