import { Test, TestingModule } from '@nestjs/testing';
import { FrutaController } from './fruta.controller';
import { FrutaService } from './fruta.service';

describe('FrutaController', () => {
  let controller: FrutaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrutaController],
      providers: [FrutaService],
    }).compile();

    controller = module.get<FrutaController>(FrutaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
