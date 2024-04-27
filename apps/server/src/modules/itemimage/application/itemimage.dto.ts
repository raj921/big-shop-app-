import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ItemimageCreateDto {
  @IsString()
  @IsNotEmpty()
  imageUrl: string

  @IsString()
  @IsOptional()
  itemId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class ItemimageUpdateDto {
  @IsString()
  @IsOptional()
  imageUrl?: string

  @IsString()
  @IsOptional()
  itemId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
