import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const MorseReference = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '------': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
} as const;

class Converter {
  private static reference: typeof MorseReference = MorseReference;

  public static getLetter(input: string): string {
    return Converter.reference[input as keyof typeof MorseReference];
  }
}

const rl = readline.createInterface({ input, output });

const main = async () => {
  console.log('A Project by Ashish-Krishna-K');
  const prompt = await rl.question(
    'Please provide the morse code input.\n NOTE: Letters are delimited using spaces, if you do not use spaces in your input the output will be blank, so make sure the input is delimited by spaces.\n (You can type q and hit enter to exit program)\n'
  );
  if (prompt.trim().length < 1) {
    rl.close();
    return;
  }
  const input = prompt.split(' ');
  const answer = input.map(Converter.getLetter).join(' ');
  rl.write(`Answer:\n${answer}\n`);
  rl.close();
};

main();
