const fs = require('fs');
const path = require('path');

class Token {
    constructor(type, lexeme, literal, line) {
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
    }

    toString() {
        return `${this.type} ${this.lexeme} ${this.literal}`;
    }
}

class Scanner {
    constructor(source) {
        this.source = source;
        this.start = 0;
        this.current = 0;
        this.tokens = [];
    }

    scan() {
        // Scan source code
        for (let i = 0; i < this.source.length; i++) {
            const c = this.source[i];
            // Do something with the character
            console.log(c);
        }
    }

    addToken(type, literal) {
        const text = this.source.substring(this.start, this.current);
        token = new Token(type, text, literal, this.line);
        console.log(`Token: ${text} ${type} ${literal}`);
    }
}

// Main function to run the scanner
function main() {
    const args = process.argv.slice(2);
    if (args.length !== 1) {
        console.error('Usage: node scanner.js <filename>');
        process.exit(1);
    }

    const filename = args[0];
    const filePath = path.resolve(__dirname, filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            process.exit(1);
        }

        const scanner = new Scanner(data);
        scanner.scan();
    });
}

main();