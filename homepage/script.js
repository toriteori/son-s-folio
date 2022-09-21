window.addEventListener('DOMContentLoaded',function(){
	this.onload = function(){
		setTimeout(function(){
			scrollTo(0,0);
		},100);
	};

	let circle = document.querySelector(".circle");
	let totalA = document.querySelectorAll('a');
	let totalS = document.querySelectorAll('span');
//마우스 원
	
	document.addEventListener('mouseenter',() => {
		circle.style.opacity = '1';
	});
	document.addEventListener('mouseleave',() => {
		circle.style.opacity = '0';
	});
	document.addEventListener("mousemove", (e) => { 
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		circle.style.left = mouseX + 'px';
		circle.style.top = mouseY + 'px';
	});

	totalA.forEach(function(item){
		item.addEventListener('mouseover',function(){
			circle.style.transform = `scale(0.7)`;
			circle.style.transition = `all 0.05s ease-in-out`;
			circle.classList.add('changer');
		});
		item.addEventListener('mouseout',function(){
			circle.style.transform = `scale(1)`;
			circle.style.transition = `none`;
			circle.classList.remove('changer');
		});
	});
//마우스 따라다니는 원 효과

	let wrap = document.querySelector('.wrap'),
	intro = document.querySelector('.intro'),
	pager = document.querySelector('.pager'),
	pg = document.querySelectorAll('.pg a'),
	box = document.querySelectorAll('.box'),
	boxInfo = [];
//각 박스와 페이저


	let logo = document.querySelector('.logo'),
	logoSub = document.querySelector('.logoSub'),
 	logoSubA = document.querySelector('.logoSub a');
//로고 

	let footer = document.querySelector('footer');				
//푸터


	box.forEach(function(item){
		boxInfo.push(item.getBoundingClientRect().top);
//각 box의 Top위치 배열에 담고 위치값 저장

//여기서부터 스크롤 이벤트
		window.addEventListener('scroll',function parallax(){
		let rollY = this.scrollY;
//전체 스크롤 값 

			box.forEach(function(item,index){
				let newRollY = boxInfo[index] - rollY;
//배열에 담긴 각 박스의 위치값 - 현재 스크롤 값을 통해 각 박스의 위치를 움직임

				if(rollY > boxInfo[index]){
					newRollY *= 0.3;
				}
//전체 스크롤 값이 해당 박스의 위치를 넘기면, 즉 화면 밖으로 벗어나면  점점 느리게 움직임	

				item.style.transform = `translate3d(0, ${newRollY}px ,0)`;
//item, 즉 각 박스들이 위로 올라가는 parallax 효과


				if(rollY > boxInfo[0]){
					logo.style.top = `-10rem`;
					logoSub.style.right = `2.6rem`;
				}else{
					logo.style.top = `0px`;
					logoSub.style.right = `-10rem`;
				}
//box1 스크롤 효과 로고 체인지

				if(rollY > boxInfo[2] + 300 ){
					let pagerRollY = boxInfo[2] - rollY;
					pagerRollY *= 0.3;
					pager.style.transform = `translate3d(0, ${pagerRollY}px ,0)`;
					intro.style.transform = `translate3d(0, ${pagerRollY}px ,0)`;
				}else{
					pager.style.transform = `translate3d(0, 0 ,0)`;
					intro.style.transform = `translate3d(0, 0 ,0)`;
				}
// box3에 위치에 스크롤이 도달했을때 같이 움직임 , pager를 sticky 효과를 주기 위해 

				if(rollY > boxInfo[3] && rollY < boxInfo[4]){
						logoSubA.style.setProperty('--fontColor', '#111');
				}else{
						logoSubA.style.setProperty('--fontColor', '#fff9f9');
				}
			});
//box4에 도달하면, 모든 a태그 색상 속성값 변경

			if(rollY > boxInfo[4]){
				item.style.setProperty('--bgColor', '#111');
				footer.style.bottom = '0';
				item.style.transform = `translate3d(0, 0 ,0)`;
			}else{
				item.style.setProperty('--bgColor', '#ead5d3');
				footer.style.bottom = '-50%';
			}
		});
	});

//스크롤시, 움직이는 parallax 효과

		pg.forEach(function(item , index){
			pg[index].addEventListener('click',function(e){
				e.preventDefault();
				window.scrollTo(0 , boxInfo[index])
			});
		});
//페이저 클릭시 박스1,2,3 위치로 각각이동


	let portName = document.querySelectorAll('.portWrap > li > a');
	let bgImg = document.querySelectorAll('.bg > li');
		portName.forEach(function(item,index){
			let bgIdx = index;

			item.addEventListener('mouseover',function(){
				for(pn of portName){
					pn.style.opacity = '0.2';
				}
				this.style.opacity = '1';

				for(bi of bgImg){
					bi.style.opacity = '0';
				}
				bgImg[bgIdx].style.opacity = '1';
			});
			
			this.addEventListener('mouseout', function(){
			item.style.opacity ='1';
			bgImg[bgIdx].style.opacity = '0';
			});
		});
});


