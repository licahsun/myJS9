//排序前
let sortBefore = document.getElementById("sortBefore");
//排序後
let sortAfter = document.getElementById("sortAfter");
//第二區號碼
let secNo = document.getElementById("secNo");

//威力彩
function lott1() {
    //建立一個存放號碼的空陣列
    let lott = [];

    //while
    while (1) {
        //檢查長度是否已經有6個號碼
        if (lott.length == 6) {
            break;
        }

        //亂數取號碼
        let lottNo = Math.floor(Math.random() * 38) + 1;
        //檢查是否重複
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    //未排序
    // console.log(lott);
    sortBefore.textContent = "排序前號碼" + lott;

    //排序後
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

    //第二區號碼
    secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * 8) + 1)
}

//for迴圈========================================================
/*
//第一個號碼
let lottNo = Math.floor(Math.random() * 38) + 1;
lott.push(lottNo);

//第二個號碼之後，每個號碼都要檢查是否重複
//因為還要跑5個號碼
for (let i = 1; i <= 5; i++) {
    //亂數取號碼
    lottNo = Math.floor(Math.random() * 38) + 1;
    //檢查是否重複
    if (lott.includes(lottNo) == false) {  //沒有重複
        lott.push(lottNo); //增加號碼到陣列中
    }else{
        i--; //當號碼重複時，這次的執行次數不算，所以要倒扣
    }
}
//未排序
// console.log(lott);
sortBefore.textContent="排序前號碼"+lott

//排序後
lott.sort((a,b)=>{
    return a-b;
})
sortAfter.textContent="排序後號碼"+lott

//第二區號碼
secNo.textContent="第二區號碼:"+(Math.floor(Math.random()*8)+1);
}
*/

//大樂透
function lott2() {
    //建立一個存放號碼的空陣列
    let lott = [];

    //while
    while (1) {
        //檢查長度是否已經有6個號碼
        if (lott.length == 6) {
            break;
        }

        //亂數取號碼
        let lottNo = Math.floor(Math.random() * 49) + 1;
        //檢查是否重複
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    //未排序
    // console.log(lott);
    sortBefore.textContent = "排序前號碼" + lott;

    //排序後
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

    //第二區號碼
    while (1) {
        let lottNo2 = Math.floor(Math.random() * 49) + 1;
        if (lott.includes(lottNo2) == false) {
            secNo.textContent = "特別號:" + lottNo2;
            break;
        }
    }
}

//今彩539
function lott3() {
    //建立一個存放號碼的空陣列
    let lott = [];

    //while
    while (1) {
        //檢查長度是否已經有6個號碼
        if (lott.length == 5) {
            break;
        }

        //亂數取號碼
        let lottNo = Math.floor(Math.random() * 39) + 1;
        //檢查是否重複
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    //未排序
    // console.log(lott);
    sortBefore.textContent = "排序前號碼" + lott;

    //排序後
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

    //今彩沒有第二區，所以清除
    secNo.textContent = "";
}