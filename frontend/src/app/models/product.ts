import {ResponseDto} from "./responsiveHelper/responseDto";

export interface Product {
  productId? : number ;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  image_url?: string;
  categoryId?: number;
}

export type ProductResponseDto = ResponseDto<Product>;
