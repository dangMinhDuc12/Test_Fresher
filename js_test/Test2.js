const array = [1, 4, 6, 3, 5];

function getMax(array) {
    let total = 0;

    function removeMaxInArray(array) {
        const maxArray = Math.max(...array);
        total = maxArray;

        const findMax = array.find((item) => item === maxArray);

        const arrayNotHaveMax = array.filter((item) => item < findMax);

        return arrayNotHaveMax;
    }

    const maxArrayWithouPrevMax = Math.max(...removeMaxInArray(array));
    total += maxArrayWithouPrevMax;
    return total;
}

console.log(getMax(array));
