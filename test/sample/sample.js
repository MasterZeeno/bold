jQuery(document).ready(function($) {
    if (typeof filmId !== 'undefined') {
        filmId = filmId;
    }else{
        filmId = false;
    }

    // if (filmId) {
    //     //player_default(filmId);
    //     $.post('/ajax/relatedAjax', {
    //         pg: 1,
    //         filmId: filmId
    //     }, function(response) {
    //         var item = JSON.parse(response);
    //         //$('#related').html(show_related(item));
    //         $('.lazy').lazyload({
    //             effect: 'fadeIn'
    //         });
    //     });

    // }
    // let pg_ = 1;
    // $('.load_more').on('click', function() {
    //     pg_ = pg_ + 1;
    //     $.post('/ajax/relatedAjax', {
    //         pg: pg_,
    //         filmId: filmId
    //     }, function(response) {
    //         var item = JSON.parse(response);
    //         $('#related').append(show_related(item));
    //         $('.lazy').lazyload({
    //             effect: 'fadeIn'
    //         });
    //     });
    // });
    $('img.lazy').lazyload({
        effect: 'fadeIn'
    });

    $('li.switch-source').on('click', function () {
        var _this = $(this);
        var episode = $(this).attr('data-episode');
        var filmId = $(this).attr('data-source');
        $('body, html').animate({
            scrollTop: 0,
        }, 700);
        $('.fakeplayer').hide();
        $('.player').show();
        $('.player').html("<div id='loader' style='position: absolute;top: 50%;left: 50%;margin-left: -32px;margin-top: -32px;'><img src='/assets/img/loadingplayer.gif' height='80'></div>");
        $.post('/ajax/player', {
            episode: episode,
            filmId: filmId
        }, function (response) {
            var item = JSON.parse(response);
            $('.player').html(item.player);
            $('ul.server-list').find('.active').removeClass('active');
            _this.addClass('active');
        });
    });

    $('#clickfakeplayer').on('click', function () {
        var _this = $(this);
        var episode = $(this).attr('data-episode');
        var filmId = $(this).attr('data-source');
        $('body, html').animate({
            scrollTop: 0,
        }, 700);
        $('.fakeplayer').hide();
        $('.player').show();
        $('.player').html("<div id='loader' style='position: absolute;top: 50%;left: 50%;margin-left: -32px;margin-top: -32px;'><img src='/assets/img/loadingplayer.gif' height='80'></div>");
        $.post('/ajax/player', {
            episode: episode,
            filmId: filmId
        }, function (response) {
            var item = JSON.parse(response);
            $('.player').html(item.player);
        });
    });

    function a() {
        $(this).find(".sub-container").css("display", "block")
    }

    function b() {
        $(this).find(".sub-container").css("display", "none")
    }
    $("#search a.box-title").click(function() {
            $("#search .box").toggleClass("active")
        }),
        $(".mobile-menu").click(function() {
            $("#menu,.mobile-menu").toggleClass("active"), $("#search, .mobile-search").removeClass("active")
        }),
        $(".mobile-search").click(function() {
            $("#search,.mobile-search").toggleClass("active"), $("#menu, .mobile-menu").removeClass("active")
        }),
        $(".filter-toggle").click(function() {
            $("#filter").toggleClass("active"), $(".filter-toggle").toggleClass("active")
        }), 
        $(".bp-btn-light").click(function() {
            $(".bp-btn-light, #overlay, #media-player").toggleClass("light-active")
        }),
        $(".bp-btn-auto").click(function() {
            $(".bp-btn-auto").toggleClass("active")
        }),
        $("#toggle, .cac-close").click(function() {
            $("#comment").toggleClass("active")
        }),
        $(".top-menu> li").bind("mouseover", a), $(".top-menu> li").bind("mouseout", b);
    var c = 0;

    $(window).on("scroll", function() {
        $(window).scrollTop() < c ? "fixed" != $("header").css("position") && ($("header").css({
            position: "fixed",
            top: -$("header").outerHeight(),
            backgroundColor: "#fff"
        }), $("header").animate({
            top: "0px"
        }, 500), $("#main").css("padding-top", $("header").outerHeight())) : ($("header").css({
            position: "relative",
            top: "0px"
        }), $("#main").css("padding-top", "0px")), c = $(window).scrollTop()
    });

    

    function scrollTop(element, easing) {
        if (typeof easing == 'undefine') {
            easing = 0;
        }
        $('html,body').animate({
            scrollTop: $(element).offset().top
        }, easing);
    }
   
   /* $("#rowTab a:first").tab("show");
    $("a.splash-image").click(function() {
        $(".idTabs li:nth-child(1) .les-content a").click();
    });
    $('.averagerate').each(function(t) {
        len = $(this).text().length, len > 3 && $(this).text($(this).text().substr(0, 3))
    });*/
    // slide player
    $('#backdrops').owlCarousel({
        items: 10,
        lazyLoad: !0,
        autoPlay: false,
        pagination: !1,
        navigation: !0,
        navigationText: ['', ''],
        itemsDesktop: [800, 3],
        itemsDesktopSmall: [600, 2],
        itemsTablet: [500, 2],
        itemsMobile: [400, 2],
        autoHeight:true,
    });
    $('.mvi-images').addClass('show');
    // $('a.splash-image').click(function() {
    //     $('.splash-image').remove();
    //     $('#content-embed').css('display', 'block');
    //     $('.splash-image').remove();
    //     $('#content_embed_pos1').css('display', 'block');
    // });

    // search navbar
    $('.search_action').click(function () {
        var kw = trim($('input[name="search-box"]').val());
        if(!kw){
            $.toast({text: 'Please typing keyword...', icon: 'error', position: 'top-right', stack: false});
            $('input[name="search-box"]').focus();
            return false;
        }
        kw = kw.toLowerCase().replace(/[\s\.:;=+]+/g, '-').replace(/-+-/g,"-").replace(/^\-+|\-+$/g,"");
        window.location.href = '/search/'+kw;

    });
    $('input[name="search-box"]').on('keypress', function (e) {
        var kw = trim($('input[name="search-box"]').val());
        if(e.which == 13) {
            if(!kw){
                $.toast({text: 'Please typing keyword...', icon: 'error', position: 'top-right', stack: false});
                $('input[name="search-box"]').focus();
                return false;
            }
            kw = kw.toLowerCase().replace(/[\s\.:;=+]+/g, '-').replace(/-+-/g,"-").replace(/^\-+|\-+$/g,"").replace("'", "");
            window.location.href = '/search/'+kw;
        }
    });

    // search home
    $('.search-hm-action').click(function () {
        var kw = trim($('input[name="search-hm-box"]').val());
        if(!kw){
            $.toast({text: 'Please typing keyword...', icon: 'error', position: 'top-right', stack: false});
            $('input[name="search-hm-box"]').focus();
            return false;
        }
        kw = kw.toLowerCase().replace(/[\s\.:;=+]+/g, '-').replace(/-+-/g,"-").replace(/^\-+|\-+$/g,"");
        window.location.href = '/search/'+kw;

    });
    $('input[name="search-hm-box"]').on('keypress', function (e) {
        var kw = trim($('input[name="search-hm-box"]').val());
        if(e.which == 13) {
            if(!kw){
                $.toast({text: 'Please typing keyword...', icon: 'error', position: 'top-right', stack: false});
                $('input[name="search-hm-box"]').focus();
                return false;
            }
            kw = kw.toLowerCase().replace(/[\s\.:;=+]+/g, '-').replace(/-+-/g,"-").replace(/^\-+|\-+$/g,"").replace("'", "");
            window.location.href = '/search/'+kw;
        }
    });

    // like
    
    $("button[id*='vote_']").on('click', function(event) {
        event.preventDefault();
        let _this = $(this);
        _this.attr('disabled', true);
        var vote_id = $(this).attr("id");
        var id_split = vote_id.split('_');
        var vote = id_split[1];
        var item_id = id_split[2];
        $.post('/ajax/liked', {
            item_id: item_id,
            vote: vote,
        }, function(response) {
            var item = jQuery.parseJSON(response);
            if (item.error == false) {
                if (item.likes != 0) {
                    $('#likevoteCount').html(item.likes)
                }
                if (item.dislikes != 0) {
                    $('#dislikevoteCount').html(item.dislikes)
                }
            } else {
               $.toast({text: item.msg, icon: 'warning', position: 'top-right', stack: false});
            }
            _this.attr('disabled', false);
        })
    });

    // Add favorite
    $('#favorite').on('click', function(e){
        e.preventDefault();
        var movie_id = $(this).attr('data-id');
        $.post('/user/addfav', {id: movie_id}, function(res) {
            if(res.error == true){ 
                if (res.count != 0){
                    $('#favoriteCount').html(res.count)
                }
                $.toast({text: res.msg, icon: 'success', position: 'top-right'});
            }else{ 
                $.toast({text: res.msg, icon: 'warning', position: 'top-right'});
            }
        });
    });

    // Remove favorite
    $('.remove-fav').on('click', function(e){
        if (confirm('Are you want remove this movie from favorite?')) {
            e.preventDefault();
            var movie_id = $(this).attr('data-id');
            $.post('/user/removefav', {id: movie_id}, function(res) {
                if(res.error == false){ 
                   
                }else{
                    window.location.reload(true);
                }
            });
        }
    });

     // Add Follow
    $('#follow').on('click', function(e){
        e.preventDefault();
        var actor_id = $(this).attr('data-id');
        var actor_name = $(this).attr('data-name');
        $.post('/user/addfollow', {id: actor_id, actor: actor_name}, function(res) {
            if(res.status == 1){
                if (res.count != 0){
                    document.getElementById("follow").innerHTML='<i class="fas fa-rss"></i> ' +res.count+ ' Unfollow';
                    $('#follow').addClass("btn-danger").removeClass("btn-default");
                }
            }else if(res.status == 2){
                document.getElementById("follow").innerHTML='<i class="fas fa-rss"></i> ' +res.count+ ' Follow';
                $('#follow').addClass("btn-default").removeClass("btn-danger");
            }else{ 
                $.toast({text: 'Please Login To Follow', icon: 'warning', position: 'top-right'});
            }
        });
    });

    // $('#comment').submit(function(e){
    //     e.preventDefault();
    //     $.post('/ajax/comment', $("#comment").serialize(), function(response) {
    //         var item = JSON.parse(response);
    //         if (item.code == 0) {
    //             $('.msg_error').hide();
    //             $('.msg_ok').show();
    //             $('.msg_ok').html(item.msg);
    //             document.getElementById("comment").reset();
    //         } else {
    //             $('.msg_ok').hide();
    //             $('.msg_error').show();
    //             $('.msg_error').html(item.msg);
    //         }
    //     });
    // });

    

    $('#close-modal-trailer').on('click', function(){
        $('.modal-body-trailer video')[0].pause();
    })

    // Go To Page
    $('#go_page_left, #go_page_right, #go_page_mobile').on('click', function() {
        $('#pop-gopage').modal();
    });

    $('#gopage').on('submit', function(e) {
        e.preventDefault();
        let formdata = new FormData(this);
        let url = window.location.href;
        let page = formdata.get("pages");
        if(isNaN(page)){
            $.toast({text: page + " is not a number.", icon: 'error', position: 'top-right'});
        }else{
            if(url.includes("pg-")){
                current = url.split('pg-')[0];
                window.location =  current +'pg-' +page;
            }else if(url.includes("?sort=")){
                current = url.split('&pg=')[0];
                window.location =  current+'&pg=' +page;
            }else{
                current = url.replace('#','');
                window.location =  current +'/pg-' +page;
            }
        }
    });
    $("#myFilter").submit(function(event) {
        let action = $('#myFilter').attr('action');
        let genre = $('#myFilter :input[name=genre]').val();
        let quality = $('#myFilter :input[name=quality]').val();
        let year = $('#myFilter :input[name=year]').val();
        let sort = $('#myFilter :input[name=sort]').val();
        if (genre == 'all' && quality == 'all' && year == 'all' && sort == 'desc') {
            event.preventDefault();
            window.location.href = action;
        }
    });

    $('#SFilter').on('click', function () {
        if($('.myFilter').css('display') == "none") {
            $(".myFilter").css("display", "block");
        }else{
            $(".myFilter").css("display", "none");
        }
    });

    $('button[type="reset"]').on('click', function() {
        let action = $('#myFilter').attr('action');
        window.location.href = action;
    });

    $('.bp-btn-download').on('click', function(){
        if($(this).hasClass('dl-active')) {
            $(".bp-btn-download").removeClass("dl-active");
            $("#download").css("display", "none");
        }else{
            $(".bp-btn-download").toggleClass("dl-active");
            $("#download").css("display", "block");
            scrollTop("#media-player", "slow");
        }
    });

    $('.bp-btn-shared').on('click', function(){
        if($(this).hasClass('shared-active')) {
            $(".bp-btn-shared").removeClass("shared-active");
            $("#shared").css("display", "none");
        }else{
            $(".bp-btn-shared").toggleClass("shared-active");
            $("#shared").css("display", "block");
            scrollTop("#media-player", "slow");
        }
    });


});

