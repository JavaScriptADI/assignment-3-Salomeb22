/* 
Write a loop that makes seven calls to console.log to output the following triangle:

დაწერეთ ციკლი, რომელიც 7-ჯერ იძახებს console.log-ს რომ გამოიტანოს შემდეგი სამკუთხედი:

#
##
### 
#### 
##### 
###### 
#######
*/

let S = 0;
let hash = #;
while (S < 7) {
    console.log(hash);
    hash += '#';
    S++;
}