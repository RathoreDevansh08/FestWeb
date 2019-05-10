var canvas=document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c=canvas.getContext('2d');

//circle;
// var x=Math.random()*innerWidth;
// var y=Math.random()*innerHeight;
// var dx=Math.random()*10;
// var dy=Math.random()*10;

// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
    
//     c.beginPath();
//     c.arc(x,y,20,0,2*Math.PI,false);
//     c.strokeStyle ='brown';
//     c.stroke();
    
//     if(x>=innerWidth || x<=0)
//     {
//         dx=-(dx);
//     }
//     if(y>=innerHeight || y<=0)
//     {
//         dy=-(dy);
//     }
//     x=x+dx;
//     y=y+dy;
// }
// animate();
//////////////////////////////////////////////////////////////////////////////////////////
// var mouse={
//     x:undefined,
//     y:undefined
// }
// window.addEventListener('mousemove',function(event){
//        mouse.x=event.x;
//        mouse.y=event.y;
// })
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
var colorArray=[
    '#ffff00','#ff3300','#003399','#009933','#990000'
];
function Circle(x, y, dx, dy, radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        c.strokeStyle ='black';
        c.stroke();  
        
        c.fillStyle=this.color;
        c.fill();
        c.lineWidth = 5;
    }

    this.update=function(){
        
        if(this.y+this.radius+this.dy > innerHeight){
            this.dy=-this.dy*0.75;
        }else{
            this.dy+=1;
        }

        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
        
        this.draw();
    }
}

var circleArray=[];
for(var i=0;i<200;i++){
    var radius=Math.random()*50;
    var x=(Math.random()*(innerWidth-2*radius))+radius;
    var y=(Math.random()*(innerHeight-2*radius))+radius-30;
    //var dx=Math.random()*3;
    var dx=0;
    var dy=Math.random()*3;

    circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
}
animate();
/////////////////////////////////////////////////////////////////////////////////////////
