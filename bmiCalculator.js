import { LightningElement/*,track*/} from 'lwc';

export default class BmiCalculator extends LightningElement {
   
   heightInM;
   weightInKg;
   //After spring 20 , all the primitive datatype variables are reactive by nature and do not require @track decorator.
   //@track 
   bmiCalculate ;

    WeightHandler(event){
      this.weightInKg = parseFloat(event.target.value);
    }

    HeightHandler(event){
        this.heightInM = parseFloat(event.target.value);
    }

    calculateBmiHandler(){
        try{
            this.bmiCalculate= this.weightInKg/(this.heightInM*this.heightInM);
        }
        catch(error){
            this.bmiCalculate = undefined;
        }
        
    }

}