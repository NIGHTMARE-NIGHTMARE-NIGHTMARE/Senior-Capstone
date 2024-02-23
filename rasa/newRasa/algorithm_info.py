def get_algorithm_info(algorithm_name):
    algorithm_info = {
        "linear": {
            "definition": "Linear search is a search algorithm that sequentially checks each element in a list until the desired element is found or the end of the list is reached.",
            "pseudocode": "While there are elements in the list:\n    If the current element is equal to the target:\n        Return its index.\n    Move to the next element.\nReturn -1.",
            "resources": ["https://en.wikipedia.org/wiki/Linear_search"]
        },
        "binary": {
            "definition": "Binary search is a search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array and continues narrowing down the search range until the target is found or the search range is empty.",
            "pseudocode": "Let min = 0 and max = n - 1.\nWhile min <= max:\n    Compute the mid index.\n    If the target is at the mid index, return it.\n    If the target is less than the element at the mid index, set max = mid - 1.\n    Otherwise, set min = mid + 1.\nReturn -1 if the target is not found.",
            "resources": ["https://en.wikipedia.org/wiki/Binary_search_algorithm"]
        },
        "bfs": {
            "definition": "Breadth-first search is a graph traversal algorithm that explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.",
            "pseudocode": "Start with a queue containing the root node.\nWhile the queue is not empty:\n    Remove the first node from the queue.\n    Process the node.\n    Add all its neighbors to the queue.",
            "resources": ["https://en.wikipedia.org/wiki/Breadth-first_search"]
        },
        "dfs": {
            "definition": "Depth-first search is a graph traversal algorithm that explores as far as possible along each branch before backtracking.",
            "pseudocode": "Start with a stack containing the root node.\nWhile the stack is not empty:\n    Remove the top node from the stack.\n    Process the node.\n    Add all its unvisited neighbors to the stack.",
            "resources": ["https://en.wikipedia.org/wiki/Depth-first_search"]
        },
        "heap": {
            "definition": "Heap sort is a comparison-based sorting algorithm that builds a max heap from the data and repeatedly extracts the maximum element from it and rebuilds the heap until all the elements have been sorted.",
            "pseudocode": "Build a max heap from the input data.\nRepeatedly extract the maximum element from the heap and rebuild the heap until it is empty.",
            "resources": ["https://en.wikipedia.org/wiki/Heapsort"]
        },
        "quicksort": {
            "definition": "Quicksort is a highly efficient sorting algorithm that uses a divide-and-conquer strategy to sort data.",
            "pseudocode": "Choose a pivot element from the array.\nPartition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.\nRecursively apply quicksort to the sub-arrays.",
            "resources": ["https://en.wikipedia.org/wiki/Quicksort"]
        },
        "insertion": {
            "definition": "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time by repeatedly taking the next element and inserting it into the sorted portion of the array.",
            "pseudocode": "Start with the second element.\nIterate through the array and for each element, insert it into its correct position in the sorted portion of the array.",
            "resources": ["https://en.wikipedia.org/wiki/Insertion_sort"]
        },
        "bubble": {
            "definition": "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
            "pseudocode": "Repeatedly iterate through the list and compare adjacent elements.\nIf they are in the wrong order, swap them.",
            "resources": ["https://en.wikipedia.org/wiki/Bubble_sort"]
        },
        "merge": {
            "definition": "Merge sort is a comparison-based sorting algorithm that divides the input array into two halves, recursively sorts each half, and then merges the sorted halves.",
            "pseudocode": "Divide the array into two halves.\nRecursively apply merge sort to each half.\nMerge the sorted halves back together.",
            "resources": ["https://en.wikipedia.org/wiki/Merge_sort"]
        }
    }
    
    return algorithm_info.get(algorithm_name.lower())

