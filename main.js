gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#smoothContent",
        smooth: 1.3,
        effects:true
    });







gsap.registerPlugin(Draggable) 
      Draggable.create("#eye1", {
              type: "xy",
              inertia: false,
                  edgeResistance: 0.65,
              
              onPress: function() {
                  gsap.to(this.target, { scale: 4, duration: 0.4, rotation: 0, ease: "bounce", mixBlendMode: "difference" });
              },
              onRelease: function() {
                  gsap.to(this.target, { scale: 1, duration: 0.4, rotation: 0, ease: "bounce", mixBlendMode: "difference" });
              }
              });

              gsap.registerPlugin(Draggable) 
      Draggable.create("#eye2", {
              type: "xy",
              inertia: false,
                  edgeResistance: 0.65,
              
              onPress: function() {
                  gsap.to(this.target, { scale: 4, duration: 0.4, rotation: 0, ease: "bounce" });
              },
              onRelease: function() {
                  gsap.to(this.target, { scale: 1, duration: 0.4, rotation: 0, ease: "bounce" });
              }
              });

    document.getElementById('titleText1').style.transform = 'scale(0)';
    document.getElementById('startBtn').addEventListener('click', function() {
    const audio = document.getElementById('BGmusic');
    audio.currentTime = 0;
    audio.play();

    document.getElementById('titlegif').style.transform = "translateY(-12vw)";
    document.getElementById('titlegif').style.transition = "transform 1.5s cubic-bezier(.68,-0.55,.27,1.55)";

    
    document.getElementById('startBtn').style.transform = "scale(0)";

    document.getElementById('titleText1').style.transition = "transform 2.5s cubic-bezier(.68,-0.55,.27,1.55)";
    document.getElementById('titleText1').style.transform = "scale(1)";
});



  const muteBtn = document.getElementById('mute');
const unmuteBtn = document.getElementById('unmute');

unmuteBtn.style.display = 'none'; 

muteBtn.onclick = function() {
  document.querySelectorAll('audio').forEach(audio => audio.muted = true);
  muteBtn.style.display = 'none';
  unmuteBtn.style.display = 'inline-block';
};

unmuteBtn.onclick = function() {
  document.querySelectorAll('audio').forEach(audio => audio.muted = false);
  unmuteBtn.style.display = 'none';
  muteBtn.style.display = 'inline-block';
}; 

 gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

  gsap.to("#line4", {
    duration: 2,
    scrambleText: {
      text: "They say:",
      chars: "upperAndLowerCase",
      revealDelay: 0.5,
      speed: 1,
    },
    scrollTrigger: {
      trigger: "#line4",
     
      toggleActions: "restart reverse play reverse"
    }
  });

  gsap.from("#bookgif", {
    duration: 0.5,
    ease: "bounce",
    scale: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#bookgif",
      start: "top 100%",
     
      toggleActions: "restart reverse play reverse"
    }
  });

  gsap.registerPlugin(Draggable) 
    Draggable.create(".whiteblock", {
            type: "x",
            inertia: false,
                edgeResistance: 0.65,
            bounds: {top: 100, left: 0, width: 2560, height: 98000},
           
            });

gsap.registerPlugin(ScrollTrigger)
gsap.utils.toArray(".whiteblock").forEach(function(block) {
  gsap.from(block, {
    duration: 1.25,
    ease: "easeInOut",
    scale: 0,
    scrollTrigger: {
      trigger: block,
      start: "top 100%",
      toggleActions: "restart reverse play reverse"
    }
  });
});





  
       

  

  gsap.registerPlugin(Draggable) 
            Draggable.create(".digimg", {
                    type: "xy",
                    inertia: true,
                        edgeResistance: 0.65,
                    bounds: {top: 100, left: 0, width: 2560, height: 98000},
                   
                    onPress: function() {
                        gsap.to(this.target, { scale: 1.5, duration: 0.4, rotation: 0, ease: "bounce" });
                    },
                    onRelease: function() {
                        gsap.to(this.target, { scale: 1, duration: 0.4, ease: "bounce"});
                    }
                    });
        
