//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_payment: function(request)
    {
        console.log("payment_management_controller.index_payment")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Payment Management',
                    action: 'index_payment'
                },
                href: faker.internet.url(),
                authorizationCode: "string",
                correlatorId: "string",
                description: "string",
                name: "string",
                paymentDate: new Date(),
                status: "string",
                statusDate: new Date(),
                account: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                amount: {
                  unit: "string",
                  value: 0
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                payer: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                paymentItem: [
                  {
                    id: "string",
                    amount: {
                      unit: "string",
                      value: 0
                    },
                    item: {
                      id: "string",
                      href: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    taxAmount: {
                      unit: "string",
                      value: 0
                    },
                    totalAmount: {
                      unit: "string",
                      value: 0
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                paymentMethod: {
                  id: "string",
                  href: "string",
                  description: "string",
                  isPreferred: true,
                  name: "string",
                  status: "string",
                  statusDate: new Date(),
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
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxAmount: {
                  unit: "string",
                  value: 0
                },
                totalAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]  
    },
    create_payment: function(request)
    {
        console.log('payment_management_controller.create_payment')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Payment Management',
                action: 'create_payment'
            },
            href: faker.internet.url(),
            authorizationCode: "string",
            correlatorId: "string",
            description: "string",
            name: "string",
            paymentDate: new Date(),
            status: "string",
            statusDate: new Date(),
            account: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            amount: {
              unit: "string",
              value: 0
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            payer: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentItem: [
              {
                id: "string",
                amount: {
                  unit: "string",
                  value: 0
                },
                item: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxAmount: {
                  unit: "string",
                  value: 0
                },
                totalAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            paymentMethod: {
              id: "string",
              href: "string",
              description: "string",
              isPreferred: true,
              name: "string",
              status: "string",
              statusDate: new Date(),
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
              validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            taxAmount: {
              unit: "string",
              value: 0
            },
            totalAmount: {
              unit: "string",
              value: 0
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_payment: function(request)
    {
        console.log('payment_management_controller.show_payment')
        return {
            id: request.params.payment_id,
            routeDetails: {
                controller: 'Payment Management',
                action: 'show_payment'
            },
            href: faker.internet.url(),
            authorizationCode: "string",
            correlatorId: "string",
            description: "string",
            name: "string",
            paymentDate: new Date(),
            status: "string",
            statusDate: new Date(),
            account: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            amount: {
              unit: "string",
              value: 0
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            payer: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentItem: [
              {
                id: "string",
                amount: {
                  unit: "string",
                  value: 0
                },
                item: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxAmount: {
                  unit: "string",
                  value: 0
                },
                totalAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            paymentMethod: {
              id: "string",
              href: "string",
              description: "string",
              isPreferred: true,
              name: "string",
              status: "string",
              statusDate: new Date(),
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
              validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            taxAmount: {
              unit: "string",
              value: 0
            },
            totalAmount: {
              unit: "string",
              value: 0
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },

    index_refund: function(request)
    {
        console.log("payment_management_controller.index_refund")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Payment Management',
                    action: 'index_refund'
                },
                href: faker.internet.url(),
                authorizationCode: "string",
                correlatorId: "string",
                description: "string",
                name: "string",
                refundDate: new Date(),
                status: "string",
                statusDate: new Date(),
                account: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                amount: {
                  unit: "string",
                  value: 0
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
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
                paymentMethod: {
                  id: "string",
                  href: "string",
                  description: "string",
                  isPreferred: true,
                  name: "string",
                  status: "string",
                  statusDate: new Date(),
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
                  validFor: {
                    endDateTime: new Date(),
                    startDateTime: new Date()
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxAmount: {
                  unit: "string",
                  value: 0
                },
                totalAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]  
    },
    create_refund: function(request)
    {
        console.log('payment_management_controller.create_refund')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Payment Management',
                action: 'create_refund'
            },
            href: faker.internet.url(),
            authorizationCode: "string",
            correlatorId: "string",
            description: "string",
            name: "string",
            refundDate: new Date(),
            status: "string",
            statusDate: new Date(),
            account: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            amount: {
              unit: "string",
              value: 0
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
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
            paymentMethod: {
              id: "string",
              href: "string",
              description: "string",
              isPreferred: true,
              name: "string",
              status: "string",
              statusDate: new Date(),
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
              validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            taxAmount: {
              unit: "string",
              value: 0
            },
            totalAmount: {
              unit: "string",
              value: 0
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_refund: function(request)
    {
        console.log('payment_management_controller.show_refund')
        return {
            id: request.params.refund_id,
            routeDetails: {
                controller: 'Payment Management',
                action: 'show_refund'
            },
            href: faker.internet.url(),
            authorizationCode: "string",
            correlatorId: "string",
            description: "string",
            name: "string",
            refundDate: new Date(),
            status: "string",
            statusDate: new Date(),
            account: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            amount: {
              unit: "string",
              value: 0
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
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
            paymentMethod: {
              id: "string",
              href: "string",
              description: "string",
              isPreferred: true,
              name: "string",
              status: "string",
              statusDate: new Date(),
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
              validFor: {
                endDateTime: new Date(),
                startDateTime: new Date()
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            taxAmount: {
              unit: "string",
              value: 0
            },
            totalAmount: {
              unit: "string",
              value: 0
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },


    create_listner_payment_create_event: function(request)
    {
        console.log("party_management_controller.create_listner_payment_create_event")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_listner_payment_create_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_payment_attribute_value_change_event: function(request)
    {
        console.log("party_management_controller.create_listner_payment_attribute_value_change_event")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_listner_payment_attribute_value_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_payment_state_change_event: function(request)
    {
        console.log("party_management_controller.create_listner_payment_state_change_event")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_listner_payment_state_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_payment_delete_event: function(request)
    {
        console.log("party_management_controller.create_listner_payment_delete_event")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_listner_payment_delete_event'
            },
            "callback": "string",
            "query": "string"
          }
    },

    create_listner_refund_create_event: function(request)
    {
        console.log("party_management_controller.create_listner_refund_create_event")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_listner_refund_create_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_refund_attribute_value_change_event: function(request)
    {
        console.log("party_management_controller.create_listner_refund_attribute_value_change_event")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_listner_refund_attribute_value_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_refund_state_change_event: function(request)
    {
        console.log("party_management_controller.create_listner_refund_state_change_event")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_listner_refund_state_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listner_refund_delete_event: function(request)
    {
        console.log("party_management_controller.create_listner_refund_delete_event")
        return  {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Party Management',
                action: 'create_listner_refund_delete_event'
            },
            "callback": "string",
            "query": "string"
          }
    },



    create_hub: function(request)
    {
        console.log("payment_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'payment_management_controller',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("payment_management_controller.destroy_hub")
        return {  
            id: request.params.hub_id,
            routeDetails: {
                controller: 'payment_management_controller',
                action: 'destroy_hub'
            },
            code: 204
        }
    }

}