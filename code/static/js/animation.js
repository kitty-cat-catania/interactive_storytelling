
// this class describes the properties of a single particle.
class Particle {
	// setting the co-ordinates, radius and the
	// speed of a particle in both the co-ordinates axes.
	  constructor(){
	    this.x = random(0,width);
	    this.y = random(0,height);
	    this.r = random(1,1);
	    this.xSpeed = random(-.02,.02);
	    this.ySpeed = random(-.02,.02);
	  }
	
	// creation of a particle.
	  createParticle() {
	    noStroke();
	    fill('rgba(255,255,255,1)');
	    circle(this.x,this.y,this.r);
	  }
	
	// setting the particle in motion.
	  moveParticle() {
	    if(this.x < 0 || this.x > width)
	      this.xSpeed*=-1;
	    if(this.y < 0 || this.y > height)
	      this.ySpeed*=-1;
	    this.x+=this.xSpeed;
	    this.y+=this.ySpeed;
	  }
	
	// this function creates the connections(lines)
	// between particles which are less than a certain distance apart
	  joinParticles(particles) {
	    particles.forEach(element =>{
	      let dis = dist(this.x,this.y,element.x,element.y);
	      if(dis<15) {
		stroke('rgba(255,200,255, .2)');
		line(this.x,this.y,element.x,element.y);
	      }
	    });
	  }
	}
	
	// an array to add multiple particles
	let particles = [];
	
	function setup() {
	  select("#myCanvas");
	  for(let i = 0;i<width/1;i++){
	    particles.push(new Particle());
	  }
	}
	
	function draw() {
	  background('rgba(215,255,255,1)');
	  for(let i = 0;i<particles.length;i++) {
	    particles[i].createParticle();
	    particles[i].moveParticle();
	    particles[i].joinParticles(particles.slice(i));
	  }
	}


p5.select("#myCanvas").Particle