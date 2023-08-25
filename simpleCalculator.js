import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
@track currentResult;
@track showPreviousResult = false;
@track listPreviousResult=[];
firstNumber;
secondNumber;

numberChangeHandler(event){
    const inputBoxName = event.target.name;
    if(inputBoxName==='firstNumber'){
        this.firstNumber= event.target.value;
    }
    else if (inputBoxName==='secondNumber'){
        this.secondNumber=event.target.value;
    }
}

addHandler(){
    const fNum = parseInt(this.firstNumber);
    const sNum = parseInt(this.secondNumber);

    this.currentResult =   `Result of ${fNum} + ${sNum} is ${fNum+sNum}`;
    this.listPreviousResult.push(this.currentResult);
}

subtractHandler(){
    const fNum = parseInt(this.firstNumber);
    const sNum = parseInt(this.secondNumber);

    this.currentResult =   `Result of ${fNum} - ${sNum} is ${fNum-sNum}`;
    this.listPreviousResult.push(this.currentResult);
}

divisionHandler(){
    const fNum = parseInt(this.firstNumber);
    const sNum = parseInt(this.secondNumber);

    this.currentResult =   `Result of ${fNum} / ${sNum} is ${fNum/sNum}`; 
    this.listPreviousResult.push(this.currentResult); 
}

multiplyHandler(){
    const fNum = parseInt(this.firstNumber);
    const sNum = parseInt(this.secondNumber);

    this.currentResult =   `Result of ${fNum} * ${sNum} is ${fNum*sNum}`;
    this.listPreviousResult.push(this.currentResult);
}

showPreviousResultToggle(event){
    this.showPreviousResult = event.target.checked;
}

}