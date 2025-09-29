console.log("Start working");

const nextpagebutton = document.getElementById("nextpagebutton");
const freefall = document.getElementById("freefall");

if(freefall){
  freefall.addEventListener("click", ()=>{
    engine.world.gravity.x = -1;
    Runner.run(runner, engine);
    nextpagebutton.classList.remove("d-none");
    freefall.classList.add("d-none");
  })
}

if(nextpagebutton){
  nextpagebutton.addEventListener("click", ()=>{
    window.location.href = "../pages_html/username.html";
    console.log("Next page button was pressed");
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
        background:'#bca89f',
        showVelocity: true
      }
});

const createtxt = (x, y, textContent, boxWidth, boxHeight) => {
    const fontSize = 32;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${boxWidth}" height="${boxHeight}">
        <rect x="0" y="0" width="${boxWidth}" height="${boxHeight}" 
              fill="%23ffd700" stroke="%23dc3545" stroke-width="3" rx="5"/>
        <text x="${boxWidth/2}" y="${boxHeight/2 + fontSize/3}" 
              font-family="Impact" font-size="${fontSize}" fill="%23000000" 
              text-anchor="middle">${textContent}</text>
      </svg>`;
    return Bodies.rectangle(x, y, boxWidth, boxHeight, {
        render: {
          friction: 0.5,
          restitution: 0.5,
          density: 0.005,
            sprite: {
                texture: `data:image/svg+xml;utf8,${svg}`,
                xScale: 1,
                yScale: 1
            }
        }
    });
};

const createtxt2 = (x, y, textContent, boxWidth, boxHeight) => {
    const fontSize = 32;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${boxWidth}" height="${boxHeight}">
        <rect x="0" y="0" width="${boxWidth}" height="${boxHeight}" 
              fill="%2300ff00" stroke="%23ff00ff" stroke-width="3" rx="5"/>
        <text x="${boxWidth/2}" y="${boxHeight/2 + fontSize/3}" 
              font-family="Cursive" font-size="${fontSize}" fill="%23000000" 
              text-anchor="middle">${textContent}</text>
      </svg>`;
    return Bodies.rectangle(x, y, boxWidth, boxHeight, {
        render: {
          friction: 0.5,
          restitution: 0.5,
          density: 0.005,
            sprite: {
                texture: `data:image/svg+xml;utf8,${svg}`,
                xScale: 1,
                yScale: 1
            }
        }
    });
};


const imagebox1Options = {render: {sprite:{texture: '../images/toothless1.jpg',}}}
const imagebox2Options = {render: {sprite:{texture: '../images/toothless3.webp',}}}

const borderOptions = {
    isStatic: true,
    render: {
        fillStyle: 'rgba(2, 0, 0, 0)',
    }
}
var halloword = createtxt2(w/2+400, h/2-250, "HALLOW", 600, 200);

var thisword = createtxt(50, h/2-300, "tHis", 80, 50);
var isword = createtxt2(200, h/2-300, "iS", 80, 30);
var toothlessword = createtxt(400, h/2-300, "tootHlEsS", 200, 100)

var toothlesswordy = createtxt(60, h/2, "Toothless", 150, 400);
var challenge = createtxt(150, h/2, "waNts", 80, 60);
var toword = createtxt2(300, h/2, "tO", 80, 200);
var challengeword = createtxt(500, h/2, "chaLlnge", 150, 50);

var youword = createtxt(70, h/2+150, "yoU", 80, 50);
var forword = createtxt2(200, h/2+150, "fOr", 80, 50);
var tttword = createtxt2(400, h/2+200, "tIctAktOE", 400, 60);

var border1 = Bodies.rectangle(w/2, h, w, 20, borderOptions);
var border2 = Bodies.rectangle(w/2, 0, w, 20, borderOptions);
var border3 = Bodies.rectangle(0, h/2, 20, h, borderOptions);
var border4 = Bodies.rectangle(w, h/2, 20, h, borderOptions);

var imagebox1 = Bodies.rectangle(w/2, h/2, 500, 500, {
    isStatic: false,
    friction: 0.8,
    restitution: 0.5,
    density: 0.005,
    render: imagebox1Options.render
});

var imagebox2 = Bodies.rectangle(w/2 + 500, h/2 + 150, 500, 500, {
    isStatic: false,
    friction: 0.5,
    restitution: 0.5,
    density: 0.005,
    render: imagebox2Options.render
});

const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: { stiffness: 0.2, render: { visible: false } }
});
Composite.add(world, mouseConstraint);
render.mouse = mouse;

Composite.add(engine.world, [imagebox1, imagebox2, border1, border2, border3, border4, thisword, isword, toothlessword, toothlesswordy, challenge, challengeword, toword, youword, forword, tttword, halloword])

Render.run(render);

var runner = Runner.create();
// Runner.run(runner, engine);

console.log("Stop Working");