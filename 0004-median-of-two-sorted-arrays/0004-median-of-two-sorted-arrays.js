/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;

    let left = 0;
    let right = m;
    const halfLen = Math.floor((m + n + 1) / 2);

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = halfLen - partition1;

        const maxLeft1 = (partition1 === 0) ? -Infinity : nums1[partition1 - 1];
        const minRight1 = (partition1 === m) ? Infinity : nums1[partition1];
        
        const maxLeft2 = (partition2 === 0) ? -Infinity : nums2[partition2 - 1];
        const minRight2 = (partition2 === n) ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            const maxLeft = Math.max(maxLeft1, maxLeft2);
            const minRight = Math.min(minRight1, minRight2);

            if ((m + n) % 2 === 0) {
                return (maxLeft + minRight) / 2;
            } else {
                return maxLeft;
            }
        } else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }
};