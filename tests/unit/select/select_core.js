/*
 * mobile select unit tests
 */

(function($){

	module( "Native select" );

	test( "Native select does not blur synchronously in response to change", function() {
		var selectmenu = $( "#blur-test" );

		selectmenu.focus();

		selectmenu.trigger( "change" );

		deepEqual( selectmenu.parent().hasClass( "ui-focus" ), true,
			"Native select is focused after triggering 'change'" );
	});

	module( "Custom select" );

	test( "Custom select is enhanced correctly", function() {
		var popup = $( "#enhance-test-listbox" );

		deepEqual( $( "#enhance-test-listbox a:first" ).attr( "role" ), "button", "The close button for a multiple choice select popup has the " + '"' + "role='button'" + '"' + " set" );
		deepEqual( popup.popup( "option", "overlayTheme" ), "b", "Popup has overlayTheme b" );
		deepEqual( popup.popup( "option", "theme" ), "x", "Popup has theme x" );

	});

	module( "Custom select Multiple" );

	test( "Custom select multiple is cleared correctly", function() {
		var popup = $( "#enhance-test-listbox" );
		$( "#enhance-test" )
			.find( "option" )
				.attr( "selected", false )
				.prop( "selected", false )
			.end()
			.selectmenu( "refresh" );
		deepEqual( popup.find( ".ui-checkbox-on" ).length, 0,
			"Checkboxes should not have ui-checkbox-on class" );
	});

	module( "Custom select Multiple Inline" ) ;

	test( "Custom select Multiple Inline width is adjusted correctly", function() {
	var selectMenu = $( "#width-test" );
	var parent = $( "#width-test" ).parent();
	var widths = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
	var finalResult = 0 ;
	$.each(widths , function(index, width){
		parent.css({"width": width+"px"}) ;
		$( "#width-test" )
			.find( "option" )
				.attr( "selected", true )
				.prop( "selected", true )
			.end()
			.selectmenu( "refresh" );
	var result = ( selectMenu.width() < parent.width() ? 1 : 0 );
	if(result == 1)
	finalResult += 1 ;
	}) ;
			deepEqual( finalResult, 10,
			"select menu width should not exceed parent's width" );
	}) ;


	module( "Native select" );

	test( "Select menu ID", function() {
		ok( $( ".no-id-test" ).closest( ".ui-btn" ).attr( "id" ) !== "undefined-button", "Select menu without an ID does not result in the button having name 'undefined-button'" );
	});
})(jQuery);
