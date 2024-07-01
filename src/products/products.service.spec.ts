import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CreateProductDto } from './dto/create-product.dto';

describe('ProductsService', () => {
  let service: ProductsService;
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, ProductsController],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Debería listar artículos', () => {
    const productoARegistrar: CreateProductDto = {
      name: 'Mi primer articulo',
      description: 'Las pruebas unitarias son la clave',
      price: 7.89
    }
    service.create(productoARegistrar,1)
    const resultado =  service.findAll()

    expect(resultado).toBeDefined()
    expect(Array.isArray(resultado)).toBe(true)
    expect(resultado).toHaveLength(1)

  })

});