/*function player_default(filmId) {
    var filmId = parseInt(filmId);
    var episode = 0;
    $.post('/ajax/player', {
        episode:episode,filmId: filmId
    }, function(response) {
        var item = JSON.parse(response);
        $('#jplayer').html(item.player);
    })
}*/

function trim(a) {
    return a.replace(/^s*(S*(s+S+)*)s*$/, "$1");
}

// (function($) {
//     'use strict';
//     $(document).on('click', '.sl-button', function() {
//         var button = $(this);
//         var post_id = button.attr('data-post-id');
//         var security = button.attr('data-nonce');
//         var iscomment = button.attr('data-iscomment');
//         var allbuttons;
//         if (iscomment === '1') {
//             allbuttons = $('.sl-comment-button-' + post_id);
//         } else {
//             allbuttons = $('.sl-button-' + post_id);
//         }
//         var loader = allbuttons.next('#sl-loader');
//         if (post_id !== '') {
//             $.ajax({
//                 type: 'POST',
//                 url: psyAjax.url,
//                 data: {
//                     action: 'process_simple_like',
//                     post_id: post_id,
//                     nonce: security,
//                     is_comment: iscomment,
//                 },
//                 beforeSend: function() {
//                     loader.html('&nbsp;<div class="loader">Loading...</div>');
//                 },
//                 success: function(response) {
//                     var icon = response.icon;
//                     var count = response.count;
//                     allbuttons.html(icon + count);
//                     if (response.status === 'unliked') {
//                         var like_text = psyAjax.like;
//                         allbuttons.prop('title', like_text);
//                         allbuttons.removeClass('liked');
//                     } else {
//                         var unlike_text = psyAjax.unlike;
//                         allbuttons.prop('title', unlike_text);
//                         allbuttons.addClass('liked');
//                     }
//                     loader.empty();
//                 }
//             });
//         }
//         return false;
//     });
// }
// )(jQuery);

