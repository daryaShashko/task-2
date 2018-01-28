(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var counter = 0;
        var islandLength = 0;
        var initVal = 2;
        map.forEach(function (mapEl, mapIndex, mapArr) {
            if (mapEl.indexOf(1) !== -1) {

                checkAll(mapArr, mapEl, mapIndex, mapEl.indexOf(1));
                //mapEl[mapEl.indexOf(1)] = initVal;

                initVal += 1;


            }

        });


        //checkAll(mapArr, mapItemArr, mapIndex, mapItemIndex);

        //initVal += 1;
        /*counter += 1;
         if (mapItemArr.length > (mapItemIndex + 1) && mapItemArr[mapItemIndex + 1]) {
         islandLength += 1;
         mapItemArr[mapItemIndex] = 'asd';
         mapItemArr[mapItemIndex + 1] = 'asd';
         }

         if (mapItemArr.length > (mapItemIndex + 1) && mapItemArr[mapItemIndex + 1] === 'asd') {
         mapItemArr[mapItemIndex] = 'asd';
         mapItemArr[mapItemIndex + 1] = 'asd';
         }

         if ( mapArr.length >(mapIndex + 1) && mapArr[mapIndex + 1][mapItemIndex]) {
         islandLength += 1;
         mapArr[mapIndex][mapItemIndex] = 'asd';
         mapArr[mapIndex + 1][mapItemIndex] = 'asd';
         }

         if ((mapIndex - 1) > 0 && mapArr[mapIndex - 1][mapItemIndex] === 'asd') {
         islandLength += 1;
         mapArr[mapIndex - 1][mapItemIndex] = 'asd';
         }
         */


        function checkRight(arr, itemArr, index, itemIndex) {

            if (itemArr.length > (itemIndex + 1) && itemArr[itemIndex + 1]) {
                console.log('right + 1');
                itemArr[itemIndex] = initVal;
                itemArr[itemIndex + 1] = initVal;
                checkRight(arr, itemArr, index, itemIndex + 1);
                checkDown(arr, itemArr, index, itemIndex + 1);
                checkUp(arr, itemArr, index, itemIndex + 1);
            }
        }

        function checkLeft(arr, itemArr, index, itemIndex) {

            if ((itemArr - 1) >= 0 && itemArr[itemIndex - 1]) {
                console.log('left + 1');
                itemArr[itemIndex] = initVal;

                itemArr[itemIndex - 1] = initVal;
                checkLeft(arr, itemArr, index, itemIndex - 1);
                checkUp(arr, itemArr, index, itemIndex - 1);
                checkDown(arr, itemArr, index, itemIndex - 1);
            }

        }

        function checkDown(arr, itemArr, index, itemIndex) {
            if (arr.length > (index + 1) && arr[index + 1][itemIndex]) {
                itemArr[itemIndex] = initVal;

                arr[index + 1][itemIndex] = initVal;
                console.log('down + 1');
                checkDown(arr, arr[index + 1], index + 1, itemIndex);
                checkRight(arr, arr[index + 1], index + 1, itemIndex);
                checkLeft(arr, arr[index + 1], index + 1, itemIndex);
            }

        }

        function checkUp(arr, itemArr, index, itemIndex) {
            if ((index - 1) >= 0 && arr[index - 1][itemIndex]) {
                itemArr[itemIndex] = initVal;

                arr[index - 1][itemIndex] = initVal;
                console.log('up + 1');
                checkUp(arr, arr[index - 1], index - 1, itemIndex);
                checkRight(arr, arr[index - 1], index - 1, itemIndex);
                checkLeft(arr, arr[index - 1], index - 1, itemIndex);
            }
        }

        function checkAll(arr, itemArr, index, itemIndex) {
            checkRight(arr, itemArr, index, itemIndex);
            checkLeft(arr, itemArr, index, itemIndex);
            checkUp(arr, itemArr, index, itemIndex);
            checkDown(arr, itemArr, index, itemIndex);

        }

        /*map.forEach(function(el, i, arr){
         el.forEach(function(element, index, array){
         if(element === 'asd'){
         if(array.length > (index + 1) && array[index + 1] === 'asd'){
         console.log('next el == asd');
         }
         }
         })
         });*/

        console.log(map);

        return (counter - islandLength);
    }

    root.SHRI_ISLANDS.solution = solution;
})
(this);
