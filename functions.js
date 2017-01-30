// TODO: add your solutions here!

function concatenate(str1, str2) {
    return str1 + str2;
} 

function repeatPhrase(phrase, numOfTimes) {
    console.log(phrase.repeat(numOfTimes));
} 

function numToPower(num, exponent) {
    var i = 0;
    var answer = 1;
    while (i < exponent) {
        answer *= num;
        i+=1;
    }

    return answer;
}


function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function pythagoreanTheorem(a, b) {
    var c = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(c);
}

function isXEvenlyDivisibleByY(x, y) {
    return x % y == 0;
}

function numOfVowels(str) {
    str = str.toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        for(var j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                count +=1
            }
        }
    }
    return count;
}