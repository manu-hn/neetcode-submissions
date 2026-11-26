class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let counter = {};

        for(let i=0; i<nums.length; i++){
            if(!counter[nums[i]]){
                counter[nums[i]]=1
            }else{
                counter[nums[i]]++;
            }
        }
        for(const [key, value] of Object.entries(counter)){
    if(value>1){
        return true
    }
}
return false
    }
}
