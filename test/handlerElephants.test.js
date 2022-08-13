const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica a funcao handlerElephants tem os retornos esperados', () => {
    {
      const actual = handlerElephants();
      expect(actual).toBeUndefined();
    }

    {
      const actual = handlerElephants(6);
      const expected = 'Parâmetro inválido, é necessário uma string';
      expect(actual).toBe(expected);
    }

    {
      const actual = handlerElephants('popularity');
      const expected = 5;
      expect(actual).toBe(expected);
    }

    {
      const actual = handlerElephants('count');
      const expected = 4;
      expect(actual).toBe(expected);
    }

    {
      const actual = handlerElephants('sada');
      expect(actual).toBeNull();
    }

    {
      const actual = handlerElephants('averageAge');
      const expected = 10.5;
      expect(actual).toEqual(expected);
    }

    {
      const actual = handlerElephants('names');
      const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
      expect(actual).toEqual(expected);
    }
  });
});
