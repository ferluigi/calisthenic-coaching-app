export interface ICustomer {
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    country: string;
    postal_code: number;
    line1: string;
    state: string;
  };
}



export interface PaymentStatus{
  message: string,
  success: boolean | undefined,
}

export interface CustomerPayment {
  price: number;
  id: string;
}

export interface CustomerPaymentConfirmed {
  customer: ICustomer | undefined;
  paymentID: string;
  status: PaymentStatus;
}

//states

export interface ModalViewState{
  open: boolean;
  view: number;
}

export interface CustomerState {
  customer: ICustomer | undefined;
}

export interface CustomerPaymentState {
  price: number | undefined;
  id: string;
  success: PaymentStatus;
  error: string | null;
}