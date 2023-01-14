function searchh(arr1, arr2, ans) {
    let n = arr1.length, m = arr2.length;
    let l = 0, r = 0;
    while (l < n && r < m) {
        if (arr1[l] < arr2[r]) {
            ans.push(arr1[l]);
            l++;
        }
        else {
            ans.push(arr2[r]);
            r++;
        }
    }
    while (r < arr2.length) {
        ans.push(arr2[r]);
        r++;
    }
    while (l < arr1.length) {
        ans.push(arr1[l]);
        l++;
    }
}
let arr1 = [1, 23, 42, 98];
let arr2 = [10, 22, 34,];
let ans = [];
console.log(searchh(arr1, arr2, ans));
console.log(ans)