function player_default(filmId) {
    var filmId = parseInt(filmId);
    var episode = 0;
    $.post('/ajax/player', {
        episode:episode,filmId: filmId
    }, function(response) {
        var item = JSON.parse(response);
        $('#jplayer').html(item.player);
    })
}

function pt_open_login_dialog(href) {
    jQuery('#pt-user-modal .modal-dialog').removeClass('registration-complete');
    var modal_dialog = jQuery('#pt-user-modal .modal-dialog');
    modal_dialog.attr('data-active-tab', '');
    switch (href) {
    case '#pt-register':
        modal_dialog.attr('data-active-tab', '#pt-register');
        break;
    case '#pt-login':
    default:
        modal_dialog.attr('data-active-tab', '#pt-login');
        break;
    }
    jQuery('#pt-user-modal').modal('show');
}

function pt_close_login_dialog() {
    jQuery('#pt-user-modal').modal('hide');
}

function reset_captcha() {
    var count = 0;
    $(".g-recaptcha").each(function () {
        grecaptcha.reset(count);
        count++;
    });
}

jQuery(function($) {

    "use strict";
    /***************************
	**  LOGIN / REGISTER DIALOG
	***************************/
    // Open login/register modal
    $('[href="#pt-login"], [href="#pt-register"]').click(function(e) {
        e.preventDefault();
        pt_open_login_dialog($(this).attr('href'));
    });

    // Switch forms login/register
    $('.modal-footer a, a[href="#pt-reset-password"], a[href="#pt-receive-confirm"]').click(function(e) {
        e.preventDefault();
        console.log(e);
        $('#pt-user-modal .modal-dialog').attr('data-active-tab', $(this).attr('href'));
    });

    // Post login form
    $('#pt_login_form').on('submit', function(e) {
        e.preventDefault();
        var button = $(this).find('button');
        button.button('loading');
        $.post('/user/login', $('#pt_login_form').serialize(), function(obj) {
            $('.pt-login .pt-errors').html(obj.message);
            if (obj.error == false) {
                $('#pt-user-modal .modal-dialog').addClass('loading');
                window.location.reload(true);
                button.hide();
            }
            button.button('reset');
        });

    });

    // Post register form
    $('#pt_registration_form').on('submit', function(e) {
        e.preventDefault();
        var button = $(this).find('button');
        button.button('loading');
        $.post('/user/register', $('#pt_registration_form').serialize(), function(obj) {
            $('.pt-register .pt-errors').html(obj.message);
            if (obj.error == false) {
                $('#pt-user-modal .modal-dialog').addClass('registration-complete');
                //window.location.reload(true);
                button.hide();
            }
            button.button('reset');
            reset_captcha();
        });

    });
    // Reset Password
    $('#pt_reset_password_form').on('submit', function(e) {
        e.preventDefault();
        var button = $(this).find('button');
        button.button('loading');
        $.post('/user/reset-password', $('#pt_reset_password_form').serialize(), function(obj) {
            $('.pt-reset-password .pt-errors').html(obj.message);
            if (obj.error == false) {
                button.hide();
            }
            button.button('reset');
            reset_captcha();
        });

    });
    
    $('#pt_receive_confirm_form').on('submit', function(e) {
        e.preventDefault();
        var button = $(this).find('button');
        button.button('loading');
        $.post('/user/reconfirm', $('#pt_receive_confirm_form').serialize(), function(obj) {
            $('.pt-receive-confirm .pt-errors').html(obj.message);
            if (obj.error == false) {
                button.hide();
            }
            button.button('reset');
            reset_captcha();
        });

    });

    // Report videos
    $('#report_videos').on('submit', function(e) {
        e.preventDefault();
        var button = $(this).find('button');
        button.button('loading');
        $.post('/ajax/feedback', $('#report_videos').serialize(), function(obj) {
            $('.report-videos .pt-errors').html(obj.message);
            if (obj.error == false) {
                button.hide();
            }
            button.button('reset');
            reset_captcha();
        });

    });

    // Contact Support
    $('#contact_support').on('submit', function(e) {
        e.preventDefault();
        var button = $(this).find('button');
        button.button('loading');
        $.post('/ajax/feedback', $('#contact_support').serialize(), function(obj) {
            $('.contact-support .pt-errors').html(obj.message);
            if (obj.error == false) {
                button.hide();
            }
            button.button('reset');
            reset_captcha();
        });

    });



    if (window.location.hash == '#login') {
        pt_open_login_dialog('#pt-login');
    }

});



