//  === Requirements ===

const faker = require('faker')

//  === Controller ===
module.exports = {
    
    index_message: function(request){
        console.log("communication_management_controller.index_message")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Communication Management',
                    action: 'index_message'
                },
                href: faker.internet.url(),
                content: "Dear $Parameter1,Here is the information of the promotion $Parameter2",
                description: faker.random.words(),
                logFlag: true,
                messageType: "string",
                priority: "string",
                scheduledSendTime: new Date(),
                sendTime: new Date(),
                sendTimeComplete: new Date(),
                subject: "string",
                tryTimes: 0,
                attachment: [
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
                        "amount": 1,
                        "units": "string"
                      },
                      validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                        },  
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    }
                  ],
                characteristic: [
                    {
                      id: "string",
                      name: "string",
                      valueType: "string",
                      characteristicRelationship: [
                        {
                          id: "string",
                          relationshipType: "string",
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string"
                        }
                      ],
                      value: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    }
                  ],
                  receiver: [
                    {
                      id: "string",
                      appUserId: "string",
                      email: "string",
                      ip: "string",
                      name: "string",
                      phoneNumber: "string",
                      party: {
                        id: "string",
                        href: "string",
                        name: "string",
                        role: "string",
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
                sender: {
                    id: "string",
                    email: "string",
                    name: "string",
                    phoneNumber: "string",
                    party: {
                      id: "string",
                      href: "string",
                      name: "string",
                      role: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "state": "initial",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                
            }
        ]
    },
    create_message: function(request)
    {
        console.log("communication_management_controller.create_message")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Communication Management',
                action: 'create_message'
            },
            href: faker.internet.url(),
            content: "Dear $Parameter1,Here is the information of the promotion $Parameter2",
            description: faker.random.words(),
            logFlag: true,
            messageType: "string",
            priority: "string",
            scheduledSendTime: new Date(),
            sendTime: new Date(),
            sendTimeComplete: new Date(),
            subject: "string",
            tryTimes: 0,
            attachment: [
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
                    "amount": 1,
                    "units": "string"
                  },
                  validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                    },  
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                }
              ],
            characteristic: [
                {
                  id: "string",
                  name: "string",
                  valueType: "string",
                  characteristicRelationship: [
                    {
                      id: "string",
                      relationshipType: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    }
                  ],
                  value: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                }
              ],
              receiver: [
                {
                  id: "string",
                  appUserId: "string",
                  email: "string",
                  ip: "string",
                  name: "string",
                  phoneNumber: "string",
                  party: {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
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
            sender: {
                id: "string",
                email: "string",
                name: "string",
                phoneNumber: "string",
                party: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              },
              "state": "initial",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            
        }
    },
    show_message: function(request)
    {
        console.log("communication_management_controller.index_message")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Communication Management',
                action: 'show_message'
            },
            href: faker.internet.url(),
            content: "Dear $Parameter1,Here is the information of the promotion $Parameter2",
            description: faker.random.words(),
            logFlag: true,
            messageType: "string",
            priority: "string",
            scheduledSendTime: new Date(),
            sendTime: new Date(),
            sendTimeComplete: new Date(),
            subject: "string",
            tryTimes: 0,
            attachment: [
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
                    "amount": 1,
                    "units": "string"
                  },
                  validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                    },  
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                }
              ],
            characteristic: [
                {
                  id: "string",
                  name: "string",
                  valueType: "string",
                  characteristicRelationship: [
                    {
                      id: "string",
                      relationshipType: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    }
                  ],
                  value: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                }
              ],
              receiver: [
                {
                  id: "string",
                  appUserId: "string",
                  email: "string",
                  ip: "string",
                  name: "string",
                  phoneNumber: "string",
                  party: {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
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
            sender: {
                id: "string",
                email: "string",
                name: "string",
                phoneNumber: "string",
                party: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              },
              "state": "initial",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            
        }
    },
    update_message: function(request)
    {
        console.log("communication_management_controller.update_message")
        return {
          id: request.params.id,
          routeDetails: {
              controller: 'Communication Management',
              action: 'update_message'
          },
          href: faker.internet.url(),
          content: "Dear $Parameter1,Here is the information of the promotion $Parameter2",
          description: faker.random.words(),
          logFlag: true,
          messageType: "string",
          priority: "string",
          scheduledSendTime: new Date(),
          sendTime: new Date(),
          sendTimeComplete: new Date(),
          subject: "string",
          tryTimes: 0,
          attachment: [
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
                  "amount": 1,
                  "units": "string"
                },
                validFor: {
                  startDateTime: new Date(),
                  endDateTime: new Date()    
                  },  
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
          characteristic: [
              {
                id: "string",
                name: "string",
                valueType: "string",
                characteristicRelationship: [
                  {
                    id: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            receiver: [
              {
                id: "string",
                appUserId: "string",
                email: "string",
                ip: "string",
                name: "string",
                phoneNumber: "string",
                party: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
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
          sender: {
              id: "string",
              email: "string",
              name: "string",
              phoneNumber: "string",
              party: {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "state": "initial",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
          
      }

    },
    destroy_message: function(request)
    {
        console.log("communication_management_controller.destroy_message")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Communication Management',
                action: 'destroy_message'
            },
            code: 204
        }
    },

    create_hub: function(request)
    {
        console.log("communication_management_controller.create_hub")
        
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Communication Management',
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
                controller: 'Communication Management',
                action: 'destroy_hub'
            },
            code: 204
        }
    },

    
  
}