const CONVERSIONS = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

const WORD_LIST = ['bear', 'cat', 'dog', 'fox', 'owl', 'wolf'];

const crossProduct = (a, b) => b.reduce((arr, b) => arr.concat(a.map(a => a + b)), []);

module.exports = function(app) {
    app.get('/convertor', (req, res) => {
        try {
            const digits = req.query.value.split('');
            const arraysToCombine = [];

            digits.forEach(digit => {
                arraysToCombine.push(CONVERSIONS[digit]);
            });

            const convertion = arraysToCombine.reduce(crossProduct).sort();
            const words = convertion.filter(word => WORD_LIST.includes(word));
            const result = words.join(', ') || 'No words matched';

            res.end(result);
        } catch(e) {
            res.end('Some error occured');
        }
    })
};