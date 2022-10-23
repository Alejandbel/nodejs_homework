import { program } from 'commander';
import { findOdd } from './solution';

program
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .requiredOption('-l, --list <numbers...>', 'specify list of numbers')
  .parse(process.argv);

const list: string[] = program.opts().list;

const numbers: number[] = list.map((value) => {
  const parsed = Number(value);

  if (!Number.isInteger(parsed)) {
    console.log('List should contains only numbers');
    process.exit(1);
  }

  return parsed;
});

console.log(`Integer that appears odd number of times: ${findOdd(numbers)}`);
