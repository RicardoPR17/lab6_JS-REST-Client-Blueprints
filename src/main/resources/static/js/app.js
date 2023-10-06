var Module = (function () {
    // Private variables
    var author;
    var list = [];

    // Private method to access private variable
    function changeName() {
        author = document.getElementById("author").value;
        $("#author2").text(author + "'s blueprints: ");
    }

    var fun = function (list) {
        console.info(list);

        const blueprints = list.map(function (bp) {
            return { name: bp.name, author: bp.author, points: bp.points.length };
        });

        $("#blueprints").find("td").remove();

        blueprints.map(function (bp) {
            var row = '<tr><td>' + bp.name + '</td><td>' + bp.points + '</td><td><button onclick="Module.getBlueprint(\'' +
                bp.author + '\', \'' + bp.name + '\')">Open</button></td></tr>';
            $("#blueprints").append(row);
        });


        var totalPoints = list.reduce(function (total, bp) {
            return total + bp.points.length;
        }, 0);

        $("#totalPoints").text(totalPoints);

    }

    function setList(author) {
        changeName();
        apimock.getBlueprintsByAuthor(author, fun);
    }

    var drawBlueprint = function (blueprintToDraw) {
        console.info(blueprintToDraw);

        var blueprint = blueprintToDraw;

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 3;

        blueprint.points.forEach(function (point, index) {
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });

        ctx.stroke();
    }

    function getBlueprint(author, bpname) {
        $("#blueprint_name").text(bpname);
        apimock.getBlueprintsByNameAndAuthor(author, bpname, drawBlueprint);
    }

    // Public method that allows updating a private variable
    return {
        changeName: changeName,
        setList: setList,
        getBlueprint: getBlueprint
    }

})();