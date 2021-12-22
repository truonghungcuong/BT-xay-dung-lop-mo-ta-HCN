class Rectangle{
    x;
    y;
    long;
    width;
    constructor(x,y,long,width) {
        this.x=x;
        this.y=y;
        this.long;
        this.width;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getLong(){
        return this.long;
    }
    getWidth(){
       return  this.width;
    }
    setX(x){
       this.x=x;
    }
    setY(y){
        this.y=y;
    }
    setLong(long){
        this.long=long;
    }
    setWidth(width){
        this.width=width;
    }
    getPerimeter(){
        return (this.x+this.y)*2;
    }
    getArea(){
        return this.x*this.y;
    }
    getRandomHex(){
        return Math.floor(Math.random()*255);
    }
    getRandomColor(){
        let red=this.getRandomHex();
        let green=this.getRandomHex();
        let blue=this.getRandomHex();
        return "rgb("+red+","+green+","+blue+")";
    }
    createRectangle(ctx){
        ctx.beginPath()
        ctx.rect(rx,ry,long,width);
        ctx.fillStyle=color;
        ctx.fill();
    }
}