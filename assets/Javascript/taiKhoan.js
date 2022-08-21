

function dangKy() {
    var tenTK = document.getElementById('tenTK').value;
    var pass = document.getElementById('pass').value;
    var rePass = document.getElementById('rePass').value;

    var loiTK = document.getElementById('loiTK');
    var loiPass = document.getElementById('loiPass');
    var loiRePass = document.getElementById('loiRePass');

    loiTK.innerHTML = "";
    loiPass.innerHTML = "";
    loiRePass.innerHTML = "";

    var flag = true;

    if(tenTK.length < 5) {
        flag = false;
        loiTK.style.color = 'red';
        loiTK.style.fontWeight = '400';
        loiTK.innerHTML = 'Tên tài khoản phải ít nhất 5 kí tự!';
    }

    if(pass.length < 6) {
        flag = false;
        loiPass.style.color = 'red';
        loiPass.style.fontWeight = '400';
        loiPass.innerHTML = 'Mật khẩu phải ít nhất 6 kí tự!';
    } else if(rePass != pass) {
        flag = false;
        loiRePass.style.color = 'red';
        loiRePass.style.fontWeight = '400';
        loiRePass.innerHTML = 'Mật khẩu không khớp!';
    }

    if(!flag)
        return;
    //Tạo đối tượng để lưu lại tài khoản
    let taiKhoan = {
        tenTaiKhoan: tenTK,
        matKhau: pass
    }

    localStorage.setItem("Tài khoản" + tenTK, JSON.stringify(taiKhoan));
    alert('Đăng ký thành công!');

}


function dangNhap() {
    //window.localStorage.clear();
    var tenTK = document.getElementById('tenTK0').value;
    var pass = document.getElementById('pass0').value;

    var loiTK = document.getElementById('loiTK0');
    var loiPass = document.getElementById('loiPass0');

    loiTK.innerHTML = "";
    loiPass.innerHTML = "";



    var flag = false;
    //Duyệt qua dữ liệu lưu trên trình duyệt
    for (var key in localStorage) {
        //Lấy dữ liệu lưu vào tài khoản
        var taiKhoan = JSON.parse(localStorage.getItem(key));
        if(taiKhoan == null) {
            break;
        }
        //Nếu tài khoản người dùng nhập trùng với dữ liệu thì đúng
        if(tenTK == taiKhoan.tenTaiKhoan) {
            flag = true;
            //Kiểm tra pass
            if(pass == taiKhoan.matKhau) {
                alert('Đăng nhập thành công!');
            } else {
                loiPass.style.color = 'red';
                loiPass.style.fontWeight = '400';
                loiPass.innerHTML = 'Mật khẩu đúng! Vui lòng nhập lại!';
            }
        }
    }	
    if(!flag) {
        loiTK.style.color = 'red';
        loiTK.style.fontWeight = '400';
        loiTK.innerHTML = 'Tài khoản không tồn tại!';
    }

}

