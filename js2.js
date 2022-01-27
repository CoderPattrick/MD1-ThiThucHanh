let arr=[1,2,3,4,5,6,7,8,9,0];
function findNumbFromArr(array,number){
    let display="";
    for (let i = 0; i < array.length; i++) {
        if(array[i]==number){
            return i;
        }
    }
    display ="Number "+number+" not found in array.";
    //return -1;
    return display;
}
let find8 = findNumbFromArr(arr,8);
let find12 = findNumbFromArr(arr,12);
console.log(find8);
console.log(find12);