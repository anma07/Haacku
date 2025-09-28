console.log("Start working");

const nextpage = document.getElementById("nextpagebutton");

if(nextpage){
  nextpage.addEventListener("click", ()=>{
    window.location.href = "../pages_html/username.html";
  })
}

var Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Composite = Matter.Composite,
          Bodies = Matter.Bodies;

var engine = Engine.create();
const world = engine.world;

var w = window.innerWidth;
var h = window.innerHeight;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: w,
        height: h,
        wireframes: false,
        background: '#f5f5f5',
        showVelocity: true
      }
});

const borderOptions = {
    isStatic: true,
    render: {
        fillStyle: 'rgba(2, 0, 0, 0)',
    }
}

const upperboxOptions = {
  render: {
    fillStyle: 'blue',
  }
}

const imagebox1Options = {
  render: {
    sprite:{
      texture: '../images/toothless2.jpg',
    }
  }
}

// var box0 = Bodies.rectangle(x - 100, y - 100, 80, 80, boxOptions);
var upperbox1 = Bodies.rectangle(w/2, 40, 200, 120, upperboxOptions);
var upperbox2 = Bodies.rectangle(w/2+200, 40, 200, 120, upperboxOptions);
var upperbox3 = Bodies.rectangle(w/2+400, 40, 200, 120, upperboxOptions);
var upperbox4 = Bodies.rectangle(w/2+600, 40, 200, 120, upperboxOptions);
var upperbox5 = Bodies.rectangle(w/2+800, 40, 200, 120, upperboxOptions);
var upperbox6 = Bodies.rectangle(w/2-200, 40, 200, 120, upperboxOptions);
var upperbox7 = Bodies.rectangle(w/2-400, 40, 200, 120, upperboxOptions);
var upperbox8 = Bodies.rectangle(w/2-600, 40, 200, 120, upperboxOptions);
var upperbox9 = Bodies.rectangle(w/2-800, 40, 200, 120, upperboxOptions);

const Image = new Image();
Image.src = '../images/toothless2.jpg';
var imagebox1 = Bodies.rectangle(w/2, h/2, Image.width, Image.height, imagebox1Options);

var border1 = Bodies.rectangle(w/2, h, w, 20, borderOptions);
var border2 = Bodies.rectangle(w/2, 0, w, 20, borderOptions);
var border3 = Bodies.rectangle(0, h/2, 20, h, borderOptions);
var border4 = Bodies.rectangle(w, h/2, 20, h, borderOptions);

Composite.add(engine.world, [upperbox1, upperbox2, upperbox3, upperbox4, upperbox5, upperbox6, upperbox7, upperbox8, upperbox9, border1, border2, border3, border4, imagebox1]);

const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: { stiffness: 0.2, render: { visible: false } }
});
Composite.add(world, mouseConstraint);
render.mouse = mouse;

// Composite.add(engine.world);

Render.run(render);

var runner = Runner.create();
// Runner.run(runner, engine);

console.log("Stop Working");