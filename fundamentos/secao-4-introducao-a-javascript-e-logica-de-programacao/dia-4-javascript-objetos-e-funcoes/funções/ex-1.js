function verificaPalindrome(palavra) {
    let reverse = palavra.split('').reverse().join('');
    
    if (reverse === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));