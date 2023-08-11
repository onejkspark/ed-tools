// get Object Data
const dict = getObject()

// change to String
const dictString = JSON.stringify(dict);

const fs = require('fs');

const filePath = require('path').dirname(require.main.filename)

// create to json file
fs.writeFile(`${filePath}/object.json`, dictString, function (err, result) {
    if (err) console.log('error', err);
});

/**
 * Created Object Function
 * @returns {{four: number[], one: number[], two: number[], three: number[]}}
 */
function getObject() {
    return {
        "one": [15, 4.5], "two": [34, 3.3], "three": [67, 5.0], "four": [32, 4.1]
    }
}
