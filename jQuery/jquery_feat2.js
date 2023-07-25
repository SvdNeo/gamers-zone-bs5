// Custom data -* Attributes

$(document).ready(function () {
    $("#data_attr1").click(function () {
        let result1 = `${$("#student1").data("author-name")} ${$("#student1").data("year")}`;
        $("#results1").html(result1);
        $("#student1").data("author-name", "Sumanth");
        $("#student1").attr("title", "Title Attribute Added");
    });


});