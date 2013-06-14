$(document).ready(function(){
	
	
/* bye mouseover the navbuttons get highlighted with a yellow border */
	
    $('#navHome, #navIssues, #navContact, #navAbout, img').mouseover(function() {
        $(this).addClass('highlighted');       
		});

	$('#navHome, #navIssues, #navContact, #navAbout, img').mouseout(function() {
		$(this).removeClass('highlighted');
		});
		
		
/* the header (The Storyboarder) moves 950px from his old position to the right */

	$("#header").animate({
		left:'950px',	
    	});
    	
    	
/* subheader goes 1150px from the old Pos. to the right */
    	
    $("#subheader").animate({
		left:'1000px',
    	});

 
 
 
/* the header on issues.html gets a new CSS Position to start from, its at start 250px from the left side */
/* index.html pos. was -800, it animates 1050 to the right (950 - 800 = 150px is new Pos.) */
    
    $('#headerIssue').css('margin-left','150px');
    
/* the header on issue.html went from his old pos. at 250px from the left side 420px more to the left and 120px up */
    
    $("#headerIssue").animate({
		left:'80px',
		top:'-60px',
    	});  
    	
/* subheaderIssue gets new Pos. on issues.html */    	
    
    $('#subheaderIssue').css('margin-left','200px');

    	
    $("#subheaderIssue").fadeOut(3000);
    	
	    	
/*	table on the issues.html gets a pos. outside the screen and than animates 620px to the right in view */
    	
    $('.tableIssue').css('margin-left','-800px');

    $(".tableIssue").animate({
		left:'1000px',
    	});
    	   
});



	