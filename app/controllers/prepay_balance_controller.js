//  === Requirements ===
const faker = require('faker')
//  === Controller ===
module.exports = {

    index_buckets: function(request)
    {
        console.log("prepay_balance_controller.index_buckets")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_buckets'
                },
                href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                isShared: true,
                name: "string",
                remainingValueName: "string",
                requestedDate: new Date(),
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                remainingValue: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                reservedValue: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                status: "active",
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    show_buckets: function(request)
    {
        console.log("prepay_balance_controller.show_buckets")
        return {
            id: request.params.bucket_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'show_buckets'
            },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            isShared: true,
            name: "string",
            remainingValueName: "string",
            requestedDate: new Date(),
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            remainingValue: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            reservedValue: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            status: "active",
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },

    index_topups: function(request)
    {
        console.log("prepay_balance_controller.index_topups")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_topups'
                },
                href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                isAutoTopup: true,
                numberOfPeriods: 0,
                reason: "string",
                requestedDate: new Date(),
                voucher: "string",
                amount: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                balanceTopup: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                bucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                paymentMethod: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                recurringPeriod: "weekly",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                status: "created",
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_topups: function(request)
    {
        console.log("prepay_balance_controller.create_topups")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_topups'
            },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            isAutoTopup: true,
            numberOfPeriods: 0,
            reason: "string",
            requestedDate: new Date(),
            voucher: "string",
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            balanceTopup: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentMethod: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            recurringPeriod: "weekly",
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_topups: function(request)
    {
        console.log("prepay_balance_controller.update_topups")
        return {
            id: request.params.topup_id,
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'update_topups'
                },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            isAutoTopup: true,
            numberOfPeriods: 0,
            reason: "string",
            requestedDate: new Date(),
            voucher: "string",
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            balanceTopup: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentMethod: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            recurringPeriod: "weekly",
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_topups: function(request)
    {
        console.log("prepay_balance_controller.show_topups")

        return {
            id: request.params.topup_id,
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'show_topups'
                },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            isAutoTopup: true,
            numberOfPeriods: 0,
            reason: "string",
            requestedDate: new Date(),
            voucher: "string",
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            balanceTopup: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            paymentMethod: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            recurringPeriod: "weekly",
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_topups: function(request)
    {
        console.log("prepay_balance_controller.destroy_topups")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'prepay_balance_controller',
                action: 'destroy_topups'
            },
            code: 204,
        }
    },

    
    index_adjustments: function(request)
    {
        console.log("prepay_balance_controller.index_adjustments")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_adjustments'
                },
                href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                reason: "string",
                requestedDate: new Date(),
                adjustType: "recurring",
                amount: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                bucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                status: "created",
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_adjustments: function(request)
    {
        console.log("prepay_balance_controller.create_adjustments")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_adjustments'
            },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            reason: "string",
            requestedDate: new Date(),
            adjustType: "recurring",
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    update_adjustments: function(request)
    {
        console.log("prepay_balance_controller.update_adjustments")
        return {
            id: request.params.adjustments_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'update_adjustments'
            },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            reason: "string",
            requestedDate: new Date(),
            adjustType: "recurring",
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    show_adjustments: function(request)
    {
        console.log("prepay_balance_controller.show_adjustments")
        return {
            id: request.params.adjustments_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'show_adjustments'
            },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            reason: "string",
            requestedDate: new Date(),
            adjustType: "recurring",
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          }
    },
    destroy_adjustments: function(request)
    {
        console.log("prepay_balance_controller.destroy_adjustments")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'prepay_balance_controller',
                action: 'destroy_adjustments'
            },
            code: 204,
        }
    },

    index_transfers: function(request)
    {
        console.log("prepay_balance_controller.index_transfers")
        
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_transfers'
                },
                href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                reason: "string",
                requestedDate: new Date(),
                amount: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                bucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                costOwner: "originator",
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                receiver: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                receiverBucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                receiverBucketUsageType: "monetary",
                receiverLogicalResource: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                receiverProduct: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                status: "created",
                transferCost: {
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_transfers: function(request)
    {
        console.log("prepay_balance_controller.create_transfers")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_transfers'
            },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            reason: "string",
            requestedDate: new Date(),
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            costOwner: "originator",
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            receiver: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverBucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverBucketUsageType: "monetary",
            receiverLogicalResource: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverProduct: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            transferCost: {
              unit: "string",
              value: 0,
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_transfers: function(request)
    {
        console.log("prepay_balance_controller.show_transfers")
        return {
            id: request.params.transfers_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'update_transfers'
            },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            reason: "string",
            requestedDate: new Date(),
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            costOwner: "originator",
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            receiver: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverBucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverBucketUsageType: "monetary",
            receiverLogicalResource: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverProduct: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            transferCost: {
              unit: "string",
              value: 0,
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_transfers: function(request)
    {
        console.log("prepay_balance_controller.show_transfers")
        return {
            id: request.params.transfers_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'show_transfers'
            },
            href: faker.internet.url(),
            confirmationDate: new Date(),
            description: "string",
            reason: "string",
            requestedDate: new Date(),
            amount: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            bucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            channel: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            costOwner: "originator",
            logicalResource: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            receiver: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverBucket: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverBucketUsageType: "monetary",
            receiverLogicalResource: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            receiverProduct: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            requestor: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            status: "created",
            transferCost: {
              unit: "string",
              value: 0,
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            usageType: "monetary",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_transfers: function(request)
    {
        console.log("prepay_balance_controller.destroy_transfers")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'prepay_balance_controller',
                action: 'destroy_transfers'
            },
            code: 204,
        }
    },

    index_reserve: function(request)
    {
        console.log("prepay_balance_controller.index_reserve")
        
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_reserve'
                },
                href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                reason: "string",
                requestedDate: new Date(),
                amount: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                bucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                status: "created",
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_reserve: function(request)
    {
        console.log("prepay_balance_controller.create_reserve")
        return {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'create_reserve'
                },
                href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                reason: "string",
                requestedDate: new Date(),
                amount: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                bucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                status: "created",
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
    },
    update_reserve: function(request)
    {
        console.log("prepay_balance_controller.update_reserve")
        return {
            id: request.params.reserve_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'update_reserve'
            },
            href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                reason: "string",
                requestedDate: new Date(),
                amount: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                bucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                status: "created",
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
    },
    show_reserve: function(request)
    {
        console.log("prepay_balance_controller.show_reserve")
        return {
            id: request.params.reserve_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'show_reserve'
            },
            href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                reason: "string",
                requestedDate: new Date(),
                amount: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                bucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                status: "created",
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
    },
    destroy_reserve: function(request)
    {
        console.log("prepay_balance_controller.destroy_reserve")
        return {
            id: request.params.reserve_id,
            routeDetails: {
                controller: 'prepay_balance_controller',
                action: 'destroy_reserve'
            },
            code: 204,
        }
    },

   

    index_accumulated_balance: function(request)
    {
        console.log("prepay_balance_controller.index_accumulated_balance")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_accumulated_balance'
                },
                href: faker.internet.url(),
                description: "string",
                name: "string",
                bucket: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                logicalResource: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                totalBalance: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    show_accumulated_balance: function(request)
    {
        console.log("prepay_balance_controller.show_accumulated_balance")
        
        return {
            id: request.params.product_id,
                routeDetails: {
                   controller: 'Prepay Balance',
                    action: 'show_accumulated_balance'
                },
            href: faker.internet.url(),
            description: "string",
            name: "string",
            bucket: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            logicalResource: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "ResourceSpecification",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
              "@type": "LogicalResourceSpecification",
              "@referredType": "string"
            },
            partyAccount: {
              id: "string",
              href: "string",
              description: "string",
              name: "string",
              status: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            product: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "ResourceSpecification",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                "@type": "LogicalResourceSpecification",
                "@referredType": "string"
              }
            ],
            totalBalance: {
              amount: 1,
              units: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },

    index_action_history: function(request)
    {
        console.log("prepay_balance_controller.index_action_history")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Prepay Balance',
                    action: 'index_action_history'
                },
                href: faker.internet.url(),
                confirmationDate: new Date(),
                description: "string",
                isAutoTopup: true,
                numberOfPeriods: 0,
                reason: "string",
                requestedDate: new Date(),
                voucher: "string",
                adjustType: "recurring",
                amount: {
                  amount: 1,
                  units: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                balanceTopup: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                bucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                costOwner: "originator",
                logicalResource: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                partyAccount: {
                  id: "string",
                  href: "string",
                  description: "string",
                  name: "string",
                  status: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                paymentMethod: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                product: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                receiver: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                receiverBucket: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                receiverBucketUsageType: "monetary",
                receiverLogicalResource: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                receiverProduct: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                recurringPeriod: "weekly",
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "ResourceSpecification",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                    "@type": "LogicalResourceSpecification",
                    "@referredType": "string"
                  }
                ],
                requestor: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "ResourceSpecification",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
                  "@type": "LogicalResourceSpecification",
                  "@referredType": "string"
                },
                status: "created",
                transferCost: {
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                usageType: "monetary",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
        ]
    },
    show_action_history: function(request)
    {
        console.log("prepay_balance_controller.show_action_history")
        return {
            id: request.params.product_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'show_action_history'
            },
        confirmationDate: new Date(),
        description: "string",
        isAutoTopup: true,
        numberOfPeriods: 0,
        reason: "string",
        requestedDate: new Date(),
        voucher: "string",
        adjustType: "recurring",
        amount: {
          amount: 1,
          units: "string",
          "@baseType": "string",
          "@schemaLocation": "string",
          "@type": "string"
        },
        balanceTopup: {
          id: "string",
          href: "string",
          name: "string",
          role: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        bucket: {
          id: "string",
          href: "string",
          name: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        channel: {
          id: "string",
          href: "string",
          name: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        costOwner: "originator",
        logicalResource: [
          {
            id: "string",
            href: "string",
            name: "string",
            "@baseType": "ResourceSpecification",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
            "@type": "LogicalResourceSpecification",
            "@referredType": "string"
          }
        ],
        partyAccount: {
          id: "string",
          href: "string",
          description: "string",
          name: "string",
          status: "string",
          "@baseType": "string",
          "@schemaLocation": "string",
          "@type": "string",
          "@referredType": "string"
        },
        paymentMethod: {
          id: "string",
          href: "string",
          name: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        product: [
          {
            id: "string",
            href: "string",
            name: "string",
            "@baseType": "ResourceSpecification",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
            "@type": "LogicalResourceSpecification",
            "@referredType": "string"
          }
        ],
        receiver: {
          id: "string",
          href: "string",
          name: "string",
          role: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        receiverBucket: {
          id: "string",
          href: "string",
          name: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        receiverBucketUsageType: "monetary",
        receiverLogicalResource: {
          id: "string",
          href: "string",
          name: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        receiverProduct: {
          id: "string",
          href: "string",
          name: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        recurringPeriod: "weekly",
        relatedParty: [
          {
            id: "string",
            href: "string",
            name: "string",
            role: "string",
            "@baseType": "ResourceSpecification",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
            "@type": "LogicalResourceSpecification",
            "@referredType": "string"
          }
        ],
        requestor: {
          id: "string",
          href: "string",
          name: "string",
          role: "string",
          "@baseType": "ResourceSpecification",
          "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Resource/LogicalResourceSpecification.schema.json",
          "@type": "LogicalResourceSpecification",
          "@referredType": "string"
        },
        status: "created",
        transferCost: {
          unit: "string",
          value: 0,
          "@baseType": "string",
          "@schemaLocation": "string",
          "@type": "string"
        },
        usageType: "monetary",
        validFor: {
          endDateTime: new Date(),
          startDateTime: new Date(),
          "@baseType": "string",
          "@schemaLocation": "string",
          "@type": "string"
        },
        "@baseType": "string",
        "@schemaLocation": "string",
        "@type": "string"
      }
    },


    create_listener_topup_create_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_topup_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_topup_create_event'
            },
            code: 204
        }
    },
    create_listener_topup_cancel_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_topup_cancel_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_topup_cancel_event'
            },
            code: 204
        }
    },
    create_listener_topup_failure_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_topup_failure_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_topup_failure_event'
            },
            code: 204
        }
    },

    create_listener_adjust_create_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_adjust_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_adjust_create_event'
            },
            code: 204
        }
    },
    create_listener_adjust_cancel_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_adjust_cancel_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_adjust_cancel_event'
            },
            code: 204
        }
    },
    create_listener_adjust_failure_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_adjust_failure_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_adjust_failure_event'
            },
            code: 204
        }
    },

    create_listener_transfer_create_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_transfer_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_transfer_create_event'
            },
            code: 204
        }
    },
    create_listener_transfer_cancel_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_transfer_cancel_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_transfer_cancel_event'
            },
            code: 204
        }
    },
    create_listener_transfer_failure_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_transfer_failure_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_transfer_failure_event'
            },
            code: 204
        }
    },

    create_listener_reserve_create_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_reserve_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_reserve_create_event'
            },
            code: 204
        }
    },
    create_listener_reserve_cancel_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_reserve_cancel_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_reserve_cancel_event'
            },
            code: 204
        }
    },
    create_listener_reserve_failure_event: function(request)
    {
        console.log("prepay_balance_controller.create_listener_reserve_failure_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_listener_reserve_failure_event'
            },
            code: 204
        }
    },
    
    create_hub: function(request)
    {
        console.log("prepay_balance_controller.create_hub")
        
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'create_hub'
            },
            callback: "string"
        }
    },
    destroy_hub: function(request)
    {
        console.log("prepay_balance_controller.destroy_hub")

        return {
            id: request.params.hub_id,
            routeDetails: {
                controller: 'Prepay Balance',
                action: 'destroy_hub'
            },
            code: 204
        }
    }
}
