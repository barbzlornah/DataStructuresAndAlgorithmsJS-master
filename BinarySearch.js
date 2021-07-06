//ITERATIVE SOLUTION
const search = (nums,target) => {
    let left = 0;
    let right = nums.length-1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(target === nums[mid]){
            return mid;
        } else if(target < nums[mid]){
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return -1;
}
let nums = [1,2,3,4,5,6,7,8,9];
console.log(search(nums,7));