// function send_report(){
//     var subject = $(document).find('#post_report select[name=videos]').val();
//     var email = $(document).find('#post_report input[name=email]').val();
//     var captcha = $(document).find('#post_report textarea[name=g-recaptcha-response]').val();
//     var msg = $(document).find('#post_report textarea[name=message]').val();
//     if(email == '' || subject == '' || msg == ''){
//         $(document).find('.reportform').find('.msg-error').html('Email/ Message is empty!!!');
//         return false;
//     }else {
//         $.post('/ajax/feedback', {
//             id: filmId,
//             email: email,
//             msg: msg,
//             subject: subject,
//             captcha: captcha
//         }, function (response) {
//             var item = jQuery.parseJSON(response);
//             if (item.code == 0) {
//                 $("#post_report")[0].reset();
//                 grecaptcha.reset(0);
//             } else {
//                 $(document).find('.reportform').find('.pt-errors').html(item.msg);
//             }
//         })
//     }
// }



// function show_related(item) {
//     let html = '';    
//     $.each(item, function(index, element) {
//         var code = element['code'] ;
//         var code_fix = code.toUpperCase();
//         var domain = 'https://'+window.location.hostname;
//         let trailer = element['trailer'];
//         if(element['quality'] == '1'){
//             var quality = '<span class=\"mli-quality-hd\"></span>';
//         }else{
//             var quality = '<span class=\"mli-quality-sd\"></span>';
//         }
//         if(!!trailer){
//             var f_trailer = '<a href="#" class="mli-trailer" data-url="' + trailer + '" data-title="' + element['code'] + '" data-link="' +domain+ '/v/'+ element['code'] +'" data-poster="' + element['thumbinfo'] + '" data-toggle="modal"><i class="fa fa-video-camera mr5"></i></a>';
//         }else{
//             var f_trailer = '';
//         }
//         html+=  '<div class="ml-item">'+
//                 '<a href="' +domain+ '/v/'+ code +'" data-url="' +domain+ '/v/'+ code +'" class="ml-mask jt" title="'+ element['name'] +'">'+
//                     '<div class="mli-des">'+ quality +
//                       '<span class="mli-code">'+ code_fix +'</span>'+
//                       '</div>'+
//                       '<span class="mli-runtimes">'+ element['runtimes'] +'</span>'+
//                       '<img src="' +domain+ '/assets/css/img/default-cover.png" data-original="'+ element['poster'] +'" alt="'+ element['name'] +'" class="lazy thumb mli-thumb">'+
//                       '<span class="mli-info">'+
//                         '<h2>'+ element['name'] +'</h2>'+
//                       '</span>'+
//                     '</a>'+ f_trailer +
//                 '</div>'
//     });
//     return html;
// }

