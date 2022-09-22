document.addEventListener('DOMContentLoaded',function(){
	

	window.addEventListener('load', function(){
		resizeOnOff();
		scrollOnOff();
		scrollEvent();

		setTimeout(function(){
			scrollTo(0,0);
		},100);
	});
	window.addEventListener('resize', function(){
		resizeOnOff();
		scrollOnOff();
	});
		

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

let	pager = document.querySelector('.pager'),
	pg = document.querySelectorAll('.pg a');


	pg.forEach(function(item,index){
		pg[index].addEventListener('click',function(e){
			e.preventDefault();
			window.scrollTo(0 , boxInfo[index])
		});
	});
//페이저 클릭시 박스1,2,3 위치로 각각이동


	let logo = document.querySelector('.logo'),
	logoSub = document.querySelector('.logoSub'),
 	logoSubA = document.querySelector('.logoSub a');
//로고 

	let footer = document.querySelector('footer');				
//푸터

function resizeOnOff(){
	let innerW = window.innerWidth;

	if(innerW > 920){
			box.forEach(function(item){
				item.style.position = 'fixed';
			});
		}else{
			box.forEach(function(item){
				item.style.position = 'sticky';
				item.style.top = '0';
			});
		}
	};//화면에 따라서 바뀌는 포지션 => fixed인 상태에서 모바일 접속시 스크롤 제대로 작동안하는 이슈(임시방편으로 sticky, top = 0 설정)



	function scrollOnOff(){
	let innerW = window.innerWidth;

	if(innerW > 920){
		window.addEventListener('scroll', parallax); 
		}else{
		window.removeEventListener('scroll', parallax);
		}
	};//scroll 효과 추가제거 함수


let box = document.querySelectorAll('.box');
let boxInfo = [];

box.forEach(function(item,index){
	boxInfo.push(item.getBoundingClientRect().top);
	item.style.top = `${index * 100}%`;
});
//각 box의 Top위치 배열에 담고 위치값 저장

function parallax(){
	let rollY = window.scrollY;  

	box.forEach(function(item , index){
		let currentY = `${boxInfo[index] - rollY}`;


		if(rollY > boxInfo[index]){
			currentY *= 0.5;
		}
		item.style.top = `${currentY}px`;
		//parallax 효과 시작	

	});//스크롤 시 각 박스마다 효과
};//parallax 효과 함수

function scrollEvent(){
	window.addEventListener('scroll',function(){
	let rollY = window.scrollY;  

		if(rollY > boxInfo[0]){
			logo.style.top = `-10rem`;
			logoSub.style.right = `2.6rem`;
		}else{
			logo.style.top = `0px`;
			logoSub.style.right = `-10rem`;
		}//첫번째 박스가 화면 밖으로 넘어가면 발생하는 효과
	
		if(rollY > boxInfo[2] - 40){
			let pagerRollY = boxInfo[2] - rollY;
			pager.style.top= `${pagerRollY}px`;
		}else{
			pager.style.top = `0`;
		}//세번째 박스가 화면 밖으로 넘어가면 pager에 sticky효과 
		
		if(rollY > boxInfo[3] && rollY < boxInfo[4]){
			logoSubA.style.color = '#111';
		}else{
			logoSubA.style.color = '#fff';

		}//네번째 박스가 화면 밖으로 넘어가면 footer 효과
		if(rollY > boxInfo[4] - 50){
			box[3].style.setProperty('--bgColor', '#111');
			box[4].style.setProperty('--bgColor', '#111');
			footer.style.bottom = '0';
			box[4].style.top = `0`;
		}else{

			box[3].style.setProperty('--bgColor', '#ead5d3');
			box[4].style.setProperty('--bgColor', '#ead5d3');

			footer.style.bottom = '-50%';

		}

	});
};
		




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


