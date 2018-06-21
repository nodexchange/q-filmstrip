
"use strict";
window.onload = function(){
	
	init();
	reset();
	TweenMax.delayedCall(0,startBanner);
	

}

var del = 4;
var loops = 2;
var loopCount = 0;
var ctaOn = false;

function init(){
	container.addEventListener("click", staticEndFrame);

	btn.addEventListener("mouseover", mOver);
	btn.addEventListener("mouseout", mOut);


}

function reset(){
	ctaOn = false;
	TweenMax.set([copy1a],{opacity:0,scale:0.8,transformOrigin: "486px 45px"})
	TweenMax.set([copy1,copy2],{opacity:0})
	TweenMax.set([cta],{scale:0,transformOrigin: "656px 35px"})
	TweenMax.set([losenge],{scale:0,transformOrigin: "538px 43px",perspective:2000,rotationY:0})
}
function startBanner(){
	container.style.visibility='visible';
	TweenMax.set([container], {opacity:0})
	TweenMax.to([container],1, {opacity:1})
	part1();
}


function part1(){
	TweenMax.set([cover],{opacity:0})
	TweenMax.to([copy1],1,{opacity:1})
	TweenMax.set([copy1a],{opacity:1,delay:1.5})
	 TweenMax.to(copy1a, .5, {scale:1,delay:1.5, ease:Back.easeOut}); 
	TweenMax.delayedCall(4,part2);
}
function part2(){
	TweenMax.to([copy1,copy1a],1, {opacity:0,delay:0})
	TweenMax.to([copy2],0.25, {opacity:1,delay:1})
	 TweenMax.to(losenge, .5, {scale:1,delay:2, ease:Back.easeOut}); 
	  TweenMax.to(cta, .5, {scale:1,delay:3, ease:Back.easeOut,onComplete:showBounce}); 
	  	TweenMax.to(losenge, 2, {rotationY: 360,delay:4,ease:Back.easeInOut});

	  	TweenMax.to(losenge, 2, {rotationY: 720,delay:8,ease:Back.easeInOut});
	  	loopCount++;
	  	if(loopCount != loops){
	  		TweenMax.delayedCall(11,part3);
	  	}
}

function part3(){
	TweenMax.to([cover],0.5,{opacity:1,onComplete:part4})
}
function part4(){
	reset();
	part1();
}


function showBounce(){
	ctaOn = true;
}
function staticEndFrame(){
	ADGEAR.html5.clickThrough("clickTAG");

}
function mOver(){
 if (ctaOn == true){
 	TweenMax.to(cta, .25, {scale:1.2,ease:Back.easeOut}); 
 }


}
function mOut(){
 if (ctaOn == true){
 	TweenMax.to(cta, .25, {scale:1,ease:Back.easeOut}); 
 }

}


function endBanner(){

	console.log("END BANNER")
	TweenMax.killAll();
}
