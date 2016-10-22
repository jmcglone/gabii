  $(document).ready( function() {
	   getToUnity();
  });

  // Wait for the page to load first
  function getToUnity(s) {

    u.getUnity().SendMessage("WebCommunicator", "ShowString", s);

  }
