$(function(){
  $('.toggle dt').on('click', function() {
    $(this).next('dd').slideToggle();
  })

  $('.contact-form').submit(function(){
    if($('.must-form').val() == ""){
      return false;
    } else {
      alert("送信しました");
      return true; 
    }
  })

  $(".navi-icon").on("click", function(){
    var rightVal = 0;
    if($(this).hasClass("open")) {
        rightVal = -300;
        $(this).removeClass("open");
    } else {
        $(this).addClass("open");
    }

    $(".header-navi").stop().animate({
        right: rightVal
    }, 200);
  });
});

function keisan(){

  // 設定開始

  // 商品1
  var price1 = document.form1.goods1.selectedIndex * 500; // 単価を設定
  document.form1.field1.value = price1; // 小計を表示

  // 商品2
  var price2 = document.form1.goods2.selectedIndex * 500; // 単価を設定
  document.form1.field2.value = price2; // 小計を表示

  // 商品3
  var price3 = document.form1.goods3.selectedIndex * 500; // 単価を設定
  document.form1.field3.value = price3; // 小計を表示

  // 商品4
  var price4 = document.form1.goods4.selectedIndex * 500; // 単価を設定
  document.form1.field4.value = price4; // 小計を表示

  // 商品5
  var price5 = document.form1.goods5.selectedIndex * 500; // 単価を設定
  document.form1.field5.value = price5; // 小計を表示

  // 商品6
  var price6 = document.form1.goods6.selectedIndex * 500; // 単価を設定
  document.form1.field6.value = price6; // 小計を表示

  // 商品7
  var price7 = document.form1.goods7.selectedIndex * 500; // 単価を設定
  document.form1.field7.value = price7; // 小計を表示

  // 商品8
  var price8 = document.form1.goods8.selectedIndex * 1000; // 単価を設定
  document.form1.field8.value = price8; // 小計を表示

  // 商品9
  var price9 = document.form1.goods9.selectedIndex * 1000; // 単価を設定
  document.form1.field9.value = price9; // 小計を表示

  // 商品5
  var price10 = document.form1.goods10.selectedIndex * 1000; // 単価を設定
  document.form1.field10.value = price10; // 小計を表示



  // 合計を計算
  var total = price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8 + price9 + price10 ;

  // 設定終了


  document.form1.field_total.value = total; // 合計を表示

}
