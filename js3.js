let arr1 = "nscnjqigveuqouf1218y";
let arr2 = "qwrtp123";
function findVowel(text){
    let vowel=['a','o','e','u','i'];
    let countVowel = 0;
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if(text[i]==vowel[j]){
                countVowel++;
            }
        }
    }
    if(countVowel>0){
        return countVowel;
    }
    return false;
}
let test1 = findVowel(arr1);
let test2 = findVowel(arr2);
console.log(test1);
console.log(test2);