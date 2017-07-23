@extends("layout.master")
@section("title", "Error | Lazyload.net")
@section("content")
<div class="content-full" style="text-align: center">
	<?php
		if ($code) {
			$message = $code;
			switch ($code) {
				case '404' : {
					$message .= ' Page not found.';
					break;
				}
				default: {

				}
			}
			?>
			<p>Error Code: <?= $code * 2;?> / 2 = <h2><?= $message;?></h2> </p>
			<?php
		}
	?>
	<img src="/images/hello_message.png" style="width:100%">
</div>
@stop
