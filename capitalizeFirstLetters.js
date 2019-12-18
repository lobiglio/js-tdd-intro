function capitalizeFirstLetters(input) {
    if (input.length > 0) {

        input = input.split(" ");
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i][0].toUpperCase() + input[i].substr(1);
        }
        return input.join(' ');
    } else {
        return '';
    }
}

module.exports = capitalizeFirstLetters;