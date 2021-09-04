/*const modifiedH1 = document.querySelector('H1');
modifiedH1.style.color = 'purple';*/

const picColor = document.querySelector('#picture');

picColor.addEventListener('mouseover',function(){picColor.style.background='linear-gradient(rgb(100, 52, 190),ghostwhite)' });
picColor.addEventListener('mouseleave',function(){picColor.style.background='linear-gradient(ghostwhite, rgb(100, 52, 190))' });


const fatOnMouseOver = document.querySelectorAll('.brief-points');
for (let i = 0; i < fatOnMouseOver.length; i++) {
    fatOnMouseOver[i].addEventListener('mouseover', function() 
    {
      fatOnMouseOver[i].style.fontWeight='bolder';
    });
    fatOnMouseOver[i].addEventListener('mouseout', function()
    {
        fatOnMouseOver[i].style.fontWeight='normal';
    });

    };


