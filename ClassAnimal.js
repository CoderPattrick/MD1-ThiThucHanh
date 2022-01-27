class Animal{
    constructor(name,weight) {
        this.name=name;
        this.weight=weight;
    }
    setName(newName){
        this.name=newName;
    }
    setWeight(newWeight){
        this.weight=newWeight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        let info="Name: "+this.name+"; Weight: "+ this.weight;
        return info;
    }
}
