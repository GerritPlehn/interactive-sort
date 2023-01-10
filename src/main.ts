import { quickSort } from './quicksort.js'
import inquirer from 'inquirer'

const main = async () => {
  const items = ['Pizza', 'Pasta', 'Kebab']
  const sortedArray = await quickSort(items, compareFn)
  console.log(sortedArray)
}

const compareFn = async (a: string, b: string): Promise<number> => {
  if (a === b) return 0
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'firstItem',
      message: `Which item is better:`,
      choices: [a, b, 'Equal'],
    },
  ])
  if (answer.firstItem === a) {
    return 1
  } else if (answer.firstItem === b) {
    return -1
  }
  return 0
}

main()
