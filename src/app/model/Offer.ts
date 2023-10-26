export type Offer =
    {
      "offerId": number
      "product": {
        "id": number
        "name": string
        "description": string
        "productCondition": string
        "productCategory": string
      },
      "purchaseNotes": true
      "price": number
      "promoted": true
      "location": string
      "paymentMethod": string
      "createdAt": string
      "finishedAt": string
      "userEntity": {
        "userId": number
        "username": string
        "firstName": string
        "lastName": string
        "email": string
        "phoneNumber": string
        "location": string
        "createdAt": string
        "rating": [
          {
            "fromId": number
            "toId": number
            "auctionId": number
            "rating": number
            "receiver": string
            "seller": true
          }
        ],
        "notifications": [
          {
            "notificationId": number
            "type": string
            "auctionId": number
            "messageId": number
            "receiverId": number
            "actorId": number
            "createdAt": string
            "actor": string
            "seen": true
          }
        ],
        "offers": [
          string
        ],
        "approved": true,
        "admin": true
      }
    }
