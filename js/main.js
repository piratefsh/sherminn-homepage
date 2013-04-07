$(document).ready(function(){
	
	//smooth scroll to href
	function scrollToHref(event)
	{
		event.preventDefault(); //prevent default a jump
		var scrollVertical = $('section' + this.href.substring(this.href.indexOf("#")));
		$(this).parents("body").scrollTo(scrollVertical, 500);
		return false;
	}
	
	$("a.next_section").click(scrollToHref);
	$("nav a").click(scrollToHref);
	
	//float next button just above bottom of screen
	
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
