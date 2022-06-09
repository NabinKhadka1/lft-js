class Point{
    constructor(x,y,width,height,border,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.border = border;
        this.color = color;
        this.element = document.createElement('div')

    }
    create(){
        this.element.style.top = `${this.x}px`;
        this.element.style.left = `${this.y}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.borderRadius = `${this.border}px`;
        this.element.style.backgroundColor = `${this.color}`
        this.element.style.position = 'absolute';


        const createContainer = document.createElement('div')
        createContainer.appendChild(this.element);
        
        const body = document.querySelector('body')
        body.style.position = 'relative';
        body.appendChild(createContainer);

        this.element.addEventListener('click',()=>{
            console.log(this.element);
            createContainer.removeChild(this.element);
        })

    }
}
let point1 = new Point(20,20,20,20,15,'#000');
point1.create();

let point2 = new Point(60,30,20,20,15,'#098');
point2.create();

let point3 = new Point(90,50,20,20,15,'#054');
point3.create();

let point4 = new Point(100,300,20,20,15,'#598');
point4.create();

let point5 = new Point(400,150,20,20,15,'#954');
point5.create();

let point6 = new Point(200,170,20,20,15,'#954');
point6.create();

let point7 = new Point(300,190,20,20,15,'#954');
point7.create();