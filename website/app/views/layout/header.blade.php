<script>
    $(document).on("click", "#search-button, #search-bar button[type='reset']", function(event) {
        event.preventDefault();
        if ($("#search-button").attr("aria-expanded") == "true") {
            $("#search-input").focus();
        } else {
            $("#search-input").blur();
        }
    });
</script>
<nav id="mainNav" class="navbar navbar-inverse navbar-fixed-top affix-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#main-menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!--a class="navbar-brand" rel="home" href="/" title="Home page">
                <img style="max-width:35px; margin-top: -6px;" src="images/logo_original.png">
            </a-->
            <a  class="navbar-brand"
                href="/"
                style="text-align: center; float: none; line-height: 49px">
                <img style="max-width:35px; margin-top: -2px;display: inherit" src="images/logo_original.png">
            </a>
            <button id="search-button" type="button" class="navbar-toggle collapsed pull-right" data-toggle="collapse" data-target="#search-bar">
                <i class="glyphicon glyphicon-search"></i>
            </button>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="main-menu">
            <ul class="nav navbar-nav navbar-right">
                <li class="">
                    <a class="page-scroll" href="/latest"><i class="glyphicon glyphicon-globe"></i>&nbsp&nbsp Latest posts</a>
                </li>
                <li>
                    <a class="page-scroll" href="/history"><i class="glyphicon glyphicon-time"></i>&nbsp&nbsp History view</a>
                </li>
                <li>
                    <a class="page-scroll" href="/about"><i class="glyphicon glyphicon-baby-formula"></i>&nbsp&nbsp About us</a>
                </li>
            </ul>
            <!--form class="navbar-form navbar-right" role="search" method="get" id="searchform" action="">
                <div class="form-group">
                    <input id="s" name="s" type="text" class="search-query form-control" autocomplete="off" placeholder="Search...">
                </div>
            </form-->
        </div>
        <div class="collapse navbar-collapse" id="search-bar">
            <form class="navbar-form" role="search">
    			<div class="input-group">
    				<input id="search-input" name="s" type="text" class="form-control" placeholder="Search ...">
    				<span class="input-group-btn">
    					<button type="submit" class="btn btn-default">
    						<span class="glyphicon glyphicon-search">
    							<span class="sr-only">Search</span>
    						</span>
    					</button>
                        <button type="reset" class="btn btn-default" data-toggle="collapse" data-target="#search-bar">
            				<span class="glyphicon glyphicon-remove">
            					<span class="sr-only">Close</span>
            				</span>
            			</button>
    				</span>
    			</div>
    		</form>
        </div>
    </div>
</nav>
