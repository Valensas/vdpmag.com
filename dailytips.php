<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
	<style type="text/css" media="screen">
	
		.tip_container {
			width: 500px;
			height: 600px;
			margin: 0 auto;
			text-align:center;
			display: block;
			background: url('bg-tipoftheday.png') no-repeat center center;
		}
		
		.tip {
			font-family:"Myriad Pro", Helvetica, Arial, sans-serif;
			font-size:14px;
			color: #414141; 
			text-shadow: 0 1px rgba(255,255,255,.5);
			position: relative;
			top: 280px;
			
		}
		
		h1 {
			font-family:"Myriad Pro", Helvetica, Arial, sans-serif;
			font-size: 24px;
			color: #59657d;
			text-shadow: 0 1px rgba(255,255,255,.5), inset 0 1px 2px rgba(0,0,0,.45);
			position: relative;
			top: 290px;
			
		}
		
		
		
	</style>
	<script>
		var currentVersion = 116;
		var updateMessage = "Warning: You are currently using an older version of VDP manager!<br/>Please update to take advantage of the most recent fixes and features.<br/>http://vdpmag.com/downloading";
		var messages = [ 	"The new Collection View allows users to view pages in a more organized way.", 
							"With Retina Support enabled you can now optimise your content for high resolution displays.",
							"You can animate widgets without developing any code using the Animation tab within Inspector.",
							"Make sure to take regular backups of .vdp files.",
							"In order to embed Online Videos from popular services like YouTube you should use the WebKit Widget instead of Video.",
							"Online video links must be direct links, not short links, in order to work.",
							"You can edit multiple values in Inspector when working with animations and metrics.",
							"VDP Viewer must reside in the same wireless network in order to work with VDP Manager.",
							"You must publish a magazine in VDP Manager first in order to see a preview in VDP Viewer. VDP Viewer is disabled by default.",
							"You can turn on/off inspector to see a widget's options."
							];
	
		function getParameterByName(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
	    	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}
		window.onload = function(e){ 
			var version = getParameterByName("version");
			var message;
		    if(version < currentVersion) {
		    	message = updateMessage;
		    } else {
				message = messages[Math.floor(messages.length * Math.random())];
		    }
			document.getElementById("tip").innerHTML = message;
		}
	</script>
</head>
<body>

<div class="tip_container">
	<h1>Tip of the Day</h1>
    <div class="tip" id="tip"></div>
</div>
</body>
</html>
