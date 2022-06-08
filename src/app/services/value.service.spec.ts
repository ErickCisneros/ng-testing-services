import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  // Se ejecuta antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService],
    });
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getValue', () => {
    // AAA
    it('should return "my value"', () => {
      expect(service.getValue()).toBe('my value');
      service.setValue('changed');
      expect(service.getValue()).toBe('changed');
    });
  });

  describe('Test for getPromiseValue', () => {
    // AAA
    it('should return "Promise value" from promise with then', (doneFn) => {
      service.getPromiseValue().then((value) => {
        expect(value).toBe('Promise value');
      });
      doneFn();
    });

    it('should return "Promise value" from promise with async/await', async () => {
      const value = await service.getPromiseValue();
      expect(value).toBe('Promise value');
    });
  });

  describe('Test for getObsevableValue', () => {
    // AAA
    it('should return "Observable value"', (doneFn) => {
      service.getObservableValue().subscribe((res) => {
        expect(res).toBe('Observable value');
      });
      doneFn();
    });
  });
});
