
/**
 * round to decimal places
 * https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
 * @param {number} num
 * @param {number=} decimalPlaces
 * @return {number}
 */
export const setDecimalPlaces = (num, decimalPlaces = Infinity) => {
    if(decimalPlaces === Infinity) return num;

    const coefficient = 10 ** decimalPlaces;
    return Math.round(num * coefficient) / coefficient;
};

/**
 * Returns a random number between 0 (inclusive) and 1 (exclusive)
 * @return {number}
 */
export const getRandom01 = () => {
    return Math.random();
};

/**
 * Returns a random integer between min and max
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * check if value is in [start, end]
 * @param {number} value
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
export const isInRange = (value, start, end) => {
    return value >= start && value <= end;
};

/**
 * Returns a random number between min and max
 * @param {number} min
 * @param {number} max
 * @param {number=} decimalPlaces
 * @return {number}
 */
export const getRandom = (min, max, decimalPlaces = 2) => {
    return setDecimalPlaces(Math.random() * (max - min) + min, decimalPlaces);
};

/**
 * Returns a random number between min and max
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export const random = (min, max) => {
    return Math.random() * (max - min) + min;
};

export default class MathProvider{

    // ------------ RANDOM -------------------------------------------

    /**
     * Returns a random number between 0 (inclusive) and 1 (exclusive)
     * @return {number}
     */
    static getRandom01(){
        return Math.random();
    }

    // -------------- RANGES -----------------------

    /**
     * Check if 2 ranges overlap?
     * [a,b] and [c,d]
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {boolean}
     */
    static ifRangesOverlap(a, b, c, d){
        return Math.max(a,c) <= Math.min(b,d) ;
    }

    //TODO: Convert numbers within a range to numbers within another range
    /* Let's say you want to scale a range [min,max] to [a,b]:
        f(x) = (b-a)*(x - min)/(max - min) + a

        https://stackoverflow.com/questions/5294955/how-to-scale-down-a-range-of-numbers-with-a-known-min-and-max-value
        https://stackoverflow.com/questions/4229662/convert-numbers-within-a-range-to-numbers-within-another-range
    */

    // TODO: Probability
    /*
    * select elements with the following probability:
    'a' - 0.4
    'b' - 0.3
    'c' - 0.2
    'd' - 0.1

    var randomWithProbability = function(){

        var notRandomNumbers
            ,idx;

        notRandomNumbers = ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'd'];
        idx = Math.floor(Math.random() * notRandomNumbers.length);
        return notRandomNumbers[idx];
    };
    */
}

/**
 * get line intersection point (or null if the are parallel)
 * @param {number} m1 
 * @param {number} b1 
 * @param {number} m2 
 * @param {number} b2 
 * @returns {{x: number, y: number}} | null
 */
 export const lineIntersection = (m1, b1, m2, b2) => {
    
    // parallel slopes
    if (m1 === m2) return null;

    const x = (b2 - b1) / (m1 - m2);
    return {
        x, 
        y: m1 * x + b1
    };
};
