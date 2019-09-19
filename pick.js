'use strict';

module.exports = function (array) {
    // Valid Array
    if (!array || !Array.isArray(array) || array.length === 0) {
        return undefined;
    }

    const index = Math.floor( Math.random() * array.length );

    return array[index];
}