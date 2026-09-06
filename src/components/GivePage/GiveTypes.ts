export interface BankAccount {
  id: string
  bankName: string
  logo: string
  accountHolder: string
  accountNumber: string
  ifsc: string
  branch: string
  borderColor: string
  accentColor: string
}

export interface QRCodeItem {
  id: string
  bankName: string
  image: string
}
