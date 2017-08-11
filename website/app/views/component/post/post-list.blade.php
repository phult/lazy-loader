<div class="talk-box">
    <div class="col-sm-12">
        <h2 class="bucket-title"><span><?= $title; ?></span></h2>
        <div id="post-item-container" class="talk-news row">
            <?php
            if (count($posts) == 0) {
                ?>
                <img src="/images/empty_message.png" style="width:100%">
                <?php
            }
            foreach ($posts as $post) {
                echo View::make('/component/post/post-item', ['post' => $post]);
            }
            ?>
        </div>
        <div id="post-item-loading" class="talk-news row" style="text-align: center;display:none">
            <img src="/images/icons/loading.gif" />
        </div>
    </div>
    <div class="clearfix"></div>
</div>

<script>
    var page = 0;
    var type = '<?= $type ?>';
    var postId = <?= isset($post) ? $post->id : -1 ?>;
    var loading = false;
    var eof = false;
	function loadMore() {
        if (loading || eof) {
            return;
        }
        loading = true;
        page++;
        $("#post-item-loading").show();
        var requestURL = "post/load-more?type=" + type + "&page=" + page + "&postId=" + postId;
        $.get(requestURL, function(data) {
            loading = false;
            $("#post-item-loading").hide();
            if (data.status = 'successful') {
                if (data.result == "") {
                    eof = true;
                } else {
                    $("#post-item-container").append(data.result);
                }
            }
        });
	}
</script>
