    let swiper = new Swiper(".mySwiper", {
    effect: "cube",
    loop : true,
    grabCursor: true,
    // cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },
    
    });

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
    
 

