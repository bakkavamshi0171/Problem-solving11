rows =6;
for(i=1;i<=rows;i++){
    res=""
    for(j=i;j>=1;j--){
        res = res + j+ " "
    }
    console.log(res);
    
}


// output:
// 1 
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
// 6 5 4 3 2 1


rows1=4;
for(i=1;i<=rows1;i++){
    res= "", num=i
    for(j=1;j<=i;j++){
       res = res + 2*num+ " ";
       num = num + rows1 - j
    }
    console.log(res);
}


// output:
// 2 
// 4 10
// 6 12 16
// 8 14 18 20