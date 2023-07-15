var crsr = document.querySelector(".cursor");
document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x+'px'
    crsr.style.top = dets.y+'px'
    blur.style.left = dets.x-130+'px'
    blur.style.top = dets.y-130+'px'
})

var blur = document.querySelector(".cursor-blr");

var h4s = document.querySelectorAll(".nav h4");
h4s.forEach(function(elems){
    elems.addEventListener('mouseenter',function(){
        crsr.style.scale = 3;
        crsr.style.border = '2px solid #fff';
        crsr.style.backgroundColor= 'transparent';
     } )
     elems.addEventListener('mouseleave',function(){
        crsr.style.scale = 1;
        crsr.style.border = '0px solid #95c11e';
        crsr.style.backgroundColor= '#95c11e';
     } )
   
})
gsap.from(".about-us img,.about-us-in",{
    y:50,
    opacity:0,
    duration:5,
    staggerd:0.4,
    scrollTrigger:{
        scroller:'body',
        trigger:'.about-us',
        start: 'top 60%',
        end: 'top 58%',
        scrub: 4
    }
})
// gsap.from(".card",{
//     y:50,
//     opacity:0,
//     duration:5,
//     staggerd:0.4,
//     scrollTrigger:{
//         scroller:'body',
//         trigger:'.card',
//         start: 'top 60%',
//         end: 'top 58%',
//         scrub: 4
//     }
// })
gsap.from(" #img1",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:'#img1',
        scroller:'body',
        // markers: true,
        start: 'top 45%',
        end: 'top 55%',
        scrub: 4
    }
})



gsap.to('.nav',{
    backgroundColor : '#000',
    height: '90px',
    duration: '0.5',
    scrollTrigger:{
        trigger: '.nav',
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'bottom -11',
        toggleActions: 'play reverse play reverse',
        scrub: 1
        
    }

})
gsap.to(".main",{
    backgroundColor : '#000',
       
        scrollTrigger:{
            trigger: '.main',
            scroller: 'body',
            // markers: true,
            start: 'top -25%',
            end: 'top -70%',
            scrub: 2
        }
})