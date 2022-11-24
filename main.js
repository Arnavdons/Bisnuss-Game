canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
number=document.getElementById("number")
number_1=2;
number_2=12;
chance=1;



//background_image="Bisinuss_game.jpg";
red="Red_token.jpg";
blue="Blue_Token.png";
green="Green_token.jpg";
yellow="Yello_token.jpg";


function add(){
    red_imgTag = new Image(); 
	red_imgTag.onload = uploadred; 
	red_imgTag.src = red;   

    green_imgTag = new Image(); 
	green_imgTag.onload = uploadgreen; 
	green_imgTag.src = green;

    blue_imgTag = new Image(); 
	blue_imgTag.onload = uploadblue; 
	blue_imgTag.src = blue;

    yellow_imgTag = new Image(); 
	yellow_imgTag.onload = uploadyellow; 
	yellow_imgTag.src = yellow;
}


function uploadred() {
	ctx.drawImage(red_imgTag,30,700,30,50);
}

function uploadgreen(){
ctx.drawImage(green_imgTag,70,700,30,50);
}

function uploadblue(){
ctx.drawImage(blue_imgTag,80,700,30,50);
}

function uploadyellow(){
ctx.drawImage(yellow_imgTag,120,700,40,50);
}


function my_token_up(e){
number=e.keyCode;
console.log(keypress);

if(number=="2"){
red_up_1();
}

if(number=="3"){
red_up_2();
}

if(number=="4"){
red_up_3();
}

if(number=="5"){
red_up_4();
}

if(number=="6"){
red_up_5();
}

if(number=="7"){
red_up_6();
}

if(number=="8"){
red_up_7();
}

if(number=="9"){
red_up_8();
}

}


function my_token_right(e){
number=e.keyCode;
console.log(keypress);
if(red_y=="300"){
if(number=="2"){
red_right_1();
}
    
if(number=="3"){
red_right_2();
}
    
if(number=="4"){
red_right_3();   
}
    
if(number=="5"){
red_right_4(); 
}

if(number=="6"){
red_right_5();
}
    
if(number=="7"){
red_right_6(); 
}
    
if(number=="8"){
red_right_7();
}

if(number=="9"){
red_right_8();
}
    
}
}



function my_token_down(e){
console.log(keypress);
if(red_x=="2800"){
if(number=="2"){
       
}
        
if(number=="3"){
        
}
        
if(number=="4"){
        
}
        
if(number=="5"){
        
}
        
if(number=="6"){
        
}
        
if(number=="7"){
        
}
        
if(number=="8"){
        
}
        
if(number=="9"){

}
    }
}

function my_token_left(e){
number=e.keyCode;
console.log(keypress);
if(red_y=="2600"){
if(number=="2"){
            
}
            
if(number=="3"){

}
            
if(number=="4"){
            
}
            
if(number=="5"){
            
}
            
if(number=="6"){
            
}
            
if(number=="7"){
            
}
            
if(number=="8"){
          
}
            
if(number=="9"){
           
}
            

}
}



//function red_update(){
//fabric.Image.fromURL("Red_token.png",function(Img){
//red_object=Img;
//red_object.scaleToWidth(150);
//red_object.scaleToHeight(140);
//red_object.set({
//top:red_y,
//left:red_x
//});
//canvas.add(red_object);
//});
//}




function red_up_1(){
if(red_y>2800){
red_y=red_y-200;
uploadbackground();
uploadred();
red_update();
}
}

function red_up_2(){
if(red_y>2810){
red_y=red_y-300;
uploadbackground();
uploadred();
red_update();
}
}

    
function red_up_3(){
if(red_y>2820){
red_y=red_y-400;
uploadbackground();
uploadred();
red_update();
}
}

function red_up_4(){
if(red_y>2830){
red_y=red_y-500;
uploadbackground();
uploadred();
red_update();
}
}

function red_up_5(){
if(red_y>2840){
red_y=red_y-600;
uploadbackground();
uploadred();
red_update();
}
}
    
