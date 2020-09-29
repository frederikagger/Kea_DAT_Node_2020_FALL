// 1
$("body").css("text-align", "center");

// 2
$("#title h2").text("New Title");

// 4
// $(".temp").css("visibility", "hidden");
$(".temp").css("opacity", "0%")
// $(".temp").css("display", "none");
// $(".temp").hide();

// 6
$("#first-list li").css("font-weight", "bold");

// 7
$("#first-list").children().last().css("text-decoration", "underline");
// $("#first-list li:nth-child(3)").css("text-decoration", "underline");
// // $("#first-list li:last").css("text-decoration", "underline");
// // $("#first-list :eq(2)").css("text-decoration", "underline");

// 8
$("#first-list li:nth-child(2)").css("text-decoration", "line-through");

// 11
$(".unused-box label").remove();

// 12
$(".unused-box").append("<p>Second Sentence</p>");

// 13
// $(".unused-box").after("<p>First Sentence</p>");
// does it after the element not within it as a child
$(".unused-box").prepend("<p>First Sentence</p>");


// 14
// $(".unused-box").removeClass("unused-box").addClass("used-box");
$(".unused-box").attr("class", "used-box");


// 15
$(".used-box").on("click", (event) => {
    console.log($(event.currentTarget).parent());
    $(event.currentTarget).toggleClass("used-boxed-clicked");
});




