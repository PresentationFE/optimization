import { BatchRoutingModule } from './batch-routing.module';

describe('BatchRoutingModule', () => {
  let batchRoutingModule: BatchRoutingModule;

  beforeEach(() => {
    batchRoutingModule = new BatchRoutingModule();
  });

  it('should create an instance', () => {
    expect(batchRoutingModule).toBeTruthy();
  });
});
