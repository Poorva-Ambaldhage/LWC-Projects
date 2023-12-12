import { LightningElement } from 'lwc';


export default class BmiCalc extends LightningElement {
    height =''
    weight =''
    bmiValue =''
    age=''
    gender=''
    result=''
    
    
    checkCondition = false;
    
    inputHandler(event){

        const {name , value} = event.target
        if(name==="height"){
            this.height = value
        }
        if(name==="weight"){
            this.weight = value
        }
        if(name==="age"){
            this.age=value;
        }
    }

    submitHandler(event){
        this.checkCondition = true;
        if(this.age>19){
            event.preventDefault()   
            console.log("height",this.height);
            console.log("weight", this.weight);
            this.calculate();
        }
        else{
            alert("BMI is applicable for age group greater than 19 years");
        }        
    }

    calculate(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        console.log("BMI:" , bmi);
        this.bmiValue = Number(bmi.toFixed(2));

        if(this.bmiValue<18.5){
            this.result='Underweight';
        }else if(this.bmiValue>18.4 && this.bmiValue<25){
            this.result='Normal';
        }else if(this.bmiValue>24.9 && this.bmiValue<30){
            this.result='Overweght';
        }else{
            this.result='Obese';
        }
    }

    recalculate(event){
        this.height =''
        this.weight =''
        this.bmiValue =''
        this.age=''
        this.result=''
        this.checkCondition = false;
    }
}