    
        let openEvent = document.querySelector('.open'),
        openBtn = document.querySelector('.switch'),
        leftDoor = document.querySelector('.Ldoor'),
        rightDoor = document.querySelector('.Rdoor');

        function doorOpen(){
            openEvent.style.display  = 'none';
        };

    let content = document.querySelector('.contentWrap');

        function welcomePage(){
            content.style.opacity = '1';
        };


    openBtn.addEventListener('click', () => {
        leftDoor.style.transform = 'translateX(-100%)';
        rightDoor.style.transform = 'translateX(100%)';
        openBtn.style.opacity = '0';

        setTimeout ( doorOpen ,600);
        clearTimeout(doorOpen);
        setTimeout(welcomePage, 800);
        clearTimeout(welcomePage);
    });

    let lightBtn = document.querySelector('#modeLight'),
        darkBtn = document.querySelector('#modeDark');


    lightBtn.addEventListener('click', function(){
        modeChange('#fff', '#111', 0.5 , 1);
    });
    darkBtn.addEventListener('click', function(){
        modeChange('#111' , '#fff', 1 , 0.5);
    });

    modeChange('','', 1)

    function modeChange(color1 , color2, opaciDark, opaciLight){
        let body = document.querySelector('body');
        body.style.setProperty('--dark', color1);
        body.style.setProperty('--light', color2);
        darkBtn.style.opacity = opaciDark;
        lightBtn.style.opacity = opaciLight;
    };


    let card = document.querySelectorAll('.card');
    let posBox = [];
    let nextBtn = document.querySelector('.nextBtn'),
        prevBtn = document.querySelector('.prevBtn');

    card.forEach(function(item,index){
        let cardW = item.getBoundingClientRect().width;
        let currentX = index * cardW;
        posBox.push(currentX);
        item.style.transform = `matrix(1, 0, 0, 1, ${currentX}, 0)`;

        
        let newX =  0;
        
        nextBtn.addEventListener('click',function(){
            newX += cardW;
            newX = Math.min(Math.max(0, newX), 1600);
            item.style.transform = `matrix(1, 0, 0, 1, ${currentX - newX}, 0)`;

            if(currentX - newX < 0){
                item.style.transform = `matrix(0.9, 0, 0, 0.9, 0, 0)`;
            }
        });

        prevBtn.addEventListener('click',function(){
            newX -= cardW;
            newX = Math.min(Math.max(0, newX), 1600);
            item.style.transform = `matrix(1, 0, 0, 1, ${currentX - newX}, 0)`;

            if(currentX - newX < 0){
                item.style.transform = `matrix(0.9, 0, 0, 0.9, 0, 0)`;
            }
        });
    });

   
