export interface CategoryType {
	name: string
	description: string
	image: any
	available?: boolean
	productType: Array<string>
}

export interface ProductTypeType {
  _id?: string,
  name: string,
  description: string,
  image: string,
}

export interface ProductType {
  _id?: any
	name: string;
  description: string;
  image: any;
  delivaryDays: Array<DeliveryDaysType>;
  colors: Array<string>;
  productType: ProductTypeType;
  category: string;
  deliveryFormat: Array<DeliveryFormatType>;
  reviews: Array<ReviewType>;
  price: number;
  sold: number;
  images: any;
  deliveryOptions: Array<string>;
}
export interface ReviewType {
  days: 4 | 7 | 10;
  price: number;
}

export interface DeliveryDaysType {
  days: 4 | 7 | 10;
  price: number;
}

export interface DeliveryFormatType {
  format: "png" | "jpg" | "jpeg";
  price: number;
}
