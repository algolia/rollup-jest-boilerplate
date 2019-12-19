export interface RollupJestBoilerplate {
  awesomeString: string;
}

export default function rollupJestBoilerplate(string: string): RollupJestBoilerplate {
  return {
    awesomeString: string,
  };
}
