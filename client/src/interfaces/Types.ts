export interface Item {
  title: string
  description: string
  brand: string
  image: string
  location: string
  lostOrFound: boolean
  submittedBy: string
}

export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}