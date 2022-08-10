const data = require('../data/zoo_data');
const { getElephants, averageAge, computeData, handlerElephants } = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se getElephantes é uma função', () => {
    const actual = typeof getElephants;
    const expected = 'function';
    expect(actual).toBe(expected);
  });

  it('Verifica se getElephants retorna o objeto elephant', () => {
    const actual = getElephants();
    const expected = {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    };
    expect(actual).toMatchObject(expected);
  });

  it('Verifica se averageAge retorna a media de idade dos elefantes', () => {
    const actual = averageAge(data.species[7]);
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });

  it('Verifica se computeData retorna o esperado nos switchs', () => {
    {
      const actual = computeData('count', data.species[7]);
      const expected = 4;
      expect(actual).toBe(expected);
    }

    {
      const actual = computeData('names', data.species[7]);
      const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
      expect(actual).toEqual(expected);
    }

    {
      const actual = computeData('averageAge', data.species[7]);
      const expected = 10.5;
      expect(actual).toBe(expected);
    }

    {
      const actual = computeData('lalalala', data.species[7]);
      expect(actual).toBeNull();
    }
  });

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
  });
});
