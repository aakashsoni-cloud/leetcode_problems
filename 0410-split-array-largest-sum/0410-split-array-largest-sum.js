/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function countSplits(arr, pages) {
    let split = 1; // Start with the first student
    let totalSplit = 0; // Track the current sum of pages assigned to the student

    for (let i = 0; i < arr.length; i++) {
        // If adding the current book does not exceed the allowed limit
        if (totalSplit + arr[i] <= pages) {
            totalSplit += arr[i]; // Assign the book to the current student
        } else {
            // Allocate the book to a new student
            split++;
            totalSplit = arr[i]; // Reset totalSplit to the current book's pages
        }
    }
    return split; // Return the number of students required
}

function splitArray(arr, m) {

    let n = arr.length;
    // If the number of students is greater than books, allocation is not possible
    if (m > n) return -1;

    // Lower bound: The largest book (a student must read at least this much)
    let low = Math.max(...arr);
    // Upper bound: The sum of all book pages (if one student reads all books)
    let high = arr.reduce((acc, curr) => acc + curr, 0);

    // Perform binary search to find the optimal maximum pages a student can read
    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Mid represents the max pages limit

        // Check how many students are required if each student reads at most `mid` pages
        let split = countSplits(arr, mid);

        // If more students are needed than available, increase the lower bound
        if (split > m) {
            low = mid + 1;
        } else {
            // If students required are within limit, try to minimize further
            high = mid - 1;
        }
    }

    // The minimized maximum pages a student has to read
    return low;
}