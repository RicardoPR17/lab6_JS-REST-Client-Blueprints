var Module = (function () {
    // Private variables
    var author;
    var list = [];
    // Private method to access private variable
    function changeName() {
        //author = $("#author").val();
        //$("#author2").text(author);
        author = document.getElementById("author").value;
        //author = author_new;
        //$("#author2").val()=author;
        $("#author2").text(author + "'s blueprints: ");
    }

    function fun() {
        const blueprints = list.map(function(bp){
            return {name: bp.name, points: bp.points.length};
        });

        $("#blueprints").find("td").remove();

        blueprints.map(function(bps) {
            var row = "<tr><td>" + bps.name + "</td><td>" + bps.points + "</td></tr>";
            $("#blueprints").append(row);
        });

        var totalPoints = list.reduce(function(total, bpss) {
            return total + bpss.points;
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