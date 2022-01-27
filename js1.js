//ax+b=0
function calculateFirstDegreeEquation(a,b){
    let x=0;
    if(a==0){
        if(b==0){
            return "Vô số nghiệm.";
        }
        else {
            return "Vô nghiệm.";
        }
    }
    x = -(b/a);
    return x;
}
let result= calculateFirstDegreeEquation(5,8);
console.log(result);