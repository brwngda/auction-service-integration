export type Offer =
  {
    offerId: number
    product: {
      id: number
      name: string
      description: string
      productCondition: string
      productCategory: string
    },
    purchaseNotes: boolean
    price: number
    promoted: boolean
    location: string
    paymentMethod: string
    createdAt: string
    finishedAt: null
    userEntity: null
  }
