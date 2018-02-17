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

const ANIMALS = ['ant', 'bear', 'bird', 'cat', 'chicken', 'cow', 'dog', 'elephant',
    'fish', 'fox', 'horse', 'kangaroo', 'lion', 'monkey', 'penguin', 'pig', 'rabbit',
    'sheep', 'tiger', 'whale', 'wolf'];

const crossProduct = (a, b) => b.reduce((arr, b) => arr.concat(a.map(a => a + b)), []);

module.exports = function(app) {
    app.get('/convertor', (req, res) => {
        try {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");

            const value = req.query.value;
            const digits = value.split('');
            const arraysToCombine = [];

            digits.forEach(digit => {
                arraysToCombine.push(CONVERSIONS[digit]);
            });

            const convertion = arraysToCombine.reduce(crossProduct).sort();
            const words = convertion.filter(word => ANIMALS.includes(word));
            const result = words.join(', ') || `No animals matched value of ${value}`;

            res.end(result);
        } catch(e) {
            res.end('Some error occured');
        }
    })
};
