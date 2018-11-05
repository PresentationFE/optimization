import { ChangeDetectionRoutingModule } from './change-detection-routing.module';

describe('ChangeDetectionRoutingModule', () => {
  let changeDetectionRoutingModule: ChangeDetectionRoutingModule;

  beforeEach(() => {
    changeDetectionRoutingModule = new ChangeDetectionRoutingModule();
  });

  it('should create an instance', () => {
    expect(changeDetectionRoutingModule).toBeTruthy();
  });
});
