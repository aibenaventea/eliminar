function removeFromMinHeap(heap){
    // tu código va aquí
    let arr = heap;
    let tempMinHeap=arr[1];
    let childIndx = arr.length - 1;
    let parentIndx = Math.trunc(childIndx / 2)
    let childIndx1 = 0
    let childIndx2 = 0

    arr[1] = arr[childIndx]
    arr[childIndx] = tempMinHeap
    arr.pop();
    parentIndx = 1;
    childIndx1 = parentIndx * 2;
    childIndx2 = parentIndx * 2 + 1;

    while(arr[parentIndx] > arr[childIndx1] || arr[parentIndx] > arr[childIndx2]){
            if(arr[parentIndx] > arr[childIndx1]){
                    let tempParent = arr[parentIndx];
                    arr[parentIndx] = arr[childIndx1];
                    arr[childIndx1] = tempParent;
                    parentIndx = childIndx1;
                    childIndx1 = parentIndx * 2;
                    childIndx2 = parentIndx * 2 + 1;
                }
                else if (arr[parentIndx] > arr[childIndx2]){
                    let tempParent = arr[parentIndx];
                    arr[parentIndx] = arr[childIndx2];
                    arr[childIndx2] = tempParent;
                    parentIndx = childIndx2;
                    childIndx1 = parentIndx * 2;
                    childIndx2 = parentIndx * 2 + 1;
                }
            }

            console.log(arr)
            console.log(tempMinHeap)
}
// salidas de muestras:
removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]);
// ccambia el montículo a [undefined, 8, 12, 10, 17, 13, 15] and returns 3
removeFromMinHeap([undefined, 8]);
// cambia el montículo a [undefined] and returns 8