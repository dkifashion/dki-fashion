$(".products").slice(0, 10).show();
$(".loadMoreBtn").on("click", function () {
    $(".products:hidden").slice(0, 10).show();
    if ($(".products:hidden").length == 0) {
        $(".loadMoreBtn").fadeOut();
    }
});