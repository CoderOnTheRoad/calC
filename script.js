var buttons = document.getElementsByClassName("button");
var opbuttons=document.getElementsByClassName("edge");
var display=document.getElementById("display");
var op1=0;
var op2=null;
var operator=null;
var colorArr=["yellow","white"];
for(var i=0;i<buttons.length;i++){
    var data;
    var result=null;
    buttons[i].addEventListener('click',function(){
        for(var j=0;j<colorArr[j];j++){
        this.style.backgroundColor=colorArr[j];
        }
        
        data=this.getAttribute("data-value");
        // console.log(data);
        display.innerText+=data;
        if(data=="+"||data=="-"||data=="*"||data=="/"){
            op1=parseFloat(display.innerText);
            display.innerText="";
            operator=data;


        }else if(data=="="){
            op2=parseFloat(display.innerText);
            if(operator==null){
                op1=0;
                result=op1+op2;
            }else{
            result=eval(op1+""+operator+""+op2);
            }
            display.innerText=result;
            op1=result;
            op2=null;
        }else if(data=="AC"){
            display.innerText="";
            op1=0;
            op2=null;
            operator==null;
        }else if(data=="%"){
            if(result==null){

            }else{
                result=result/100;
                display.innerText=result;
                op2=op2/100;
            }
        }else if(data=="+/-"){
                display.innerText=0-parseFloat(display.innerText);
        }



    });
    
}