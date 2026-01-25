let arr = [1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

for (let i = 0; i < arr.length; i++) {
   if(arr[i]==arr[i+1]) {
    arr[i+1]*=2
    i+=1
   }
   else {
    arr[i]*=2
   }
}

console.log(arr);
