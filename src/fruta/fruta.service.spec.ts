import { Test, TestingModule } from '@nestjs/testing';
import { FrutaService } from './fruta.service';

describe('FrutaService', () => {
  let service: FrutaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrutaService],
    }).compile();

    service = module.get<FrutaService>(FrutaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
