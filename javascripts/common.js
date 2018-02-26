$(function(){

        // 头部导航效果
        var show = true;
        $('.menu-btn').on('click',function(){
            if(show){
                $('.ui-sider').animate({'width':'0px'},300)
                show = false;
            }else{
                $('.ui-sider').animate({'width':'258px'},300)
                show = true;
            }
        })

        $('.ui-nav').on('click','a',function(){
            $(this).parent('.ui-nav-item').addClass('ui-nav-itemed').siblings().removeClass('ui-nav-itemed');
        })
        $('.ui-nav').append('<span class="nav-bar"></span>');
        var left;
        $('.ui-nav').on('mouseenter','.ui-nav-item',function(){
            left = $(this).position().left;
             $(this).parent('.ui-nav').find('.nav-bar').css({
                'left':left,
                'width':$(this).width(),
                'opacity':'1'
            })
        })        
        $('.ui-nav').on('mouseleave',function(){
            $(this).find('.nav-bar').css({
                'left': $('.ui-nav-item').width()/2+left,
                'width':'0',
                'opacity':'0'
            })
        })
        // 头部导航结束

        $('.ui-head-menu').click(function() {
            if( $('.user-operatio').is(':hidden')){
                $(this).addClass('on');
                $('.user-operatio').slideDown(200);
            }else{
                $(this).removeClass('on');
                $('.user-operatio').slideUp(200);
            }
            return false;
        })

        $('.user-operatio').click(function(){
            return false;
        })

        $(document).click(function(){
            $('.user-operatio').slideUp(200)
            $('.ui-head-menu').removeClass('on');
        })

        $('.themes').hover(function() {
            $(this).children('.theme-list').fadeIn(150)
        }, function() {
            $(this).children('.theme-list').fadeOut(150)
        })

        $('.theme-list').on('click','dd',function(){
            var name = $(this).attr('name');
            $(this).addClass('theme-this').siblings().removeClass('theme-this');
            $('.theme').attr('class','theme '+name);
        })

        //左侧菜单效果

        $('.menu-head').css({
            'margin-left':($('.menu').width()-$('.menu-head').width())/2
        })

        $('.menu-tree').on('click','a',function(){
            $(this).parent('.menu-item').toggleClass('menu-itemed');
        })
        $('.menu-tree').append('<span class="menu-bar"></span>');
        var top;
        $('.menu-tree').on('mouseenter','.menu-item',function(){
            top = $(this).position().top;
             $(this).parents('.menu-tree').find('.menu-bar').css({
                'top':top,
                'height':$(this).children('a').height(),
                'opacity':'1'
            })
        })        
        $('.menu-list').on('mouseleave',function(){
            $(this).find('.menu-bar').css({
                'top': $('.menu-item>a').height()/2+top,
                'height':'0',
                'opacity':'0'
            })
        })

        $('.menu-list').on('click','.menu-child a',function(){
            $(this).parents('.menu-tree').find('.menu-child dd').removeClass('menu-this');
            $(this).parent().addClass('menu-this');
        })
        //左侧菜单效果结束
    })