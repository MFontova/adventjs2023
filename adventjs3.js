var original = 'abcd';
var modified = 'abcde';
findNaughtyStep(original, modified); // 'e'
// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'
// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''
function findNaughtyStep(original, modified) {
    var length = Math.min(original.length, modified.length);
    console.log(length);
    for (var i = 0; i <= original.length; i++) {
        var element = original[i];
        if (original[i] === modified[i]) {
            console.log(i, true);
        }
        else {
            console.log(i, false);
        }
    }
    return '';
}
