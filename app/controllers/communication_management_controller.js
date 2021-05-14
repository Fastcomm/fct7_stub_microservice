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

    
    // create_send: function(request)
    // {
    //     console.log("communication_management_controller.create_send")
    //     return {
    //         id: faker.datatype.uuid(),
    //         routeDetails: {
    //             controller: 'Communication Management',
    //             action: 'create_send'
    //         },
    //         href: faker.internet.url(),
    //         type: "1",
    //         priority: "1",
    //         subject: "News: the latest promotion for you ",
    //         sendTime: new Date(),
    //         sendTimeComplete: new Date(),
    //         status: "Completed",
    //         description: faker.random.words(),
    //         content: "Dear $Parameter1,Here is the information of the promotion $Parameter2",
    //         contactLogFlag: "false",
    //         callbackFlag: "true",
    //         tryTimes: "3",
    //         version: "1.0",
    //         characteristic: [
    //             {
    //                 name: faker.name.findName(),
    //                 value: "string"
    //             },
    //             {
    //                 name: faker.name.findName(),
    //                 value: "string"
    //             }
    //         ],
    //         attachment: {
    //             description: faker.random.words(),
    //             id: faker.datatype.uuid(),
    //             href: faker.internet.url(),
    //             path: "/attachedfile/1", 
    //             name: "File_XYZ_001",
    //             validFor: {
    //                 startDateTime: new Date(),
    //                 endDateTime: new Date()
    //             }
    //         },
    //         sender: {
    //             id: faker.datatype.uuid(),
    //             name: faker.name.findName(),
    //             phoneNumber: "10086",
    //             relatedParty: {
    //                 id: faker.datatype.uuid(),
    //                 href: faker.internet.url(),
    //                 role: "agent",
    //                 name: "johathan doelock"
    //             }
    //         },
    //         receiver: [
    //             {
    //                 id: faker.datatype.uuid(),
    //                 name: faker.name.findName(),
    //                 phoneNumber: "10086",
    //                 relatedParty: {
    //                     id: faker.datatype.uuid(),
    //                     href: faker.internet.url(),
    //                     role: "customer",
    //                     name: "John Lock"
    //                 }
    //             }
    //         ]
    //     }
    // },
    
    // create_message_send: function(request)
    // {
    //     console.log("communication_management_controller.create_message_send")
    //     return {
    //         id: faker.datatype.uuid(),
    //         routeDetails: {
    //             controller: 'Communication Management',
    //             action: 'create_message_send'
    //         },
    //         callbackFlag: false,
    //         content: faker.random.words(),
    //         description: faker.random.words(),
    //         logFlag: true,
    //         priority: "1",
    //         sendTime: new Date(),
    //         sendTimeComplete: new Date(),
    //         status: "Completed",
    //         subject: "News: the latest promotion for you ",
    //         tryTimes: "3",
    //         type: "email",
    //         version: "1.0",
    //         attachment: [
    //             {
    //                 description: faker.random.words(),
    //                 href: faker.internet.url(),
    //                 id: faker.datatype.uuid(),
    //                 mimeType: "string",
    //                 name: "string",
    //                 path: "string",
    //                 size: 0,
    //                 sizeUnit: 0,
    //                 url: "string",
    //                 validFor: {
    //                     startDateTime: new Date(),
    //                     endDateTime: new Date()
    //                 },
    //                 "@type": "string",
    //                 "@schemaLocation": "string",
    //                 "@baseType": "string"
    //             }
    //         ],
    //         receiver: [
    //             {
    //                 appUserId: "string",
    //                 email:"joebush@yahoo.com",
    //                 id:"10234",
    //                 ip: "string",
    //                 name:"Joe Bush",
    //                 phoneNumber: "string",
    //                 type:"string",
    //                 relatedParty: {
    //                     href: faker.internet.url(),
    //                     id: faker.datatype.uuid(),
    //                     name: "John Lock",
    //                     role: "customer",
    //                     "@referredType": "string"
    //                 },
    //                 "@type": "string",
    //                 "@baseType": "string",
    //                 "@schemaLocation": "string"
    //             }
    //         ],
    //         sender: {
    //             email:"joe@yahoo.com",
    //             id:"1094",
    //             name:"ABC Bush",
    //             phoneNumber: "string",
    //             relatedParty: {
    //                 href: faker.internet.url(),
    //                 id: faker.datatype.uuid(),
    //                 name: "John Lock",
    //                 role: "customer",
    //                 "@referredType": "string"
    //             },
    //             "@type": "string",
    //             "@baseType": "string",
    //             "@schemaLocation": "string"
    //         },
    //         characteristic:[
    //             {
    //                 name: "string",
    //                 value: "string"
    //             }
    //         ],
    //         "@type": "string",
    //         "@schemaLocation": "string",
    //         "@baseType": "string"      
    //     }
    // },
    // create_client_listener: function(request)
    // {
    //     console.log("communication_management_controller.create_client_listener")

    //     return {
    //         id: faker.datatype.uuid(),
    //         routeDetails: {
    //             controller: 'Communication Management',
    //             action: 'create_client_listener'
    //         },
    //         event: {},
    //         eventType: "string",
    //         eventTime: "string",
    //         eventId: "string", 
    //     }
    // },
}