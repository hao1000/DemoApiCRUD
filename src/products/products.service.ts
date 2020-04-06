import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) { }

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product();
    product.productName = createProductDto.productName;
    product.productPrice = createProductDto.productPrice;

    return this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  async  update(id: number, data: Partial<CreateProductDto>) {
    await this.productsRepository.update({ id }, data);
    return await this.productsRepository.findOne({ id });
  }
  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
  async search(name: string, price: number): Promise<Product[]> {
    return this.productsRepository.find({
      where: [
        { productName: Like('%' + name + '%') },
        { productPrice: Like('%' + price + '%') }
      ]
    }
    );
  }
}
