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
		document.getElementById('livereplymessage').value='威望';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 2:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='继续';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 3:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='真棒';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 4:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='哈哈';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 5:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='再来';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 6:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='大红楼';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 7:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='水水';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 8:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='看看';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 9:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='不纯表';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
		case 10:
		setTimeout(function(){
		document.getElementById('livereplymessage').value='吃饭';
		document.getElementById('livereplysubmit').click();
	}, TimeInterval);
		break;
	}
}

setInterval(function(){
	document.getElementById('livereplymessage').style.color='black';
	interval();
}, 7700);
