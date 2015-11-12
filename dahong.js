function randomize(){//取1-10随机数，其实是根据时间~~~~(>_<)~~~~  
    var now = new Date();  
    num = (now.getSeconds()) % 10;  
    num ++;  
}  
function interval(){
	randomize();
	var TimeInterval = num * 300;
	switch(num){
		case 1:
		setTimeout(function(){
		$('livereplymessage').value='威望';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 2:
		setTimeout(function(){
		$('livereplymessage').value='继续';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 3:
		setTimeout(function(){
		$('livereplymessage').value='真棒';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 4:
		setTimeout(function(){
		$('livereplymessage').value='哈哈';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 5:
		setTimeout(function(){
		$('livereplymessage').value='再来';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 6:
		setTimeout(function(){
		$('livereplymessage').value='大红楼';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 7:
		setTimeout(function(){
		$('livereplymessage').value='水水';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 8:
		setTimeout(function(){
		$('livereplymessage').value='看看';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 9:
		setTimeout(function(){
		$('livereplymessage').value='不纯表';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 10:
		setTimeout(function(){
		$('livereplymessage').value='吃饭';
		$('livereplysubmit').click();
	}, TimeInterval);
		break;
	}
}

setInterval(function(){
	$('livereplymessage').style.color='black';
	interval();
}, 7700);
