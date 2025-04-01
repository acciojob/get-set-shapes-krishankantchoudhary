//complete this code
class Rectangle {
	constructor(width, height){
		this.width=width;
		this.height=height;
	}
	
	get width(){
		return this.width;
	}

	get height(){
		return this.height;
	}

	getArea(){
		return this.width*this.height;
	}
}

class Square extends Animal {
	constructor(side) {
		super(side,side)
	}

	getPerimeter(){
		return 4*this.side;
	}
}

const myRectangle=new Rectangle(5,10);
console.log(myRectangle.getArea());

const mySquare=new Square(6);
console.log(mySquare.getPerimeter());
console.log(mySquare.getArea());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
