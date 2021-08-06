//Keep interfaces tyhat are used in several places accross the app
export interface Payload {
  title: string;
  price: number;
  description: string;
}

export interface Me {
  phone: string;
  email: string;
  name: string;
  surName: string;
  smsNotification: boolean;
  emailNotification: boolean;
  userImage: string;
  note: string;
}
