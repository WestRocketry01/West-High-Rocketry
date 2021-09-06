




var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {  
   // Change to Portrait
   alert("please go into landscape mode for the best experience for mobile");
} else {  
   // Landscape orientation
}

// Add a media query change listener
mql.addListener(function(m) {
   if(m.matches) {
      // Changed to Portrait
      alert("please go into landscape mode for the best experience for mobile");
   }
   else {
      // Changed to landscape
   }
});