import rollupJestBoilerplate from './main.js';

describe('rollupJestBoilerplate', () => {
  it('rollupJestBoilerplate(string)', () => {
    expect(rollupJestBoilerplate('cool')).toMatchSnapshot();
  });
});
