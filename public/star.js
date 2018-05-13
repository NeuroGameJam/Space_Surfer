var starField = [];

var makeStarField = function (starcount) {
    var out = [];
    for (var i = 0; i < starcount; i++) {
        out.push(new Star());
    }
    return out;
};

var Star = function(){
      this.vector = createVector(random(0,width), random(0,height));
      this.size = random(starSizeMin,starSizeMax);
      this.opacity = ceil(random(15,160));
      this.parallaxDistance = ceil(random(parralaxMin,parralaxMax));
      
      this.setVector = function(v)
      {
          this.vector = v;
          this.x = this.vector.x;
          this.y = this.vector.y;
      };
  
      this.display = function()
      {
          noStroke();
          fill(255, 255, 255, this.opacity );
          ellipse( this.vector.x, this.vector.y, this.size, this.size);
          return this;
      };

      this.repeat = function(){
          var v = this.vector;
          var max = 100;

          if(v.x < -max){
              v.x = width + max + v.x;
          }
          else if(v.x > width + max){
              v.x = -max -v.x;
          }

          if(v.y < -max){
              v.y = height + max + v.y;
          }
          else if(v.y > max + height){
              v.y = -max - v.y;
          }
          return this;
      }

      this.update = function()
      {
       if(comets){
        this.vector.x -= this.parallaxDistance * scrollX;
       }
       if(rain){
        this.vector.y += this.parallaxDistance * scrollY;
       }
        return this;
      }; 
    };