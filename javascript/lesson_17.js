function MathChallenge(str) {
    function tokenize(input) {
        // Tokenizes the input string into numbers, operators, and parentheses
        const tokens = [];
        let number = '';
        for (let char of input) {
            if (char >= '0' && char <= '9') {
                number += char; // Build the number string
            } else {
                if (number) {
                    tokens.push(parseInt(number, 10)); // Push the number as an integer
                    number = '';
                }
                if (char !== ' ') {
                    tokens.push(char); // Push operators and parentheses
                }
            }
        }
        if (number) {
            tokens.push(parseInt(number, 10)); // Push the last number
        }
        return tokens;
    }

    function parse(tokens) {
        // Parse the tokens into an expression tree
        function parseExpression() {
            let result = parseTerm();
            while (tokens.length && (tokens[0] === '+' || tokens[0] === '-')) {
                const op = tokens.shift();
                const nextTerm = parseTerm();
                result = op === '+' ? result + nextTerm : result - nextTerm;
            }
            return result;
        }

        function parseTerm() {
            let result = parseFactor();
            while (tokens.length && (tokens[0] === '*' || tokens[0] === '/')) {
                const op = tokens.shift();
                const nextFactor = parseFactor();
                result = op === '*' ? result * nextFactor : result / nextFactor;
            }
            return result;
        }

        function parseFactor() {
            if (tokens[0] === '(') {
                tokens.shift(); // Remove '('
                const result = parseExpression();
                tokens.shift(); // Remove ')'
                return result;
            }
            let num = tokens.shift();
            if (tokens[0] === '**') {
                tokens.shift(); // Remove '**'
                num = Math.pow(num, parseFactor());
            }
            return num;
        }

        return parseExpression();
    }

    // Tokenize, parse, and evaluate the expression
    const tokens = tokenize(str);
    return parse(tokens);
}