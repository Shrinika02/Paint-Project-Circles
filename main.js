var mouse_event="empty";
var last_position_x, last_position_y;
color="black";
line_width=1;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    mouse_event="mousedown";

}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
current_position_x=e.clientX-canvas.offsetLeft
current_position_y=e.clientY-canvas.offsetTop
if(mouse_event=="mousedown"){ 
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth=line_width
    //ctx.moveTo( last_position_x, last_position_y)
    //ctx.lineTo (current_position_x, current_position_y)
    ctx.arc(current_position_x, current_position_y, 30, 0, 2*Math.PI)
    ctx.stroke();
}
last_position_x=current_position_x
last_position_y=current_position_y


}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouse_event="mouseup";

}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouse_event="mouseleave";

}
