import { LightningElement } from 'lwc';
import ALARM_CLOCK from '@salesforce/resourceUrl/alarmclock';

export default class AlarmClockApp extends LightningElement {

 clockImg = ALARM_CLOCK +'/AlarmClockAssets/clock.png'
 ringtone = new Audio(ALARM_CLOCK +'/AlarmClockAssets/Clocksound.mp3')
 currentTime=''
 arrayOfHours=[]
 arrayOfMins=[]
 ampm=["AM","PM"]

 selectedHour
 selectedMinute
 selectedMer

 selectedTime=''
 alarmSet =false;
 alarmTriggered=false;



   //getter functions can be called as property in html directly.
   get isFieldsSelected(){
    return !(this.selectedHour && this.selectedMinute && this.selectedMer);
   }

   get isImgShake(){
    //console.log('alarmTriggered: ',this.alarmTriggered);
    return (this.alarmTriggered)?'shake':'';
    
   }

    connectedCallback(){
        this.currentTimeHandler();
        this.createHoursArray();
        this.createMinsArray();
       
    }
    
    currentTimeHandler()
    {
        setInterval(() => {
        let dateTime = new Date();
        let hrs = dateTime.getHours();
        let min = dateTime.getMinutes();
        let sec = dateTime.getSeconds();
        let ampm ="AM";
    
        if(hrs===12){
            ampm = "PM";
        }
        else if(hrs===0){
            hrs='12';
            ampm = "AM"
        }
        else if(hrs>=12){
            ampm = "PM";
            hrs = hrs - 12;
        }
    
        hrs = hrs<10? "0"+hrs:hrs;
        min = min<10? "0"+min:min;
        sec = sec<10? "0"+sec:sec;
    
        this.currentTime = `${hrs}:${min}:${sec} ${ampm}` 
        if(this.selectedTime ===`${hrs}:${min} ${ampm}`){
            console.log('Alarmed Triggered');
            this.alarmTriggered=true;
            this.ringtone.play();
        }
                  
        }, 1000);

        
    }

    createHoursArray(){
        for(let i=1;i<13;i++){
           let val= i<10?"0"+i:i;
           this.arrayOfHours.push(val);
        }
    }

    createMinsArray(){
        for(let i=0;i<60;i++){
           let val= i<10?"0"+i:i;
           this.arrayOfMins.push(val);
        }
    }

    optionHandler(event){
        const {label,value}=event.detail
        if(label==="Hour(s)"){
            this.selectedHour= value;

        }else if(label==="Minute(s)"){
            this.selectedMinute= value;

        }else if(label==="AM/PM"){
            this.selectedMer=value;
        }

        console.log('this.selectedHour: ', this.selectedHour);
        console.log('this.selectedMinute: ', this.selectedMinute);
        console.log('this.selectedMer: ', this.selectedMer);

    }

    setAlarmHandler(){
        this.selectedTime= `${this.selectedHour}:${this.selectedMinute} ${this.selectedMer}`;
        console.log(this.selectedTime)
        this.alarmSet=true;
        
    }

    clearAlarmHandler(){
        this.selectedTime='';
        this.alarmSet=false;
        this.ringtone.pause();
        this.alarmTriggered=false;
        
        const elements =this.template.querySelectorAll('c-clock-drop-down');
        //the elements variable contain nodes as qeryselector return type is nodes to change it to array we are using Array.from function.
        Array.from(elements).forEach(element=>{
            element.reset('');
        })


    }

 }
 
