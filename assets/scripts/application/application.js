define(function(require,exports,module)	{

	    var RandomColor=require('./random');//引用随机库
		
		var random=new RandomColor('#hello-seajs');
		setInterval(function(){
			random.render();
		},1500);
	});