import { Test, TestingModule } from '@nestjs/testing';
import { MotoboyService } from './motoboy.service';

describe('MotoboyService', () => {
  let service: MotoboyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotoboyService],
    }).compile();

    service = module.get<MotoboyService>(MotoboyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
