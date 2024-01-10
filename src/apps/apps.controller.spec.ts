import { Test, TestingModule } from '@nestjs/testing';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';

describe('AppsController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let appsController: AppsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppsController],
      providers: [AppsService],
    }).compile();

    appsController = module.get<AppsController>(AppsController);
  });

  /*it('should be defined', () => {
    expect(appsController.findAll()).toBeDefined();
  });*/
});
