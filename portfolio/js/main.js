
$(document).ready(function(){
    $('.100').circleProgress({
        value: 1
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
    });
    $('.90').circleProgress({
        value: 0.9
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });
    $('.75').circleProgress({
        value: 0.75
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
    });
    $('.60').circleProgress({
        value: 0.6
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
    });
    $('.30').circleProgress({
        value: 0.3
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(30 * progress) + '<i>%</i>');
    });


    const colors = ["#2DA5E1", "#D90BE7", "#000", "#FCBC0F", "#F85F36"];

    const numBalls = 50;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}%`;
        ball.style.top = `${Math.floor(Math.random() * 90)}%`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = 20;
        ball.style.height = ball.style.width;

        balls.push(ball);
        document.body.append(ball);
    }

// Keyframes
    balls.forEach((el, i, ra) => {
        let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
});