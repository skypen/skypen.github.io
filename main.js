var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

parallax.add($("#skill"))
		.add($("#index"))
		.add($("#ex"))
		.add($("#about"))
		.add($("#contact"))
		.add($("#des"))
		.add($("#cod"))
		.add($("#port"))
		.add($("#resume"))
		.add($("#help"))
parallax.background = $("body");
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};
	parallax.index.onload=function(){
		setLeft("resume", "Resume");
		setRight("contact","Contact")
		setBottom("about","About Me")
		
		};
	parallax.skill.onload=function(){
		setRight("about", "About Me");
	
		
		setLeft("cod","Coding")
		};
		parallax.help.onload=function(){
		setBottom("index", "Home");
		};
		parallax.ex.onload=function(){
			setLeft("about","About Me")
		};
			parallax.des.onload=function(){
			setRight("cod","Coding");
		
		};
		parallax.resume.onload=function(){
			setRight("index","Home")

		};
parallax.about.onload=function(){
	setTop("index","Home")
	setRight("ex","Experience")
setLeft("skill","Skills")
setBottom("port","Work")
};
parallax.contact.onload=function(){
	setLeft("index","Home")
	
};
parallax.cod.onload=function(){
setLeft("des","Design");
	setRight("skill","Skills")

};
parallax.port.onload=function(){
	setTop("about","About Me")
};
function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}
	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}
	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}
		
		$(".control").hide();
	parallax.help.show();

});