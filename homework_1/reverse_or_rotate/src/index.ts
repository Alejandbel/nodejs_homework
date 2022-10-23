import { program } from 'commander';
import { revRot } from './solution';

program
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .requiredOption('-s, --string <string>', 'specify string')
  .requiredOption('-sz, --size <size>', 'specify size of chunk', parseInt)
  .parse(process.argv);

const options = program.opts();

console.log(`Result string is: ${revRot(options.string, options.size)}`);
