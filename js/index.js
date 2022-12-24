// BT1:  VIẾT CHƯƠNG TRÌNH XUẤT 3 SỐ NGUYÊN THEO THỨ TỰ TĂNG DẦN.

document.getElementById('btnSapXep').onclick = function () {
    // input: nhập số thứ 1, 2 và 3.
    let soMot = +document.getElementById('soThuNhat').value;
    let soHai = +document.getElementById('soThuHai').value;
    let soBa = +document.getElementById('soThuBa').value;
    // progress
    let max = 0;

    if (soMot > soHai) {
        max = soMot;
        soMot = soHai;
        soHai = max;

    }
    if (soMot > soBa) {
        max = soMot;
        soMot = soBa;
        soBa = max;
    }
    if (soHai > soBa) {
        max = soHai;
        soHai = soBa;
        soBa = max;

    }




    // output
    let ketQua = soMot  + "," + soHai + "," + soBa ;
    document.getElementById('thuTu').innerHTML = ketQua;


}

// BT2: CHƯƠNG TRÌNH CHÀO HỎI
document.getElementById('btnGuiLoiChao').onclick = function () {
    //    input: lấy thông tin người dùng.
    let thanhVien = document.getElementById('chonThanhvien').value;
    
    // progress

    if (thanhVien === 'A') {
        thanhVien = 'Xin chào Bố';
    } else if (thanhVien === 'B') {
        thanhVien = 'Xin chào Mẹ';

    } else if (thanhVien === 'C') {
        thanhVien = 'Xin chào Anh trai';
    } else if (thanhVien === 'D') {
        thanhVien = 'Xin chào Em gái';
    } else if(thanhVien === 'X'){
        thanhVien = 'Xin chào người lạ';
        
    }
    // output
    document.getElementById('loiChao').innerHTML = thanhVien;


}

// BT3: ĐẾM SỐ CHẴN, LẺ.
document.getElementById('btnDem').onclick = function () {
    // input:
    let number1 = document.getElementById('soOne').value;
    let number2 = document.getElementById('soTwo').value;
    let number3 = document.getElementById('soThree').value;
    // progress;
    let chan = 0;
    let le = 0;
    if(number1 % 2 == 0) {
        chan += 1;

    } else{
        le += 1;
    }
    if(number2 % 2 == 0) {
        chan += 1;

    } else{
        le += 1;
    }
    if(number3 % 2 == 0) {
        chan += 1;

    } else{
        le += 1;
    }
    let result = 'Số phần tử chẳn là:' +  chan + "," + " " + 'Số phần tử lẻ là:' + le;
    document.getElementById('xuatRa').innerHTML = result;


  
    
}

// BT4: ĐOÁN HÌNH TAM GIÁC.
document.getElementById('btnDuDoan').onclick = function() {
    // input:
    let canh1 = +document.getElementById('canhMot').value;
    let canh2 = +document.getElementById('canhHai').value;
    let canh3 = +document.getElementById('canhBa').value;
    let loaiTamGiac = '';
    if(canh1 + canh2 > canh3 && canh1 + canh3 > canh2 && canh2 + canh3 > canh1){
        if(canh1 * canh1 == canh2 * canh2 + canh3 * canh3 || canh2 * canh2 == canh1 * canh1 + canh3 * canh3 || canh3 * canh3 == canh1 * canh1 + canh2 * canh2  ){
            loaiTamGiac = 'Tam giác vuông';

        } else if(canh1 == canh2 && canh2 == canh3 ){
            loaiTamGiac = 'Tam giác đều';

        } else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
            loaiTamGiac = 'Tam giác cân';

        } else{
            loaiTamGiac = 'Tam giác thường';
        }
       
        
        

    } else {
        loaiTamGiac = 'Không phải 3 cạnh của tam giác';
    }
    document.getElementById('duaRakq').innerHTML =  loaiTamGiac;

    
}






