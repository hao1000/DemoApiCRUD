import { Body, Controller, Delete, Get, Param, Post,Put } from "@nestjs/common";
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productservice: ProductsService) { }

    @Post()
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productservice.create(createProductDto);
    }
    @Get()
    findAll(): Promise<Product[]> {
        return this.productservice.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Product> {
        return this.productservice.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.productservice.remove(id);
    }
    @Put(':id')
    update(@Param('id') id:number,@Body()data:Partial<CreateProductDto>){
        return this.productservice.update(id,data);
    }
    @Get(':productName/:productPrice')
    search(@Param('productName') productName:string ,
        @Param('productPrice') productPrice:number):Promise<Product[]>{
        return this.productservice.search(productName,productPrice);
    }
    
}