gsap.registerPlugin(ScrollTrigger)
gsap.utils.toArray("#line20, #line21, #line22, #line23, #line24, #line25").forEach(function(digtext) {
  gsap.from(digtext, {
    duration: 1,
    ease: "easeInOut",
    letterSpacing: "-1em",
    opacity: 0,
    scrollTrigger: {
      trigger: digtext,
      start: "top 100%",
      toggleActions: "restart reverse play reverse"
    }
  });
});

  

   gsap.from("#skygif", {
    duration: 1.5,
    ease: "easeInOut",
    opacity: 0,
    mixBlendMode: "normal",
    delay: 1,
    scrollTrigger: {
      trigger: "#skygif",
      start: "top 100%",
      
      toggleActions: "restart reverse play reverse"
    }
  });

  gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

  gsap.from("#line32, #line33", {
    duration: 1.5,
    scrambleText: {
      text: "abcdefghijklmnop:",
      chars: "lowerCase",
      revealDelay: 0,
      speed: 1,
    },
    scrollTrigger: {
      trigger: "#line32, #line33",
     
      toggleActions: "restart reverse play reverse"
    }
  });


  gsap.registerPlugin(Draggable);
  
  
  const clockSound = document.getElementById('clockSound');
  
  Draggable.create("#clockhand", {
    type: "rotation",
    inertia: false,
     edgeResistance: 0.65,
     onDragStart: function() {
      clockSound.play();
    },
    onDrag: function() {
     
      let rotation = this.rotation % 360;
      if (rotation < 0) rotation += 360;
      
      
      gsap.set("#timegif, #clock", {
        filter: `hue-rotate(${rotation}deg)`
      });
    },
      onPress: function() {
      clockSound.play();
      
      gsap.to(this.target, { 
        scale: 1.55, 
        duration: 0.4,  
        ease: "bounce" 
      });
    },
      onRelease: function() {
      gsap.to(this.target, { 
        scale: 1, 
        duration: 0.4,  
        ease: "bounce" 
      });
      clockSound.pause();
      clockSound.currentTime = 0;
      
 
    }
  });

   gsap.from("#eyegif", {
    duration: 1.5,
    ease: "easeInOut",
    scale: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#eyegif",
      start: "top 70%",
      
      toggleActions: "restart reverse play reverse",
      
    }
  });

  gsap.from("#eyegif2", {
    duration: 1.5,
    ease: "easeInOut",
    scale: 0,
    delay: 0.25,
    scrollTrigger: {
      trigger: "#eyegif2",
      start: "top 70%",
      
      toggleActions: "restart reverse play reverse",
      
    }
  });

  gsap.from("#eyegif3", {
    duration: 1.5,
    ease: "easeInOut",
    scale: 0,
    delay: 0,
    scrollTrigger: {
      trigger: "#eyegif3",
      start: "top 70%",
      
      toggleActions: "restart reverse play reverse",
      
    }
  });

    gsap.registerPlugin(Draggable,ScrambleTextPlugin);

  


  Draggable.create(".dragNum", {
    type: "xy",
    inertia: false,
    edgeResistance: 0.65,
    onPress: function() {
      gsap.to(this.target, { scale: 4, duration: 0.4, rotation: 15, ease: "bounce" });
      gsap.from(this.target, {
        duration: 1.5,
        scrambleText: {
          
          chars: "lowerCase",
          revealDelay: 0,
          speed: 1,
        }
      });
    },
    onRelease: function() {
      gsap.to(this.target, { scale: 1, duration: 0.4, rotation: 0, ease: "bounce"});
    }
  });

    gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

  gsap.from("#line45, #line44", {
    duration: 2,
    scrambleText: {
      text: "abcdefghijklmnopqrstuvwxyz",
      chars: "lowerCase",
      revealDelay: 0.5,
      speed: 1,
    },
    scrollTrigger: {
      trigger: "#line45, #line44",
      start: "top 70%",
      
      toggleActions: "restart reverse play reverse"
    }
  });

    gsap.registerPlugin(Draggable) 
            Draggable.create(".note", {
                    type: "xy",
                    inertia: false,
                        edgeResistance: 0.65,
                    
                    onPress: function() {
                        gsap.to(this.target, { scale: 4, duration: 0.4, rotation: 0, ease: "bounce" });
                    },
                    onRelease: function() {
                        gsap.to(this.target, { scale: 1, duration: 0.4, rotation: 0, ease: "bounce"});
                    }
                    });

    document.getElementById('line51').addEventListener('mouseenter', function() {
    const audio = document.getElementById('hover-soundC');
    audio.currentTime = 0;
    audio.play();
});
document.getElementById('line52').addEventListener('mouseenter', function() {
    const audio = document.getElementById('hover-soundD');
    audio.currentTime = 0;
    audio.play();
});
document.getElementById('line53').addEventListener('mouseenter', function() {
    const audio = document.getElementById('hover-soundE');
    audio.currentTime = 0;
    audio.play();
});
document.getElementById('line54').addEventListener('mouseenter', function() {
    const audio = document.getElementById('hover-soundF');
    audio.currentTime = 0;
    audio.play();
});
document.getElementById('clefline1').addEventListener('mouseenter', function() {
    const audio = document.getElementById('hover-soundA');
    audio.currentTime = 0;
    audio.play();
});

document.getElementById('clefline2').addEventListener('mouseenter', function() {
    const audio = document.getElementById('hover-soundA');
    audio.currentTime = 0;
    audio.play();
});

document.getElementById('clefline3').addEventListener('mouseenter', function() {
    const audio = document.getElementById('hover-soundA');
    audio.currentTime = 0;
    audio.play();
});

document.getElementById('clefline4').addEventListener('mouseenter', function() {
    const audio = document.getElementById('hover-soundA');
    audio.currentTime = 0;
    audio.play();
});

  gsap.to("#line55", {
    duration: 3,
    scrambleText: {
      text: "i feel space in silence and guidance in space",
      chars: "lowerCase",
      revealDelay: 0.5,
      speed: 1,
    },
    scrollTrigger: {
      trigger: "#line55",
     
      toggleActions: "restart reverse play reverse"
    }
  });

  gsap.to("#line58", {
    duration: 2,
    scrambleText: {
      text: "i see a different kind of pattern.",
      chars: "lowerCase",
      revealDelay: 0.5,
      speed: 1,
    },
    scrollTrigger: {
      trigger: "#line58",
     
      toggleActions: "restart reverse play reverse"
    }
  });

   gsap.registerPlugin(Draggable) 
            Draggable.create(".drag", {
                    type: "xy",
                    inertia: false,
                        edgeResistance: 0.65,
                    
                    onPress: function() {
                        gsap.to(this.target, { scale: 2.5, duration: 0.4, rotation: 0, ease: "bounce" });
                    },
                    onRelease: function() {
                        gsap.to(this.target, { scale: 1, duration: 0.4, rotation: 0, ease: "bounce"});
                    }
                    });

document.getElementById('BGmusic').volume = 0.7;