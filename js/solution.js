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
        map.forEach(function(mapEl, mapIndex, mapArr){
            mapEl.forEach(function(mapItemEl, mapItemIndex, mapItemArr){
                if(mapItemEl){
                    counter += 1;
                    if(mapItemArr.length > (mapItemIndex + 1) && mapItemArr[mapItemIndex + 1]){
                        islandLength +=1;
                    }
                    if(mapArr.length > (mapIndex + 1) && mapArr[mapIndex + 1][mapItemIndex]){
                        islandLength +=1;
                    }
                }
            })

        });
        return (counter - islandLength);
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
