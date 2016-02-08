window.projects_data=[{
	'id':'0',
	'title':'Crunch - All In One',
	'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},{
	'id':'1',
	'title':'Telepiction',
	'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},{
	'id':'2',
	'title':'Leggett Builds',
	'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},{
	'id':'3',
	'title':'Hack Western',
	'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},{
	'id':'4',
	'title':'Code The Change',
	'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},{
	'id':'5',
	'title':'Hack-A-Thon',
	'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}]
var slideNum=0;
function buildOnLoad(){
	for (var i = 0; i <projects_data.length; i++) {
		makeObjMain(i);
	}
}
function makeObjMain(i){
	//make the project holder
	var newParent = document.getElementById('holder');
	var newProject =document.createElement('div');
	newParent.appendChild(newProject);
	newProject.setAttribute('class','project project'+((i%2)+1).toString());
	newProject.setAttribute('id','project'+(i).toString());
	if(i==0){
		//newProject.classList.add("leftTranslate");
	}
	//make the title
	var newTitle =document.createElement('div');
	newProject.appendChild(newTitle);
	newTitle.setAttribute('class','title');
	newTitle.innerHTML=projects_data[i].title;
	//make the description
	var newDesc =document.createElement('div');
	newProject.appendChild(newDesc);
	newDesc.setAttribute('class','description');
	newDesc.innerHTML=projects_data[i].description;
	//make the image
	var newImage =document.createElement('div');
	newProject.appendChild(newImage);
	newImage.setAttribute('class','image');
	//make the mini dots
	if(i==projects_data.length-1){
		for (var p = 0; p <projects_data.length; p++) {
			makeMiniDot(p);
		}
	}
}
function makeMiniDot(i){
	var newRef = document.createElement('a');
	newRef.setAttribute('id',i + "Dot");
	if(i==0){
		newRef.setAttribute('class','miniDot onDot');
	}else{
		newRef.setAttribute('class','miniDot');
	}
	newRef.setAttribute('title',projects_data[i].title);
	newRef.setAttribute('href','#');
	document.getElementById('scrollDotsHolder').appendChild(newRef);
}
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '39') {
       shiftLeft();
    }else if (e.keyCode == '37') {
       shiftRight();
    }
}
function shiftLeft(){
	$("#holder").animate({
		'marginLeft':"+=100%"
	})
}
function shiftRight(){
	$("#holder").animate({
		'marginLeft':"-=100%"
	})
}
/*function shiftLeft(){
	if (slideNum<projects_data.length-1){
		current=document.getElementById('project'+(slideNum).toString());
		current.classList.add("offTranslate");
		slideNum+=1;
		next=document.getElementById('project'+(slideNum).toString());
		next.classList.add("leftTranslate");
		miniDot = document.getElementById( slideNum+ "Dot");
		$(".onDot").removeClass("onDot");
		miniDot.classList.add("onDot");
	}
}
function shiftRight(){
	if (slideNum>0){
		current=document.getElementById('project'+(slideNum).toString());
		$("#project"+(slideNum).toString()).removeClass('leftTranslate');
		slideNum-=1;
		last=document.getElementById('project'+(slideNum).toString());
		$("#project"+(slideNum).toString()).removeClass('offTranslate');
		miniDot = document.getElementById( slideNum+ "Dot");
		$(".onDot").removeClass("onDot");
		miniDot.classList.add("onDot");
	}
}*/
document.addEventListener('click', function(e) {
	if(e.target.id.substring(1,5)=="Dot"){
		newSlide=parseInt(e.target.id.substring(0,1));
		if(newSlide+1==slideNum){
			shiftRight();
		}else if(newSlide-1==slideNum){
			shiftLeft();
		}else if(newSlide<slideNum){
			visibles(newSlide);
			while(slideNum>newSlide){
				shiftRight();
			}
		}else if(newSlide>slideNum){
			visibles(newSlide);
			while(slideNum<newSlide){
				shiftLeft();
			}
		}
	}
});
function visibles(i){
	$(".project").hide();
	//current=document.getElementById('project'+(i).toString());
	pre=document.getElementById('project'+(i+1).toString());
	next=document.getElementById('project'+(i-1).toString());
	$("#project"+(i).toString()).show();
	/*current.css('visibility', 'visible');
	pre.css('visibility', 'visible');
	next.css('visibility', 'visible');*/
}
//let's not let all slide but only the one requested






