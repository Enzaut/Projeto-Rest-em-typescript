import { Test, TestingModule } from '@nestjs/testing';
import { MotoboyController } from './motoboy.controller';
import { MotoboyService } from './motoboy.service';

describe('MotoboyController', () => {
  let controller: MotoboyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotoboyController],
      providers: [MotoboyService],
    }).compile();

    controller = module.get<MotoboyController>(MotoboyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
