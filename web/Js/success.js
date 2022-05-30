$('.c999').mouseenter(function(){
    $('.c11').css("display", "block");
    $('.c11').mouseleave(function(){
        $(".c11").css("display","none")
    })
})

// 轮播图
var mySwiper = new Swiper ('.swiper', {
    autoplay: true,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })

  // 查看商品详情
  $('.c666').click(function(){
    location.href='../html/show_y2.html'
  })
  $('.c252').click(function(){
    location.href='../html/show_y.html'
  })
  $('.c5c').click(()=>{
    location.href='../html/show_y3.html'
  })

  // 网页遮罩层
  $('.c3c3').click(function(){
    $('#cc').css("display","none")
    $('#a1').removeClass()
  })

  //导航栏鼠标事件
  var dhs = document.querySelectorAll('.c0333')
  var bts = document.querySelectorAll('.c0444')
    for(var i=0;i<dhs.length;i++){
      dhs[i].onmouseenter=function(){
        for(var j=0;j<dhs.length;j++){
          dhs[j].style.backgroundColor = "";
        }
        this.style.backgroundColor = "#0a3665";
        this.onmouseleave=function(){
          this.style.backgroundColor='#0d5bad'
        }
      }
    }
    for(var i=0;i<bts.length;i++){
      bts[i].onmouseenter=function(){
        for(var j=0;j<bts.length;j++){
          bts[j].style.color='';
        }
        this.style.color='red';
        this.onmouseleave=function(){
          this.style.color='#fff'
        }
      }
    }