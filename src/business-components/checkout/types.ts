export enum UiContentEnum {
  PERSONAL_INFO,
  ADDRESS_INFO,
  PAYMENT_INFO
}

export interface StoreProps {
  data: CheckoutFormProps
  section: UiContentEnum
}

export interface CheckoutFormProps {
  name: string
  id: string
  phone: string
  zipcode: string
  street: string
  neighborhood: string
  city: string
  state: string
  owner: string
  cvv: string
  cardNumber: string
  expDate: string
}
