"use strict";

const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events;

const width = 800;

const addbtn = document.querySelector('#add');
addbtn.addEventListener('click',addSquare);
     
function addSquare(event) {
    const newSquare = Bodies.rectangle(Math.floor(Math.random()*width),0,80,80);
    newSquare.restitution = 1;
    World.addBody(engine.world,newSquare);
}

function removeSquare(event) {
    console.log('removing square')
}

const engine = Engine.create();
 
const render = Render.create({
                element: document.body,
                engine: engine,
                options: {
                    width: width,
                    height: 400,
                    showAngleIndicator: true
                }
             });
              
const boxA = Bodies.rectangle(400, 200, 80, 80);
const ballA = Bodies.circle(380, 100, 40, 10);
const ballB = Bodies.circle(460, 10, 40, 10);
const ground = Bodies.fromVertices(400, 350, [[100,100],[200,100],[200,200],[100,200],[100,100]], {
    isStatic: true,
    render: {
        fillStyle: '#2e2b44',
        strokeStyle: '#2e2b44',
        lineWidth: 1
    }
}, true);
// const ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });

const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    })

Events.on(mouseConstraint, 'mousedown', function(event) {
    const mousePosition = event.mouse.position;
    if (mouseConstraint.body) {
        World.remove(engine.world,mouseConstraint.body)
    }
})



World.add(engine.world, mouseConstraint);
render.mouse = mouse;

World.add(engine.world, [boxA, ballA, ballB, ground]);
 
Engine.run(engine);
Render.run(render);