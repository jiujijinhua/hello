$('.c999').mouseenter(function(){
    $('.c11').css("display", "block");
    $('.c11').mouseleave(function(){
        $(".c11").css("display","none")
    })
})
function showP(){
    $.ajax({
        url:'http://localhost/interface/showlist.php',
        dataType:"json",
        success:(res)=>{
            if(res.code==1){
                var products=res.data;
            if(products.length>0){
                // $('.c0214').empty()
                products.forEach(products=>{
                    $('.c0214').before(`<div class="c02141">
                    <div class="c021412">
                        <img src="${products.product_img}" alt="">
                        <div>
                            <h2>${products.product_name}</h2>
                            <div class="c0202">
                                <p class="c4531">商品编号：${products.product_id}</p>
                                <p>尺寸：2T</p>
                                <p>颜色：黄色</p>
                            </div>
                        </div>
                    </div>
                    <div class="c021413">
                        <div class="c02221" style="width: 28%;">
                            <p>NT$${products.product_price}</p>
                        </div>
                        <div class="c02221" style="width: 26%;">
                            <div style="text-align: center;">
                                <button class="c201">
                                    <i class="iconfont icon-jian"></i>
                                </button>
                                <span class="c203">${products.product_num}</span>
                                <button class="c201 c202">
                                    <i class="iconfont icon-jia"></i>
                                </button>
                            </div>
                        </div>
                        <div class="c02221" style="width: 28%;">
                            <p class="c204">NT$${products.product_num*products.product_price}</p>
                        </div>
                        <div class="c02221" style="width: 16%;"><button class="c205">X</button></div>
                    </div>
                </div>`)
                $('.c323').text(`NT$${products.product_num*products.product_price}`)
                $('.c999>p').text(`${products.product_num}`)
                $('.c02123').text(`现货(${products.product_num})`)
                    })
                }else{
                    // $('.c0214').empty()
                }
            }
        }
    })
}
showP()

// 点击删除 -- 事件委托
$('.c021').on('click','.c205',function(){
    var id =$(this).parents('div').eq(2).children().eq(0).children().children().children().eq(0).first().text().substring(5).trim();
    console.log(id)
    // 发送请求
    $.ajax({
        url:'http://localhost/interface/del.php',
        data:{
            id
        },
        dataType:'json',
        success:(res)=>{
            if(res.code==1){
                // showP()
                location.href = location.href
            }
        }
    })
})

