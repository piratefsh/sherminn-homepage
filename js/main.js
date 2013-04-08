
$(document).ready(function(){
	$('div#header_img').fadeIn();
	$("img#header_img").ready(function(e)
	{
		var img = $("div#header_img");
		img.fadeIn();
		// $("body").css('background-image', 'url(./img/header.png)').fadeIn();

	});
	//smooth scroll to href
	function scrollToHref(event)
	{
		event.preventDefault(); //prevent default a jump
		var scrollVertical = $('section' + this.href.substring(this.href.indexOf("#")));
		var pos = {
			top: scrollVertical.position().top,
			left: 0
		}
		$(this).parents("body").scrollTo(pos , 500);
		return false;
	}
	
	$("a.next_section").click(scrollToHref);
	$("nav a").click(scrollToHref);
	
	
	//functional scrambler on page
	$("input#activate_scrambler").click(function()
	{
		scramble($('body'));
	});
	$("input#deactivate_scrambler").click(function()
	{
		document.location.reload(true);
	});

	//make all external links in project open in new window
	$("div.project a").attr("target", "_blank") 
});