// $('.mli-trailer').on('click', function(e){
//         var url = $(this).attr('data-url');
//         var title = $(this).attr('data-title');
//         var link = $(this).attr('data-link');
//         var poster = $(this).attr('data-poster');
//         if(url != '') {
//             $('.title-trailers').html("Trailer: " + title);
//             $('.modal-body-trailer video source').attr('src', url);
//             $('.modal-body-trailer video').load();
//             $('.modal-body-trailer video').attr('poster', poster);
//             $('#watch-movies-trailer').attr('onclick', "location.href='"+link+"'");
//             $('#pop-trailer').modal();
            
//         }else{
//             $.toast({text: 'Updating... Please try again!', icon: 'error', position: 'top-right'});
//         }
//     });
 $(document).on('click', '.mli-trailer', function(){
    var url = $(this).attr('data-url');
    var title = $(this).attr('data-title');
    var link = $(this).attr('data-link');
    var poster = $(this).attr('data-poster');
    if(url != '') {
        $('.title-trailers').html("Trailer: " + title);
        $('.modal-body-trailer video source').attr('src', url);
        $('.modal-body-trailer video').load();
        $('.modal-body-trailer video').attr('poster', poster);
        $('#watch-movies-trailer').attr('onclick', "location.href='"+link+"'");
        $('#pop-trailer').modal();
        
    }else {
        $.toast({text: 'Updating... Please try again!', icon: 'error', position: 'top-right'});
    }
});