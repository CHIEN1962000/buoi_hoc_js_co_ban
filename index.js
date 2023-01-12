function canNet(a, b){

    //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
    let min1 =  a[0];
    let min_index1= 0; 
    let max1 = a[0]
    let min2 =  b[0];
    let max2 = b[0]
    let min_index2= 0;   

    /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất và lớn nhất*/
    for (let i = 1; i < a.length; i++) {
        if (min1 > a[i]) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
            min1 = a[i];
            min_index1 =i;
        }
        if (max1 < a[i]) { //Thay đổi giá trị lớn nhất nếu tìm ra số nhỏ hơn
            max1 = a[i];
        }
    }
    // console.log("min= ",min1);
    // console.log("max= ",max1);
    // console.log("min_index= ",min_index1);

    for (let i = 1; i < b.length; i++) {
        if (min2 > b[i]) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
            min2 = b[i];
            min_index2 =i;
        }
        if (max2 < b[i]) { //Thay đổi giá trị lớn nhất nếu tìm ra số nhỏ hơn
            max2 = b[i];
        }
    }
    // console.log("min1= ",min2);
    // console.log("max2= ",max2);
    // console.log("min_index1= ",min_index2);
    dk1 = min1 > min2;
    dk2 = max1 < max2;
    if(dk1 && dk2) {
        console.log('true')
    }else {
        console.log('false')
    }  
}
// let num = [5, 4, 7, 2, 8, 0, 3];
// canNet(num);
console.log(canNet([1, 2, 3, 4], [0, 10]))
console.log(canNet([3, 1], [6, 0]))
console.log(canNet([1, 2, 3], [2, 3]))

//  console.log("canNet([1, 2, 3, 4], [0, 10]) --> ", canNet([1, 2, 3, 4], [0, 10]))