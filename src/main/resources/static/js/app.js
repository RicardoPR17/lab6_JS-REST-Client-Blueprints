import * as apimock from "apimock.js"

var Module = (function () {
    // Private variables
    var author;
    var list = [];
    // Private method to access private variable
    function changeName () {
        author = $("#author").val();
    }

    function fun() {
        var blueprints = list.map(function(bp){
            return {name: plano.name, points: plano.points.length};
        });

        $("#blueprints").find("td").remove();

        blueprints.map(function(bp) {
            var row = "<tr><td>" + bp.name + "</td><td>" + bp.points + "</td></tr>";
            $("#blueprints").append(fila);
        });

        var totalPoints = list.reduce(function(total, bp) {
            return total + bp.points.length;
        }, 0);

        $("#totalPoints").text(totalPoints);


    }

    function setList (author_new){
        //changeName();
        apimock.getBlueprintsByAuthor(author_new,fun);
    }
    // Public method that allows updating a private variable
    return {
        changeName: changeName,
        setList: setList

    }

})();