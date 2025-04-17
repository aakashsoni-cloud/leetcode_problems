/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let newValue = init;
    return {
        decrement: function () {
            newValue--;
            return newValue;
        },
        increment: function () {
            newValue++;
            return newValue
        },
        reset: function () {
            newValue = init;
            return newValue
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */