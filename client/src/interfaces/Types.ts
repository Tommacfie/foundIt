export interface Item {
  title: string
  description: string
  brand: string
  image: string
  location: string
  lostOrFound: boolean
  submittedBy: string
}

export interface UserRegistration {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserLogin {
  email: string
  password: string
}