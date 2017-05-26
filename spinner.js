var tl = new TimelineLite();

TweenLite.set("circle",{stroke:"red",strokeWidth:4});

tl.from("circle", 1, {drawSVG:0})