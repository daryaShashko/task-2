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
    var counterOfItems = 0;
    var counterOfIslands = 0;
    var map = document.querySelectorAll('.map');
    var mapInfo = element('div', 'map__info');

    var mapCounter = element('div', 'map__counter');
    var mapCounterLabel = element('h2', 'map__counter-label', 'Counter of items: ');
    var mapCounterValue = element('div', 'map__counter-value', `${counterOfItems}`);

    var mapIslandCounter = element('div', 'map__counter ' + 'map__counter_island');
    var mapIslandCounterLabel = element('h2', 'map__counter-label', 'Counter of Islands: ');
    var mapIslandCounterValue = element('div', 'map__counter-value', `${counterOfIslands}`);


    var addOne = element('div', 'map__counter-add', '+1');


    map[0].appendChild(mapInfo);
    mapInfo.appendChild(mapCounter);
    mapCounter.appendChild(mapCounterLabel);
    mapCounter.appendChild(mapCounterValue);
    mapCounter.appendChild(addOne);
    mapInfo.appendChild(mapIslandCounter);
    mapIslandCounter.appendChild(mapIslandCounterLabel);
    mapIslandCounter.appendChild(mapIslandCounterValue);


    var i = 0, howManyTimes = rows.length;

    function f() {
      addSelectedForRow(rows[i]);
      i++;
      if (i < howManyTimes) {
        setTimeout(f, 5000);
      }
    }

    f();


    function delay(f, ms) {

      return function () {
        var savedThis = this;
        var savedArgs = arguments;

        setTimeout(function () {
          f.apply(savedThis, savedArgs);
        }, ms);
      };

    }

    function element(type, className, text) {
      var elem = document.createElement(type);
      elem.className = className;

      if (text) {
        elem.innerText = text;
      }

      return elem;
    }


    function addSelectedForRow(row) {
      row.classList.add('map__row_selected');
      var cells = document.querySelectorAll('.map__row_selected .map__cell');
      var j = 0, howManyTimesB = cells.length;
      function f() {
        addSelectedForSell(cells[j]);
        if (cells[j].classList.contains('map__cell_island')) {
          console.log('asd');
          counterOfItems += 1;
          mapCounterValue.innerHTML = counterOfItems;
        }
        j++;
        if (j < howManyTimesB) {
          setTimeout(f, 5000 / 4);
        }
      }

      f();
      (function () {
        setTimeout(function () {
          row.classList.remove('map__row_selected')
        }, 5000);
      })();
    }


    function addSelectedForSell(cell) {
      cell.classList.add('map__cell_selected');
      (function () {
        setTimeout(function () {
          cell.classList.remove('map__cell_selected')
        }, 5000 / 4);
      })();
    }
  }

  root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