function red_up_6(){
if(red_y>2850){
red_y=red_y-700;
uploadbackground();
uploadred();
red_update();
}
}
    
        
function red_up_7(){
if(red_y>2860){
red_y=red_y-800;
uploadbackground();
uploadred();
red_update();
}
}
    
function red_up_8(){
if(red_y>2870){
red_y=red_y-900;
uploadbackground();
uploadred();
red_update();
}
}









function red_right_1(){
if(red_y>900){
red_x=red_x-200;
uploadbackground();
uploadred();
red_update();
}
}
    
function red_right_2(){
if(red_y>900){
red_x=red_x-300;
uploadbackground();
uploadred();
red_update();
}
}
    
        
function red_right_3(){
if(red_y>900){
red_x=red_x-400;
uploadbackground();
uploadred();
red_update();
}
}
    
function red_right_4(){
if(red_y>900){
red_x=red_x-500;
uploadbackground();
uploadred();
red_update();
}
}
    
function red_right_5(){
if(red_y>900){
red_x=red_x-600;
uploadbackground();
uploadred();
red_update();
}
}
        
function red_right_6(){
if(red_y>900){
red_x=red_x-700;
uploadbackground();
uploadred();
red_update();
}
}
               
function red_right_7(){
if(red_y>900){
red_x=red_x-800;
uploadbackground();
uploadred();
red_update();
}
}
        
function red_right_8(){
if(red_y>900){
red_x=red_x-900;
uploadbackground();
uploadred();
red_update();
}
}
    
function roll(){
document.getElementById("number").innerHTML=Math.floor(Math.random()*13);
chance=chance+1;
console.log(chance);
if(chance==2){
	document.getElementById("chance").innerHTML="Chance - green";
	}
	if(chance==3){
	document.getElementById("chance").innerHTML="Chance - yellow";
	}
	if(chance==4){
	document.getElementById("chance").innerHTML="Chance - red";
	}
	if(chance==5){
	document.getElementById("chance").innerHTML="Chance - blue";
	}
	if(chance==5){
	chance=2;
	}
}
	
function red_down_1(){
red_y=red_y+200;
uploadbackground();
uploadred();
red_update();
}
	
function red_down_2(){

red_y=red_y+300;
uploadbackground();
uploadred();
red_update();
}

	
		
function red_down_3(){
red_y=red_y+400;
uploadbackground();
uploadred();
red_update();
}

	
function red_down_4(){
red_y=red_y+500;
uploadbackground();
uploadred();
red_update();
}
	
function red_down_5(){
red_y=red_y+600;
uploadbackground();
uploadred();
red_update();
}

		
function red_down_6(){
red_y=red_y+700;
uploadbackground();
uploadred();
red_update();
}

		
			
function red_down_7(){

red_y=red_y+800;
uploadbackground();
uploadred();
red_update();
}

		
function red_down_8(){
red_y=red_y+900;
uploadbackground();
uploadred();
red_update();
}

	
	
	
	
	
	
	
	
	
function red_left_1(){
if(red_y>900){
red_x=red_x+200;
uploadbackground();
uploadred();
red_update();
}
}
		
function red_left_2(){
if(red_y>900){
red_x=red_x+300;
uploadbackground();
uploadred();
red_update();
}
}
		
			
function red_left_3(){
if(red_y>900){
red_x=red_x+400;
uploadbackground();
uploadred();
red_update();
}
}
		
function red_left_4(){
if(red_y>900){
red_x=red_x+500;
uploadbackground();
uploadred();
red_update();
}

else if(blue_y>900){
	red_x=red_x+500;
	uploadbackground();
	uploadred();
	red_update();
	}
}
		
function red_left_5(){
if(red_y>900){
red_x=red_x+600;
uploadbackground();
uploadred();
red_update();
}
}
			
function red_left_6(){
if(red_y>900){
red_x=red_x+700;
uploadbackground();
uploadred();
red_update();
}
}
				   
function red_left_7(){
if(red_y>900){
red_x=red_x+800;
uploadbackground();
uploadred();
red_update();
}
}
		
function red_left_8(){
if(red_y>900){
red_x=red_x+900;
uploadbackground();
uploadred();
red_update();
}
}