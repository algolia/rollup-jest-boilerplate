import rollupJestBoilerplate from './main';

describe('rollupJestBoilerplate', () => {
  it('rollupJestBoilerplate(string)', () => {
    expect(rollupJestBoilerplate('cool')).toMatchSnapshot();
  });
});
