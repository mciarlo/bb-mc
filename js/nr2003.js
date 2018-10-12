var trackIDs = [
	{
		"el"	: "chicagoland-day-dl",
		"tag"	: "chicagoland_2018_day"},
	{
		"el"	: "chicagoland-night-dl",
		"tag"	: "chicagoland_2018_night"},
	{
		"el"	: "richmond-night-dl",
		"tag"	: "richmond_2018_night"}
];

for (x = 0; x < trackIDs.length; x++) {
	downloadItem = trackIDs[x];
	el = document.getElementById(downloadItem["el"]);

	el.addEventListener("click", function(e){
		var downloadType =
		gtag('event', 'download', {
		  'event_category' : 'nr2003',
		  'event_label' : downloadItem["tag"]
		});
	});
}

var SCROLL_PADDING = 80,
	SCROLL_DURATION_MS = 400;

$(function (){
	$(".next-btn").click(function (ev) {
		ev.preventDefault();
		ev.stopPropagation();

		var $this = $(this),
		track = $this.parent(),
		index = parseInt(track.attr("data-attr-index")),
		gallery = track.find(".gallery"),
		maxImages = gallery.find("li").length,
		nextIndex = !isNaN(index) ? index + 1 : 1;

		if (index >= maxImages - 1) {
			nextIndex = 0;
		}

		gallery.find("li").removeClass("active");
		$(gallery.find("li")[nextIndex]).addClass("active");
		track.attr("data-attr-index", nextIndex);
	});

	$(".track-nav a").click(function (ev) {
		ev.preventDefault();
		ev.stopPropagation();

		var $this = $(this),
		trackID = $this.attr("href"),
		top = $(trackID).offset().top;

		$("html, body").animate(
			{
				"scrollTop": top - SCROLL_PADDING
			}, SCROLL_DURATION_MS);
	});
});
