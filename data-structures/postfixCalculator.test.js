import { postFixCalulator } from './postfixCalculator'

test('it calculates', () => {
    const answer= postFixCalulator("132-+");
    expect(answer).toEqual(2);
})

test('it calculates', () => {
    const answer= postFixCalulator("32-");
    expect(answer).toEqual(1);
})