(function (root) {
    var map = root.SHRI_ISLANDS.MAP;
    var count = root.SHRI_ISLANDS.solution(map);

    document.querySelector('.outer').appendChild(
      root.SHRI_ISLANDS.render(map, count)
    );

    /*document.addEventListener("DOMContentLoaded", function(event) {
        root.SHRI_ISLANDS.visualizeSolution(map);
    });*/
})(this);
