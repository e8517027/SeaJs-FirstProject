
define(function(require,exports,module){

	var $=require('jquery');

	function Rotate(container)
	{
		this.container=$(container);
		this.rotateEls=this.container.children();
		this.rotates=[];
	}
	module.exports=Rotate;
});