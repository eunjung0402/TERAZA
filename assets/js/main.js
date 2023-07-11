$(function(){
    // let lastScroll = 0;



    gsap.to('.header .inner_menu',{
        scrollTrigger:{
            trigger:".header",
            start:"0% 0%",
            end:"100% 0%",
            // markers:true,
            scrub:1,
        },
        'margin-top':'-126px'
    })



   /**
    * @인트로모션
    * 
    * 
    */

   const headTxt = new SplitType('.container h2 span', { types: 'words, chars', });

   gsap.set('body',{ 'overflow':'hidden', })
   gsap.set('.sc_visual h2 .char',{ opacity:0, })
   gsap.set('.header .inner_menu',{ opacity:0, })
   gsap.set('.header .btn_menu',{ opacity:0, })
   gsap.set('.sc_visual .group_video',{ scale:0, })
   gsap.set('.sc_info .group_img img',{ yPercent:100, })
   gsap.set('.sc_link .text_box .desc',{ yPercent:100, })
   gsap.set('.sc_link .title_wrap',{ opacity:0,yPercent:100, })
   gsap.set('.footer h2',{ opacity:0,yPercent:100, })

   introMotion = gsap.timeline({
    onComplete:function(){
        $('body').removeClass('hidden');
    }
   })
   introMotion
   .to('.sc_visual h2 .char',1,{ opacity:1, stagger:{ from:"random", amount:1.5 }, })
   .addLabel('header')
   .to('.header .inner_menu',{ opacity:1, },'header')
   .to('.header .btn_menu',{ opacity:1, },'header')
   .addLabel('move')
   .to('.sc_visual .group_video',{ scale:1, },'move')
   .to('.sc_visual h2 .word:first-child',1,{ 'margin-right':'4vw', },'move')
   .to('.sc_visual h2 .word:last-child',1,{ 'margin-left':'4vw', },'move')
   .to('.sc_visual h2 .desc:last-child',1,{ 'margin-left':'4vw', },'move')
   .to('body',{ 'overflow':'auto', })
   
   /**
    * @인트로 스크롤 트리거
    * 
    * 
    */

   introScroll = gsap.timeline({
    scrollTrigger:{
        trigger:".sc_visual",
        start:"0% 0%",
        end:"100% 100%",
        //markers:true,
        scrub:1,
        },
    })

    introScroll
    .to('.sc_visual h2',{yPercent:-50})


   /**
    * @비디오
    * 
    * 
    */

   videoMotion = gsap.timeline({
    scrollTrigger:{
        trigger:".video-wrapper",
        start:"0% 80%",
        end:"100% 80%",
        // markers:true,
        scrub:1,
    },
   })

   videoMotion
   .addLabel('a')
   .to('.sc_visual .group_video',{ 'clip-path': 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)' },'a')
   .to('.sc_visual h2',{yPercent:-10},'a')




    $('[data-textbox]').each(function(i,el){
        ScrollTrigger.create({
            trigger:el,
            start:"0% 80%",
            end:"100% 10%",
            onEnter:function(){
                el.classList.add('on');
            }
        })
    })

    barMotion = gsap.to('.bar_curr',8,{
        width:'100%',
        ease:'none',
        onComplete:function(){
            projectsSlide1.slideNext();
            projectsSlide2.slideNext()
        },
        paused:true,
    });
    barMotion.play();


    const projectsSlide1 = new Swiper('.sc_projects .swiper1',{
        touchRatio:0,
        direction: "vertical",
        parallax: true,
        speed:1000,
        loop:true,
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        on:{
            "init":function(){
                total=this.slides.length-2;
                curr=this.realIndex+1;
                $('.control .curr').text(curr)
                $('.control .total').text(total)
            },
            "slideChange":function(){
                total=this.slides.length-2;
                curr=this.realIndex+1;
                $('.control .curr').text(curr)
                $('.control .total').text(total)
                
                barMotion.restart();
            }
        }
    })

    // 슬라이드1 호버시 액션
    $('.sc_projects .swiper3 .title').hover(function(){
        $('.swiper1 .opacity_bg').addClass('hover');
    },function(){
        $('.swiper1 .opacity_bg').removeClass('hover');
    })


    const projectsSlide2 = new Swiper('.sc_projects .swiper2',{
        loop:true,
        touchRatio:0,
        parallax: true,
        speed:1500,
    })

    const projectsSlide3 = new Swiper('.sc_projects .swiper3',{
        loop:true,
        touchRatio:0,
        speed:1000,
        effect: "fade",
    })

    $('.sc_projects .text-area button').click(function(){
        gsap.to(window, {duration: 0.5, scrollTo:".sc_projects", ease: "ease-in"});

        if($(this).hasClass('prev')){
            projectsSlide2.slidePrev()
        }else{
            projectsSlide2.slideNext()
        }
    })

    projectsSlide1.controller.control = projectsSlide2;
    projectsSlide2.controller.control = projectsSlide3;







    $('.sc_projects .swiper1 .control').hover(function(){
        barMotion.pause();
    },function(){
        barMotion.resume();
    })



  


    marqueMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_services .gorup_slide',
            start:'0% 100%',
            end:'100% 0%',
            //markers:true,
            scrub:1,
        }
    })
    marqueMotion
    .addLabel('a')
    .to('.sc_services .slide_top_area',{xPercent:-30},'a')
    .to('.sc_services .slide_bottom_area',{xPercent:30},'a')


    // 가로 움직임 섹션
    scServideMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_services',
            start:'0% 80%',
            end:'100% 100%',
            //markers:true,
        }
    })
    scServideMotion
    .addLabel('move')
    .to('.sc_services h2 .word:first-child',1,{ 'margin-right':'2vw', },'move')
    .to('.sc_services h2 .word:last-child',1,{ 'margin-left':'2vw', },'move')
    

    // 맨 하단 이미지, 비디오 섹션
    scInfoMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_info',
            start:'0% 60%',
            end:'100% 100%',
            //markers:true,
            scrub:1
        }
    })
    scInfoMotion
    .to('.sc_info .group_img img',1,{yPercent:0})


    // 마지막 섹션 이미지 무빙
    scInfoMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_info',
            start:'0% 60%',
            end:'100% 100%',
            //markers:true,
            scrub:1
        }
    })
    scInfoMotion
    .to('.sc_info .group_img img',1,{yPercent:0,opacity:1})


    // 푸터 섹션
    scLinkMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_link',
            start:'0% 0%',
            end:'100% 100%',
            //markers:true,
        }
    })
    scLinkMotion
    .to('.sc_link .text_box .desc',1,{yPercent:0})
    .to('.sc_link .title_wrap',{ opacity:1,yPercent:0,stagger:0.3 })
    .to('.footer h2',{ opacity:1,yPercent:0,stagger:0.3  })
    


    // 헤더 메뉴 아이콘 클릭시
    $('.header .btn_menu').click(function(){
        $('body').css({'overflow':'hidden','height':'100vh'});
        $('.sub_menu_bg').slideDown();
    })

    $('.sub_menu_list .sub_menu_item').hover(function(){
        let num = $(this).data('num');
       $('.video_item').eq(num).addClass('on');
    },function(){
        $('.video_item').removeClass('on');
    })

    $('.header .close_btn').click(function(){
        $('body').css({'overflow':'auto','height':'inherit'});
        $('.sub_menu_bg').slideUp();
    })
})

