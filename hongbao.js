var textarea = 'fastpostmessage',
	submitButton = 'fastpostsubmit';

function randomize(){//取1-10随机数，其实是根据时间~~~~(>_<)~~~~
    var now = new Date();  
    num = (now.getSeconds()) % 10;  
    num ++;  
}  
function interval(){
	randomize();
	var TimeInterval = num * 100;
	switch(num){
		case 1:
		setTimeout(function(){
		document.getElementById(textarea).value='威望';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 2:
		setTimeout(function(){
		document.getElementById(textarea).value='继续';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 3:
		setTimeout(function(){
		document.getElementById(textarea).value='真棒';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 4:
		setTimeout(function(){
		document.getElementById(textarea).value='哈哈';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 5:
		setTimeout(function(){
		document.getElementById(textarea).value='再来';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 6:
		setTimeout(function(){
		document.getElementById(textarea).value='大红楼';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 7:
		setTimeout(function(){
		document.getElementById(textarea).value='水水';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 8:
		setTimeout(function(){
		document.getElementById(textarea).value='看看';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 9:
		setTimeout(function(){
		document.getElementById(textarea).value='不纯表';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
		case 10:
		setTimeout(function(){
		document.getElementById(textarea).value='吃饭';
		document.getElementById(submitButton).click();
	}, TimeInterval);
		break;
	}
}

setInterval(function(){
	interval();
}, 8700);
