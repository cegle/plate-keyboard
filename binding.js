(function ($) {
  var html = `<!-- 车牌 -->
  <div class="plate">
    <ul id="plate">
      <li>皖</li>
      <li>A</li>
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>
        <div class="new"><span>+</span> <i>新</i></div>
      </li>
    </ul>
  </div>
  <!-- 虚拟键盘 -->
  <div class="keyboard-footer">
    <!-- 键盘 -->
    <div class="keyboard" id="shutkey">
      <div class="shut" id="shut"> x </div>
      <ul id="keyboard">
        <div class="area-one">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>0</li>
        </div>
        <div class="area-one">
          <li>Q</li>
          <li>W</li>
          <li>E</li>
          <li>R</li>
          <li>T</li>
          <li>Y</li>
          <li>U</li>
          <li>I</li>
          <li>O</li>
          <li>P</li>
        </div>
        <div class="area-one">
          <li>A</li>
          <li>S</li>
          <li>D</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
        </div>
        <div class="area-one">
          <li class="changeContentBtn other">返回</li>
          <li>Z</li>
          <li>X</li>
          <li>C</li>
          <li>V</li>
          <li>B</li>
          <li>N</li>
          <li>M</li>
          <li class="delet"><img src="backDeleteImg.jpg"></li>
        </div>
        <div class="area-one">
          <li>警</li>
          <li>学</li>
          <li>领</li>
          <li>港</li>
          <li>澳</li>
          <li class="confirmYes" id="confirmYes">确定</li>
        </div>
      </ul>
    </div>
    <!-- 地区车牌简称 -->
    <div class="area" id="area">
      <div class="shut" id="shuta"> x </div>
      <ul id="keyboarda">
        <div class="area-one">
          <li>京</li>
          <li>沪</li>
          <li>浙</li>
          <li>苏</li>
          <li>粤</li>
          <li>鲁</li>
          <li>晋</li>
          <li>冀</li>
        </div>
        <div class="area-one">
          <li>豫</li>
          <li>川</li>
          <li>渝</li>
          <li>辽</li>
          <li>吉</li>
          <li>黑</li>
          <li>皖</li>
          <li>鄂</li>
        </div>
        <div class="area-one">
          <li>津</li>
          <li>贵</li>
          <li>云</li>
          <li>桂</li>
          <li>琼</li>
          <li>青</li>
          <li>新</li>
          <li>藏</li>
        </div>
        <div class="area-one">
          <li>蒙</li>
          <li>宁</li>
          <li>甘</li>
          <li>陕</li>
          <li>闽</li>
          <li>赣</li>
          <li>湘</li>
          <li>使</li>
          <!-- <li>删除</li> -->
        </div>
      </ul>
    </div>
  </div>`;
  $('#plate-keyboard').append(html)
  var oShut = $("#shut"); // 数字字母键盘关闭按钮
  var oShutkey = $("#shutkey"); // 数字字母键盘
  var oPli = $("#plate li"); // 车牌号码输入框
  var oOli = $("#keyboard li"); // 数字字母键盘的li
  var oArea = $("#area"); // 地名简称键盘
  var oOlia = $("#keyboarda li"); // 地名简称键盘的li
  var oShuta = $("#shuta"); // 地名简称的关闭按钮
  var oYes = $("#confirmYes"); // 确定按钮

  oShut.click(function () { // 点击关闭，关闭数字字母键盘
    oShutkey.slideUp(100);
  });
  oShuta.click(function () { // 点击关闭，关闭地名简称键盘
    oArea.slideUp(100);
  });
  (function () { // 切换车牌号码框的函数

    oShutkey.hide();
    var oPok = 2; // 定义车牌框从哪个位置开始的变量
    oPli.bind("click", function () { // 给车牌框绑定点击事件
      var index = $(this).index(); // 获取车牌框里面的索引值
      $(this).addClass("active").siblings().removeClass("active"); // 点击哪个框就给哪个框添加颜色框，并去掉其他颜色框
      oPok = index;

      function onew() { // 隐藏新能源信息
        $(".new").show(50);
      }

      function oarea() { // 隐藏地名简称键盘
        oArea.slideUp(200);
      }

      function oshutkey() { // 显示数字字母键盘
        oShutkey.slideDown(200);
      }
      if (oPok === 0) { // 当点击第一个的时候，调出地名简称键盘
        onew();
        oArea.slideDown(200);
        oShutkey.slideUp(200);
      } else if (oPok === 7) { // 当点击最后一个的时候隐藏新能源车牌的innerText值
        $(".new").hide(100);
        oarea();
        oshutkey();
      } else if (oPok === 1) { // 当点击第二个的时候，弹出数字字母键盘
        onew();
        oarea();
        oshutkey();
      } else if (oPok === 6) { // 当点击第7个的时候全部显示
        onew();
        oarea();
        oshutkey();
      } else { // 当点击其他车牌框的时候调出数字字母键盘
        onew();
        oarea();
        oshutkey();
      }
    });
    oOli.bind("click", function () { // 给数字字母键盘绑定点击事件
      var index = $(this).index(); // 获取键盘的索引
      oOlok = index;

      function opli() { // 颜色框加到下一个
        oPli.eq(oPok).addClass("active").siblings().removeClass("active");
      }
      if ($(this).html() === "删除") { // 点击删除按钮，往后回删内容
        oPli.eq(oPok).html("");
        oPok--;
        opli();
        if (oPok === 0) { // 当回删到第一个的时候隐藏数字字母键盘，显示地名简称键盘
          oArea.slideDown(200);
          oShutkey.slideUp(200);
        } else if (oPok < 8) {
          oPli.eq(7).html('<div class="new"><span>+</span><i>新能源</i></div>');
        }
      } else { // 点击数字字母键盘替换获取车牌框索引值的值
        oPli.eq(oPok).html(this.innerText);
        oPok++; // 每点击一次增加一次索引
        opli(); // 每点击一次颜色框跳转到下一个
      }
      if (oPok > 6) { // 当颜色框达到第7个的时候隐藏颜色框，并隐藏键盘
        oShutkey.slideUp(200);
        oPli.removeClass("active");
      }
    });
    oOlia.bind("click", function () { // 给地名简称键盘绑定点击事件
      oPli.eq(oPok).html(this.innerText); // 点击地名简称键盘获取车牌索引值的值
      oPok++; // 点击一次增加一次索引
      if (oPok === 1) {
        oArea.slideUp(200);
        oShutkey.slideDown(200);
      }
      oPli.eq(oPok).addClass("active").siblings().removeClass("active"); // 点击一次颜色框跳转到下一个
    });
    oYes.unbind("click").click(function () {
      oPli.removeClass("active");
      oArea.slideUp(200);
      oShutkey.slideUp(200);

    });
  })();
})(jQuery);