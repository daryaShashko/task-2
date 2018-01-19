(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution(map) {
        // todo: визуализировать работу алгоритма
        var rows = document.querySelectorAll('.map__row');

        var i = 0, howManyTimes = rows.length;
        function f() {
            addSelectedForRow(rows[i]);
            i++;
            if( i < howManyTimes ){
                setTimeout( f, 5000 );
            }
        }
        f();
    }

    function delay(f, ms) {

        return function() {
            var savedThis = this;
            var savedArgs = arguments;

            setTimeout(function() {
                f.apply(savedThis, savedArgs);
            }, ms);
        };

    }


    function addSelectedForRow(row){
        row.classList.add('map__row_selected');
        var cells = document.querySelectorAll('.map__row_selected .map__cell');
        var j = 0, howManyTimesB = cells.length;
        function f() {
            addSelectedForSell(cells[j]);
            j++;
            if( j < howManyTimesB ){
                setTimeout( f, 5000/4 );
            }
        }
        f();
        (function() {
            setTimeout(function(){  row.classList.remove('map__row_selected')}, 5000);
        })();
    }

    function addSelectedForSell(cell){
        cell.classList.add('map__cell_selected');
        (function() {
            setTimeout(function(){  cell.classList.remove('map__cell_selected')}, 5000/4);
        })();
    }


    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
