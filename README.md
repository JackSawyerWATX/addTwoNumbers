# Bridge of Death Quiz

A fun interactive Node.js script inspired by the famous "Bridge of Death" scene from Monty Python and the Holy Grail.

## Description

This script recreates the iconic scene where the Bridge Keeper asks three questions that must be answered before crossing the Bridge of Death. The program prompts the user for their name, quest, and favorite color, just like in the movie.

## Features

- Interactive command-line interface
- Prompts for three classic questions from the movie
- **Validates answers just like in the movie scene**
- **Case-insensitive answer validation** for user-friendly experience
- **Flexible quest validation** - accepts any answer containing "seek" and "holy grail"
- Correct answers allow you to pass, wrong answers result in the classic "Ahh-hh-hh......" response
- Uses Node.js readline module for user input
- Displays personalized response based on user's name

## Prerequisites

- Node.js installed on your system

## Installation

1. Clone or download this repository
2. Navigate to the project directory

```bash
cd addTwoNumbers
```

## Usage

Run the script using Node.js:

```bash
node script.js
```

The program will ask you three questions:
1. What is your name? (Any answer accepted)
2. What is your quest? (Must contain both "seek" and "holy grail" - case insensitive)
3. What is your favorite color? (Must answer "blue" - case insensitive)

**Important**: You must give the correct answers to the second and third questions to successfully cross the bridge. The validation is case-insensitive and flexible for a better user experience. Wrong answers will result in the classic "Ahh-hh-hh......" response and the program will end.

## Example

### Successful Crossing
```
Stop! Who would cross the Bridge of Death. Must answer me these questions three, 'ere the other side he see.
What is your name? Arthur
What is your quest? I seek the Holy Grail
What is your favorite color? BLUE
Right then, Arthur. Off you go.
```

### Alternative Successful Answers
```
What is your quest? My quest is to seek the holy grail!
What is your favorite color? Blue
```

### Failed Crossing (Wrong Answer)
```
Stop! Who would cross the Bridge of Death. Must answer me these questions three, 'ere the other side he see.
What is your name? Lancelot
What is your quest? To find a shrubbery
Ahh-hh-hh......
```

## Files

- `script.js` - Main script file containing the interactive quiz logic

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by Monty Python and the Holy Grail
- Built with Node.js readline module

### I love you all! Happy coding!