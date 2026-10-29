$(document).ready(function() {
    // 添加目录容器
    const toc = $('<nav id="toc"></nav>');
    $('body').append(toc);

    // 添加样式到头部
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            #toc {
                position: fixed;
                top: 20px;
                left: 20px;
                width: 200px;
                background-color: #f9f9f9;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                max-height: 80vh;
                overflow-y: auto;
            }
            #toc .catalog {
                cursor: pointer;
                padding: 5px;
                margin: 5px 0;
            }
            #toc .catalog:hover {
                background-color: #e9e9e9;
            }
            #toc .catalog-active {
                font-weight: bold;
                color: #000;
                background-color: #e0e0e0;
            }
            .content {
                margin-left: 250px;
            }
            h1, h2, h3, h4, h5, h6 {
                position: relative;
            }
            h1::before, h2::before, h3::before, h4::before, h5::before, h6::before {
                content: "";
                display: block;
                height: 60px;
                margin-top: -60px;
                visibility: hidden;
            }
            h1 { 
                padding-top: 60px;
                margin-top: -60px;
            }
            h2, h3, h4, h5, h6 {
                padding-top: 40px;
                margin-top: -40px;
            }
        `)
        .appendTo('head');

    const headings = $('h1,h2,h3,h4,h5,h6');
    
    // 为每个标题生成目录项
    headings.each(function() {
        const $heading = $(this);
        const headingLevel = this.tagName.toLowerCase();
        const headingName = $heading.text().trim();
        const anchorName = headingName.toLowerCase().replace(/\s+/g, '-');
        
        // 如果标题没有ID，则为其添加
        if (!this.id) {
            this.id = anchorName;
        }
        
        toc.append(`<div class="catalog catalog-${headingLevel}" name="${anchorName}">${headingName}</div>`);
    });

    // 跟踪当前章节
    const catalogTrack = () => {
        const scrollPosition = $(document).scrollTop();
        let $currentHeading = null;
        
        headings.each(function() {
            const $heading = $(this);
            if ($heading.offset().top - scrollPosition > 20) {
                return false; // jQuery's .each() equivalent to break;
            }
            $currentHeading = $heading;
        });

        if ($currentHeading) {
            const anchorName = $currentHeading.attr('id');
            const $catalog = toc.find(`.catalog[name="${anchorName}"]`);
            
            if (!$catalog.hasClass('catalog-active')) {
                toc.find('.catalog-active').removeClass('catalog-active');
                $catalog.addClass('catalog-active');
            }

            toc.scrollTop($catalog.position().top - toc.position().top);
        } else {
            toc.scrollTop(0);
        }
    };

    // 绑定滚动事件
    $(window).on('scroll', catalogTrack);

    // 添加点击事件到目录项
    $('.catalog').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('name');
        const $target = $(`#${target}`);
        $('html, body').animate({
            scrollTop: $target.offset().top - 20
        }, 500);
    });
});
