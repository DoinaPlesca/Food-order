import {ResponseDto} from "./responsiveHelper/responseDto";


export interface Category {
  categoryId? : number;
  categoryName? : string;
  categoryImageUrl?: string;
}
export type CategoryResponseDto = ResponseDto<Category>;
