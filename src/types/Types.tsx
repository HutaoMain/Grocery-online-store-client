export interface CategoryInterface {
  id: string;
  categoryName: string;
  imageUrl: string;
}

export interface UserInterface {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
  userRole: string;
  street: string;
  barangay: string;
  postalCode: number;
  municipality: string;
  city: string;
  contactNumber: number;
}

export interface ProductInterface {
  id: string;
  productName: string;
  imageUrl: string;
  description: string;
  price: number;
  quantity: number;
  category: any;
  sold: number;
}

export interface shippingAdd {
  street: string;
  barangay: string;
  postalCode: number;
  municipality: string;
  city: string;
  contactNumber: number;
  modeOfPayment: string;
}

export interface orderInterface {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  orderList: [];
}
