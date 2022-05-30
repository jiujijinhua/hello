$('.c999').mouseenter(function(){
    $('.c11').css("display", "block");
    $('.c11').mouseleave(function(){
        $(".c11").css("display","none")
    })
})
$('.c997').click(()=>{
    $.ajax({
        url:"http://localhost/interface/add.php",
        type:'post',
        data:{
            id:$('.c4531').text().substring(5).trim(),
            name:$('.c4532').text().trim(),
            num:$('.c579').text().trim(),
            price:$('.c110').text().substring(3).trim(),
            img:$('.c130').attr('src').trim(),
        },
        dataType:"json",
        success:(res)=>{
            console.log(res)
        }
    })
})

// 按钮操作
$('.v10').mouseenter(()=>{
    // $('.v101').addClass('v102')
    $('.v10').css({ "color": "#0d5bad", "background": "#fff" ,}).mouseleave(()=>{
        $('.v10').css({ "color": "#fff", "background": "#0d5bad" ,})
    })
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

// 登录成功跳转
$('.v101').click(()=>{
    if($('.v18').val()!=''&&$('.v19').val()!=''){
        location.href='../html/success.html'
    }else{
        $('.k7').text('必填！').css('color','red')
        $('.v8').css('border','1px red solid')
    }
})