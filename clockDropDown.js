import { LightningElement,api } from 'lwc';

export default class ClockDropDown extends LightningElement {
    @api label =''
    @api options =[]
    @api uniqueId =''

    optionHandler(event){
        console.log(this.label);
        console.log(event.target.value);
        this.sendEventToParent(event.target.value);
    }

    sendEventToParent(value){
        const event = new CustomEvent('childtoparenthandler',{
            detail:{
                label:this.label,
                value:value
            }
        });
        this.dispatchEvent(event);
    }
    @api 
    reset(val){
        this.template.querySelector('select').value=val;
        this.sendEventToParent(val);

    }
}