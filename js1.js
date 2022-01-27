//ax+b=0
function calculateFirstDegreeEquation(a,b){
    let x;
    if(a==0){
        if(b==0){
            x = "Vô số nghiệm.";
        }
        else {
            x="Vô nghiệm.";
        }
        return x;
    }
    x = -(b/a);
    return x;
}
let result= calculateFirstDegreeEquation(5,8);
console.log(result);