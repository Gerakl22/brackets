module.exports = function check(str, bracketsConfig) {
    let bracketsConfigLeft = [];
    let bracketsConfigRight = [];
    let result = [];

    for (bracket of bracketsConfig) {
        bracketsConfigLeft.push(bracket[0]);
        bracketsConfigRight.push(bracket[1]);
    }

    for (let i = 0; i < str.length; i++) {
        let item = str[i];

        bracketsConfigRight.indexOf(item) > -1
            ? result.pop()
            : result.push(item);
    }

    return !result.length;
};
