

function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" tag since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector(".page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector(".page2>h1").innerHTML = clutter;
})

gsap.to(".page2>h1>span",{
  scrollTrigger:{
      trigger:`.page2>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})

function canvas(){

const canvas = document.querySelector(".page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
  ./Magma/frames00007.png
  ./Magma/Magma/frames00010.png
  ./Magma/frames00013.png
  ./Magma/frames00016.png
  ./Magma/frames00019.png
  ./Magma/frames00022.png
  ./Magma/frames00025.png
  ./Magma/frames00028.png
  ./Magma/frames00031.png
  ./Magma/frames00034.png
  ./Magma/frames00037.png
  ./Magma/frames00040.png
  ./Magma/frames00043.png
  ./Magma/frames00046.png
  ./Magma/frames00049.png
  ./Magma/frames00052.png
  ./Magma/frames00055.png
  ./Magma/frames00058.png
  ./Magma/frames00061.png
  ./Magma/frames00064.png
  ./Magma/frames00067.png
  ./Magma/frames00070.png
  ./Magma/frames00073.png
  ./Magma/frames00076.png
  ./Magma/frames00079.png
  ./Magma/frames00082.png
  ./Magma/frames00085.png
  ./Magma/frames00088.png
  ./Magma/frames00091.png
  ./Magma/frames00094.png
  ./Magma/frames00097.png
  ./Magma/frames00100.png
  ./Magma/frames00103.png
  ./Magma/frames00106.png
  ./Magma/frames00109.png
  ./Magma/frames00112.png
  ./Magma/frames00115.png
  ./Magma/frames00118.png
  ./Magma/frames00121.png
  ./Magma/frames00124.png
  ./Magma/frames00127.png
  ./Magma/frames00130.png
  ./Magma/frames00133.png
  ./Magma/frames00136.png
  ./Magma/frames00139.png
  ./Magma/frames00142.png
  ./Magma/frames00145.png
  ./Magma/frames00148.png
  ./Magma/frames00151.png
  ./Magma/frames00154.png
  ./Magma/frames00157.png
  ./Magma/frames00160.png
  ./Magma/frames00163.png
  ./Magma/frames00166.png
  ./Magma/frames00169.png
  ./Magma/frames00172.png
  ./Magma/frames00175.png
  ./Magma/frames00178.png
  ./Magma/frames00181.png
  ./Magma/frames00184.png
  ./Magma/frames00187.png
  ./Magma/frames00190.png
  ./Magma/frames00193.png
  ./Magma/frames00196.png
  ./Magma/frames00199.png
  ./Magma/frames00202.png

`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `.page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: ".page3",
  pin: true,
  scroller: `main`,
  start: `top top`,
  end: `250% top`,
});
};
canvas()


var clutter = ""

document.querySelector(".page4>h1").textContent.split("").forEach(function(dets){

 clutter +=  `<span>${dets}</span>`;

 document.querySelector(".page4>h1").innerHTML = clutter

});


gsap.to(".page4>h1>span",{

  scrollTrigger:{
    trigger:`.page4>h1>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`main`,
    scrub:.5,
},
 stagger:.2,
  color:`#fff`
})


function canvas1(){
  const canvas = document.querySelector(".page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./Magma/bridges00004.png
./Magma/bridges00007.png
./Magma/bridges00010.png
./Magma/bridges00013.png
./Magma/bridges00016.png
./Magma/bridges00019.png
./Magma/bridges00022.png
./Magma/bridges00025.png
./Magma/bridges00028.png
./Magma/bridges00031.png
./Magma/bridges00034.png
./Magma/bridges00037.png
./Magma/bridges00040.png
./Magma/bridges00043.png
./Magma/bridges00046.png
./Magma/bridges00049.png
./Magma/bridges00052.png
./Magma/bridges00055.png
./Magma/bridges00058.png
./Magma/bridges00061.png
./Magma/bridges00064.png
./Magma/bridges00067.png
./Magma/bridges00070.png
./Magma/bridges00073.png
./Magma/bridges00076.png
./Magma/bridges00079.png
./Magma/bridges00082.png
./Magma/bridges00085.png
./Magma/bridges00088.png
./Magma/bridges00091.png
./Magma/bridges00094.png
./Magma/bridges00097.png
./Magma/bridges00100.png
./Magma/bridges00103.png
./Magma/bridges00106.png
./Magma/bridges00109.png
./Magma/bridges00112.png
./Magma/bridges00115.png
./Magma/bridges00118.png
./Magma/bridges00121.png
./Magma/bridges00124.png
./Magma/bridges00127.png
./Magma/bridges00130.png
./Magma/bridges00133.png
./Magma/bridges00136.png
./Magma/bridges00139.png
./Magma/bridges00142.png
./Magma/bridges00145.png
./Magma/bridges00148.png
./Magma/bridges00151.png
./Magma/bridges00154.png
./Magma/bridges00157.png
./Magma/bridges00160.png
./Magma/bridges00163.png
./Magma/bridges00166.png
./Magma/bridges00169.png
./Magma/bridges00172.png
./Magma/bridges00175.png
./Magma/bridges00178.png
./Magma/bridges00181.png
./Magma/bridges00184.png
./Magma/bridges00187.png
./Magma/bridges00190.png
./Magma/bridges00193.png
./Magma/bridges00196.png
./Magma/bridges00199.png
./Magma/bridges00202.png
`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `.page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: ".page5",
pin: true,
scroller: `main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()


var clutter = ""

document.querySelector(".page6>h1").textContent.split("").forEach(function(dets){

 clutter +=  `<span>${dets}</span>`;

 document.querySelector(".page6>h1").innerHTML = clutter

});


gsap.to(".page6>h1>span",{
  scrollTrigger:{
      trigger:`.page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})
