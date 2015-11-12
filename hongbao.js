function randomize(){//取1-10随机数，其实是根据时间~~~~(>_<)~~~~  
    var now = new Date();  
    num = (now.getSeconds()) % 10;  
    num ++;  
}  
function interval(){
	randomize();
	var TimeInterval = 8800 + num * 100;
	switch(num){
		case 1:
		setTimeout(function(){
		$('fastpostmessage').value='威望';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 2:
		setTimeout(function(){
		$('fastpostmessage').value='继续';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 3:
		setTimeout(function(){
		$('fastpostmessage').value='真棒';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 4:
		setTimeout(function(){
		$('fastpostmessage').value='哈哈';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 5:
		setTimeout(function(){
		$('fastpostmessage').value='再来';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 6:
		setTimeout(function(){
		$('fastpostmessage').value='大红楼';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 7:
		setTimeout(function(){
		$('fastpostmessage').value='水水';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 8:
		setTimeout(function(){
		$('fastpostmessage').value='看看';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 9:
		setTimeout(function(){
		$('fastpostmessage').value='不纯表';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
		case 10:
		setTimeout(function(){
		$('fastpostmessage').value='吃饭';
		$('fastpostsubmit').click();
	}, TimeInterval);
		break;
	}
}

setInterval(function(){
	interval();
}, 8700);
