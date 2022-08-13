const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se retorna todos os horarios ao não passar parametros', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toMatchObject(expected);
  });

  it('Verifica se os argumentos Monday e 09:00-AM retorna que o zoologico esta fechado', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('Verifica se os argumentos Tuesday e 09:00-AM retorna que o zoologico esta aberto', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });

  it('Verifica se os argumentos Wednesday e 09:00-PM retorna que o zoologico esta fechado', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('Verifica se ao passar parametros inválidos é retornado um erro', () => {
    expect(() => getOpeningHours('lalaland')).toThrowError('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Saturday', '13:00-PM')).toThrowError('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Saturday', '-PM')).toThrowError('The hour should represent a number');
    expect(() => getOpeningHours('Wednesday', '10:56-DM')).toThrow();
    expect(() => getOpeningHours('Saturday', '10:105-PM')).toThrow();
  });
});
