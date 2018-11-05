import { ReflowModule } from './reflow.module';

describe('ReflowModule', () => {
  let reflowModule: ReflowModule;

  beforeEach(() => {
    reflowModule = new ReflowModule();
  });

  it('should create an instance', () => {
    expect(reflowModule).toBeTruthy();
  });
});
