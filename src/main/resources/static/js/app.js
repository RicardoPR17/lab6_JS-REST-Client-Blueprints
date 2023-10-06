var Module = (function () {
    // Private variables
    var author;
    var list = [];
    // Private method to access private variable
    function changeName() {
        author = document.getElementById("author").value;
        $("#author2").text(author + "'s blueprints: ");
    }

    var fun = function(list){
        console.info(list);
        //console.log("HOLAAA");
        const blueprints = list.map(function(bp){
            return {name: bp.name, points: bp.points.length};
        });

        $("#blueprints").find("td").remove();

        blueprints.map(function(bp) {
            var row = "<tr><td>" + bp.name + "</td><td>" + bp.points + "</td></tr>";
            $("#blueprints").append(row);
        });



        var totalPoints = list.reduce(function(total, bp) {
            return total + bp.points.length;
        }, 0);

        $("#totalPoints").text(totalPoints);


    }

    function setList(author){
        changeName();
        apimock.getBlueprintsByAuthor(author,fun);
    }
    // Public method that allows updating a private variable
    return {
        changeName: changeName,
        setList: setList

    }

})();