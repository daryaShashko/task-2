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
    var copyMap = map.copyWithin();
    console.log(copyMap);
    if (copyMap == null || copyMap.length === 0) {
      return 0;
    }
    var numOfRows = copyMap.length;
    var numOfColls = copyMap[0].length;
    var num_islands = 0;
    for (var i = 0; i < numOfRows; ++i) {
      for (var j = 0; j < numOfColls; ++j) {
        if ((copyMap[i][j]) == '1') {
          ++num_islands;
          checking(copyMap, i, j);
        }
      }
    }
    return num_islands;
  }


  function checking(map, row, coll) {
    var copyMap = map.copyWithin();
    var numOfRows = copyMap.length;
    var numOfColls = copyMap[0].length;
    if (row < 0 || coll < 0 || row >= numOfRows || coll >= numOfColls || (copyMap[row][coll]) == WATER) {
      return;
    }
    copyMap[row][coll] = '0';
    checking(copyMap, row - 1, coll);
    checking(copyMap, row + 1, coll);
    checking(copyMap, row, coll - 1);
    checking(copyMap, row, coll + 1);
  }

  root.SHRI_ISLANDS.solution = solution;
})
(this);






