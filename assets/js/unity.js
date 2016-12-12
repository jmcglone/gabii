  $(document).ready( function() {

    // if Chrome, disable menu, replace links to unity with links to db, display message.
    if (bowser.chrome) {
      $( ".toggle-menu").removeClass( "menu-active glyphicon-chevron-right");
      $( ".cbp-spmenu").removeClass( "menu-open");
      $( ".text" ).toggleClass( "unity-off" );
      $( ".text .col-sm-12" ).prepend('<p class="unsupported">' + bowser.name + ' is not compatible with the Unity plug-in used to power the Gabii 3-D model. You will still be able to read the full-text and interact with Gabii database records. However, to access the 3-D model, please use a Unity plug-in compatible browser such as Firefox or Safari.</p>');
      $( "#unityPlayer").html('<p class="unsupported">' + bowser.name + ' is not compatible with the Unity plug-in used to power the Gabii 3-D model. You will still be able to read the full-text and interact with Gabii database records. However, to access the 3-D model, please use a Unity plug-in compatible browser such as Firefox or Safari.</p>')
    } else {
      getToUnity();
      fullscreenUnity();
    }
  });

  // Wait for the page to load first
  // Open menu if it is closed
  function getToUnity(s) {

    if ($('#unity-menu').hasClass('menu-open')) {
      u.getUnity().SendMessage("WebCommunicator", "ShowString", s);
    } else {
      $( ".text" ).removeClass( "unity-off" );
      $( ".toggle-menu").toggleClass( "menu-active glyphicon-chevron-right");
      $( ".cbp-spmenu").toggleClass( "menu-open");
      u.getUnity().SendMessage("WebCommunicator", "ShowString", s);
    }

  }

  function fullscreenUnity() {
      Screen.fullScreen = !Screen.fullScreen;
  }
