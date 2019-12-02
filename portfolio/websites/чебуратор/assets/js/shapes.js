var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var circle = '<svg viewBox="0 0 11.4 11.9"><path class="circle" d="M5.7,0.1C2.6,0.1,0,2.8,0,6s2.6,5.9,5.7,5.9s5.7-2.7,5.7-5.9S8.9,0.1,5.7,0.1L5.7,0.1z M5.7,8.8 C4.2,8.8,3,7.6,3,6s1.2-2.8,2.7-2.8S8.4,4.4,8.4,6S7.2,8.8,5.7,8.8L5.7,8.8z"/></svg>';
var rhombus = '<svg viewBox="0 0 13 14"><path class="rhombus" d="M5.9,1.2L0.7,6.5C0.5,6.7,0.5,7,0.7,7.2l5.2,5.4c0.2,0.2,0.5,0.2,0.7,0l5.2-5.4 C12,7,12,6.7,11.8,6.5L6093D814AFC" /></svg>';

var pentahedron = '<svg viewBox="0 0 561.8 559.4"><path class="pentahedron" d="M383.4,559.4h-204l-2.6-0.2c-51.3-4.4-94-37-108.8-83l-0.2-0.6L6,276.7l-0.2-0.5c-14.5-50,3.1-102.7,43.0E40894A0E"/></svg>';
var x = '<svg viewBox="0 0 12 12"> <path class="x" d="M10.3,4.3H7.7V1.7C7.7,0.8,7,0,6,0S4.3,0.8,4.3,1.7v2.5H1.7C0.8,4.3,0,5,0,6s0.8,1.7,1.7,1.7h2.5v2.5 C401132AEA7F"/></svg>';
var dribble = '<svg viewBox="0 0 184.3 184.3"> <path class="dribble" d="M92.2,184.3C41.3,184.3,0,143,0,92.2S41.3,0,92.2,0s92.2,41.3,92.2,92.2S143,184.3,92.2,184.3z M169.9,1092C9C2A68"/> </svg>';

var data = [rhombus, pentahedron, circle, x];

var max = 60;

var particles = [];

var Ball = function () {
  function Ball(shape) {
    _classCallCheck(this, Ball);

    this.shape = $(shape);
    this.speed = 1 + Math.random() * 8;
    this.vx = Math.random() * this.speed - Math.random() * this.speed;
    this.vy = Math.random() * this.speed - Math.random() * this.speed;
    this.radius = 10 + Math.round(Math.random() * 50);
    this.w = $(".warpper").width();
    this.h = $(".warpper").height();
    this.x = (this.w - this.radius) / 2;
    this.y = 0;

    $(window).on("resize", this.resize.bind(this));
    this.render();
  }

  _createClass(Ball, [{
    key: 'render',
    value: function render() {
     
 
      $(".shapes-bg").append(this.shape);
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.w = $(".warpper").width();
      this.h = $(".warpper").height();
    }
  }, {
    key: 'move',
    value: function move() {
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      this.shape.css({
        left: this.x,
        top: this.y,
        transform: "rotate(" + this.y + "deg)"
      });

      if (this.x < 0 || this.x > this.w - this.radius) {
        this.vx = -this.vx;
      }
      if (this.y < 0 || this.y > this.h - this.radius) {
        this.vy = -this.vy;
      }
      return this;
    }
  }]);

  return Ball;
}();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i < max; i++) {
  particles.push(new Ball(data[randomInt(0, data.length - 1)]));
}

function update() {
  particles = particles.filter(function (p) {
    return p.move();
  });
  requestAnimationFrame(update.bind(this));
}
update();