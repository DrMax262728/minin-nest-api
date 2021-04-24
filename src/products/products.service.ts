import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// dto
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
// schemas
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getProductById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async createProduct(productDto: CreateProductDto): Promise<Product> {
    const productModel = new this.productModel(productDto);
    return productModel.save();
  }

  async removeProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async updateProduct(
    id: string,
    productDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
