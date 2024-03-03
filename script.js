score=0;
cross = true;
audio1 = new Audio('backgroundmusic1.mp3');
audioover =new Audio('gameoversound.wav');
setTimeout(()=>{
    audio1.play();
},500);
document.onkeydown = function(e)
{
    console.log("KeyCode is:",e.keyCode)
    if(e.keyCode==32)
    {
        princess = document.querySelector('.princess');
        princess.classList.add('animatePrincess');
        setTimeout(() => {
            princess.classList.remove('animatePrincess')
    },700);
    }
    if(e.keyCode==39)
    {
        princess = document.querySelector('.princess');
        princessX = parseInt(window.getComputedStyle(princess,null).getPropertyValue('left'));
        princess.style.left = princessX + 122 + "px";
    }
    if(e.keyCode==37)
    {
        princess = document.querySelector('.princess');
        princessX = parseInt(window.getComputedStyle(princess,null).getPropertyValue('left'));
        princess.style.left = (princessX - 122) + "px";
    }
}
    setInterval(() => {
        princess=document.querySelector('.princess');
        GameOver=document.querySelector('.GameOver');
        obstacle=document.querySelector('.obstacle');
        dx=parseInt(window.getComputedStyle(princess,null).getPropertyValue('left'));
        dy=parseInt(window.getComputedStyle(princess,null).getPropertyValue('top'));

        ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
        oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

        offsetX=Math.abs(dx-ox);
        offsetY=Math.abs(dy-oy);
        if(offsetX < 73 && offsetY < 52)
        {
            GameOver.style.visibility = 'visible';
            obstacle.classList.remove('obstacleAni')
            audioover.play();
            setTimeout(()=>{
                audioover.pause();
                audio1.pause();
            },1000);
        }
        else if(offsetX < 145 && cross){
            score+=1;
            updateScore(score);
            cross=false;
            setTimeout(()=>{
                cross=true;
            },1000);
            setTimeout(()=>{
                anidur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
                newdur = anidur - 0.1;
                obstacle.style.animationDuration = newdur +'s';
            },500);
            
        }
    },10);
    function updateScore(cross)
    {
        scoreCont.innerHTML = "YOUR SCORE IS :"+score;
    }