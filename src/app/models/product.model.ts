export interface ndjdnfjskf {
    // id: number,
    // name: string;
    // price: number;
    // category: string;
    // description: string;
    // images: [],
    
}

export interface Product {
    id: string
    object: string
    active: boolean
    attributes: any[]
    created: number
    default_price: string
    description: string
    images: string[]
    livemode: boolean
    metadata: Metadata
    name: string
    package_dimensions: any
    shippable: any
    statement_descriptor: any
    tax_code: any
    type: string
    unit_label: any
    updated: number
    url: any
    price: Price
    price_amount: number
  }
  
  export interface Metadata {
    Categoria: string
  }
  
  export interface Price {
    id: string
    object: string
    active: boolean
    billing_scheme: string
    created: number
    currency: string
    custom_unit_amount: any
    livemode: boolean
    lookup_key: any
    metadata: Metadata2
    nickname: any
    product: string
    recurring: any
    tax_behavior: string
    tiers_mode: any
    transform_quantity: any
    type: string
    unit_amount: number
    unit_amount_decimal: string
  }
  
  export interface Metadata2 {}
  