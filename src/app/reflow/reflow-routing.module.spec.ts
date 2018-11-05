import { ReflowRoutingModule } from './reflow-routing.module';

describe('ReflowRoutingModule', () => {
  let reflowRoutingModule: ReflowRoutingModule;

  beforeEach(() => {
    reflowRoutingModule = new ReflowRoutingModule();
  });

  it('should create an instance', () => {
    expect(reflowRoutingModule).toBeTruthy();
  });
});
