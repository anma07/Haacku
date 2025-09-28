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

// const createtxt = (x, y, textContent, boxWidth, boxHeight) => {
//     const fontSize = 32;
//     return Bodies.rectangle(x, y, boxWidth, boxHeight, {
//         friction: 0.8,
//         restitution: 0.3,
//         density: 0.005,
//         render: {
//             sprite: {
//                 texture: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${boxWidth}" height="${boxHeight}"><rect x="0" y="0" width="${boxWidth}" height="${boxHeight}" fill="%23ffd700" stroke="%23dc3545" stroke-width="3" rx="5"/><text x="${boxWidth/2}" y="${boxHeight/2 + fontSize/3}" font-family="Arial" font-size="${fontSize}" fill="%23000000" text-anchor="middle">${encodeURIComponent(textContent)}</text></svg>`,
//                 xScale: 1,
//                 yScale: 1
//             }
//         }
//     });
// };

// const createtxt2 = (x, y, textContent, boxWidth, boxHeight) => {
//     const fontSize = 32;
//     return Bodies.rectangle(x, y, boxWidth, boxHeight, {
//         friction: 0.8,
//         restitution: 0.3,
//         density: 0.005,
//         render: {
//             sprite: {
//                 texture: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${boxWidth}" height="${boxHeight}"><rect x="0" y="0" width="${boxWidth}" height="${boxHeight}" fill="#00ff00" stroke="#ff00ff" stroke-width="3" rx="5"/><text x="${boxWidth/2}" y="${boxHeight/2 + fontSize/3}" font-family="Arial" font-size="${fontSize}" fill="%23000000" text-anchor="middle">${encodeURIComponent(textContent)}</text></svg>`,
//                 xScale: 1,
//                 yScale: 1
//             }
//         }
//     });
// };

const createtxt = (x, y, textContent, boxWidth, boxHeight) => {
    const fontSize = 32;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${boxWidth}" height="${boxHeight}">
        <rect x="0" y="0" width="${boxWidth}" height="${boxHeight}" 
              fill="%23ffd700" stroke="%23dc3545" stroke-width="3" rx="5"/>
        <text x="${boxWidth/2}" y="${boxHeight/2 + fontSize/3}" 
              font-family="Arial" font-size="${fontSize}" fill="%23000000" 
              text-anchor="middle">${textContent}</text>
      </svg>`;
    return Bodies.rectangle(x, y, boxWidth, boxHeight, {
        render: {
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
var tttword = createtxt2(400, h/2+200, "tIctAktOs", 400, 60);

var border1 = Bodies.rectangle(w/2, h, w, 20, borderOptions);
var border2 = Bodies.rectangle(w/2, 0, w, 20, borderOptions);
var border3 = Bodies.rectangle(0, h/2, 20, h, borderOptions);
var border4 = Bodies.rectangle(w, h/2, 20, h, borderOptions);

var imagebox1 = Bodies.rectangle(w/2, h/2, 1000, 1000, imagebox1Options);
var imagebox2 = Bodies.rectangle(w/2+500, h/2+150, 1000, 1000, imagebox2Options);

const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: { stiffness: 0.2, render: { visible: false } }
});
Composite.add(world, mouseConstraint);
render.mouse = mouse;

Composite.add(engine.world, [imagebox1, imagebox2, border1, border2, border3, border4, thisword, isword, toothlessword, toothlesswordy, challenge, toword, youword, forword, tttword, halloword])

Render.run(render);

var runner = Runner.create();
Runner.run(runner, engine);

console.log("Stop Working");