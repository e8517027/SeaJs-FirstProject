/***********************定义随机变换颜色模块***********************/
define(function(require,exports,module){
   
    var $=require('jquery');//引用Jquery库

    //定义随机变换类
    function RandomColor(container)
    {
    	this.container=$(container);
    	this._colorRange=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    }

    module.exports=RandomColor;//公开类

    //动画入口
    RandomColor.prototype.render=function(){
    	this._init();
    };

    //元素初始化私有方法
    RandomColor.prototype._init=function(){

    	var _container=this.container;
    	_container.css('color',this._random());
    	return this;
    };

    //颜色随机私有方法
    RandomColor.prototype._random=function(){

    	var colorRange=this._colorRange;
    	return '#'+
				colorRange[Math.floor(Math.random()*16)]+
				colorRange[Math.floor(Math.random()*16)]+
				colorRange[Math.floor(Math.random()*16)]+
				colorRange[Math.floor(Math.random()*16)]+
              	colorRange[Math.floor(Math.random()*16)]+
               	colorRange[Math.floor(Math.random()*16)];
    };


});