$(document).ready(function() {
    $('.carousel').each(function() {
        $(this).on('slide.bs.carousel', function(e) {
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 3;
            var totalItems = $(this).find('.carousel-item').length;

            if (idx >= totalItems - (itemsPerSlide - 1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i = 0; i < it; i++) {
                    if (e.direction === "left") {
                        $(this).find('.carousel-item').eq(i).appendTo(this);
                    } else {
                        $(this).find('.carousel-item').eq(0).appendTo(this);
                    }
                }
            }
        });
    });
});
