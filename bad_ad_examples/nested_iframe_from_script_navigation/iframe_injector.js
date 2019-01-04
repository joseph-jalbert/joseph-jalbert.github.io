const iframe = document.querySelector('#target');
const html = `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Iframe Redirect Source &mdash; Bad Ad Examples</title>
</head>
<body>
	<div id="soul">
		<div id="iframe-target">
			here is the ad
		</div>
		<script>
			setTimeout( function() {
				window.top.location = 'https://www.google.com?iframe';
			}, 15000)
		</script>
	</div>
</body>
</html>`;

iframe.contentDocument.write( html );
