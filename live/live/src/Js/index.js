/*切换登录方式*/
function SetLoginType(type){
	$('.'+type).show().siblings().hide()
}
function login(type){
	switch (type){
		case 'code':
			alert("验证码登录")
		break;
		case 'num':
			alert("账号登录")
		break;
	}
}
