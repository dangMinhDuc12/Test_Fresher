const array = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];

function getAppearMostStringLength(array) {
    const arrayLength = array.map((item) => item.length);

    let objectToCount = {};
    let max = 0;
    let result;

    arrayLength.forEach((item) => {
        objectToCount[item] = (objectToCount[item] || 0) + 1;
        if (objectToCount[item] > max) {
            max = objectToCount[item];
            result = item;
        }
    });

    return array.filter((item) => item.length === result);
}

console.log(getAppearMostStringLength(array));
