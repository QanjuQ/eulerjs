// Collatz sequence is mathematical expression based on which every starting with any number reaches 1
// considering following rules or calculations done on the number [positive integers]
// when n is even -> n/2
// when n is odd -> 3n + 1

const isOdd = (number) => number % 2 !== 0;

const last = (array) => array[array.length - 1];

const isEndCollatzTerm = (number) => (number === 1);

const generateCollatzSequenceFor = (sequence) => {
    const lastCollatzTerm = last(sequence);
    if (isEndCollatzTerm(lastCollatzTerm)) {
        return sequence;
    }
    if (isOdd(lastCollatzTerm)) {
        return generateCollatzSequenceFor([...sequence, 3 * lastCollatzTerm + 1]);
    }
    return generateCollatzSequenceFor([...sequence, Math.floor(lastCollatzTerm / 2)]);
};

const findLongestCollatzSequence = (limit) => {
    let prevCollatzSequencelength = 0;
    let olderCollatzSequenceNumber = 1;
    let number = 3;
    do {
        let collatzSequenceLength = generateCollatzSequenceFor([number]).length;
        if (prevCollatzSequencelength < collatzSequenceLength) {
            prevCollatzSequencelength = collatzSequenceLength;
            olderCollatzSequenceNumber = number;
        }
        number = number + 2;
    } while (number < limit);
    return olderCollatzSequenceNumber;
};

console.log(findLongestCollatzSequence(1000000), "value");
