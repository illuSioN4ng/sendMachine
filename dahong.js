var sendMachine = (function(){
	var textarea = 'livereplymessage',
		submitButton = 'livereplysubmit',
		strArr = [
			'汉皇重色思倾国', '御宇多年求不得', '杨家有女初长成', '养在深闺人未识', '天生丽质难自弃',
			'一朝选在君王侧', '回眸一笑百媚生', '六宫粉黛无颜色', '春寒赐浴华清池', '温泉水滑洗凝脂'
		];
	function interval(){
		//randomize();
		//console.log(num);
		var num = Math.ceil(Math.random()* 10),
			TimeInterval = num * 300;
		switch(num){
			case 1:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 2:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 3:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 4:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 5:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 6:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 7:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 8:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 9:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 10:
				setTimeout(function(){
					document.getElementById(textarea).value = strArr[num - 1];
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
