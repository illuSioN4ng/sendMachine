var sendMachine = (function(){
	var textarea = 'livereplymessage',
		submitButton = 'livereplysubmit';
	function interval(){
		//randomize();
		//console.log(num);
		var num = Math.ceil(Math.random()* 10),
			TimeInterval = num * 300;
		switch(num){
			case 1:
				setTimeout(function(){
					document.getElementById(textarea).value='汉皇重色思倾国';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 2:
				setTimeout(function(){
					document.getElementById(textarea).value='御宇多年求不得';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 3:
				setTimeout(function(){
					document.getElementById(textarea).value='杨家有女初长成';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 4:
				setTimeout(function(){
					document.getElementById(textarea).value='养在深闺人未识';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 5:
				setTimeout(function(){
					document.getElementById(textarea).value='天生丽质难自弃';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 6:
				setTimeout(function(){
					document.getElementById(textarea).value='一朝选在君王侧';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 7:
				setTimeout(function(){
					document.getElementById(textarea).value='回眸一笑百媚生';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 8:
				setTimeout(function(){
					document.getElementById(textarea).value='六宫粉黛无颜色';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 9:
				setTimeout(function(){
					document.getElementById(textarea).value='春寒赐浴华清池';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 10:
				setTimeout(function(){
					document.getElementById(textarea).value='温泉水滑洗凝脂';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
		}
	}

	return {
		init: function(){
			setInterval(function(){
				document.getElementById(textarea).style.color='black';
				interval();
			}, 4800);
		}
	}
})();

sendMachine.init();
