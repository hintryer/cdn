function GoTop($ct) {
    // 直接使用 body 标签作为容器
    this.$ct = $('body');
    this.$target = $('<button class="target">回到顶部</button>');
    this.$target.css({
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        border: '1px solid black',
        'border-radius': '3px',
        background: 'black',
        color: 'white',
        cursor: 'pointer',
        padding: '5px 8px'
    });
}

GoTop.prototype.createNode = function() {
    this.$ct.append(this.$target);
    this.$target.hide();
};

GoTop.prototype.bindEvent = function() {
    var $btn = this.$target;
    $btn.on('click', function() {
        $(window).scrollTop(0);
    });

    $(window).on('scroll', function() {
        var $scrollTop = $(this).scrollTop();
        if($scrollTop > 100) {
            $btn.fadeIn();
        } else {
            $btn.fadeOut();
        }
    });
};

// 初始化
$(document).ready(function() {
    var goTop = new GoTop($('body'));
    goTop.createNode();
    goTop.bindEvent();
});
