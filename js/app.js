//基準点の準備
var elemTop = [];

//現在地を取得するための設定を関数でまとめる
function PositionCheck() {
  //headerの高さを取得
  var headerH = $("#header").outerHeight(true);
  //.scroll-pointというクラス名がついたエリアの位置を取得する設定
  $(".scroll-point").each(function (i) {
    //.scroll-pointクラスがついたエリアからトップまでの距離を計算して設定
    elemTop[i] = Math.round(parseInt($(this).offset().top - headerH)); //追従するheader分の高さ（70px）を引き小数点を四捨五入
  });
}

//ナビゲーションに現在地のクラスをつけるための設定
function ScrollAnime() {
  //スクロールした際のナビゲーションの関数にまとめる
  var scroll = Math.round($(window).scrollTop());
  var NavElem = $("#g-nav a"); //ナビゲーションのaの何番目かを定義するための準備
  $("#g-nav a").removeClass("current"); //全てのナビゲーションの現在地クラスを除去
  if (scroll >= 0 && scroll < elemTop[1]) {
    //スクロール値が0以上 .scroll-point 1つめ（area-1）の高さ未満
    $(NavElem[0]).addClass("current"); //1つめのaに現在地クラスを付与
  } else if (scroll >= elemTop[1] && scroll < elemTop[2]) {
    //.scroll-point 1つめ（area-1）以上.scroll-point 2つめ（area-2）未満
    $(NavElem[1]).addClass("current"); //2つめのaに現在地クラスを付与
  } else if (scroll >= elemTop[2] && scroll < elemTop[3]) {
    //.scroll-point 2つめ（area-2）以上.scroll-point 3つめ（area-3）未満
    $(NavElem[2]).addClass("current"); //3つめのaに現在地クラスを付与
  } else if (scroll >= elemTop[3]) {
    // .scroll-point 3つめ（area-3）以上
    $(NavElem[3]).addClass("current"); //4つめのaに現在地クラスを付与
  }
}

//ナビゲーションをクリックした際のスムーススクロール
$("#g-nav a").click(function () {
  var elmHash = $(this).attr("href"); //hrefの内容を取得
  var headerH = $("#header").outerHeight(true); //追従するheader分の高さ（70px）を引く
  var pos = Math.round($(elmHash).offset().top - headerH); //headerの高さを引き小数点を四捨五入
  $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  return false; //リンクの無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PositionCheck(); /* 現在地を取得する関数を呼ぶ*/
  ScrollAnime(); /* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  PositionCheck(); /* 現在地を取得する関数を呼ぶ*/
  ScrollAnime(); /* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
});

$(window).resize(function () {
  //リサイズされたときの処理
  PositionCheck();
});

$(function () {
  // 変数に要素を入れる
  var
  sakae = $(".sakae"),
  sakaeClose = $("#sakae-close"),
  sakaeContainer = $("#sakae-container"),
  chikusa = $(".chikusa"),
  chikusaClose = $("#chikusa-close"),
  chikusaContainer = $("#chikusa-container"),
  ozone = $(".ozone"),
  ozoneClose = $("#ozone-close"),
  ozoneContainer = $("#ozone-container"),
  moriyama = $(".moriyama"),
  moriyamaClose = $("#moriyama-close"),
  moriyamaContainer = $("#moriyama-container"),
  imaike = $(".imaike"),
  imaikeClose = $("#imaike-close"),
  imaikeContainer = $("#imaike-container");

  sakae.on("click", function () {
    sakaeContainer.addClass("active");
    return true;
  });

  chikusa.on("click", function () {
    chikusaContainer.addClass("active");
    return true;
  });

  ozone.on("click", function () {
    ozoneContainer.addClass("active");
    return true;
  });

  moriyama.on("click", function () {
    moriyamaContainer.addClass("active");
    return true;
  });

  imaike.on("click", function () {
    imaikeContainer.addClass("active");
    return true;
  });

  sakaeClose.on("click", function () {
    sakaeContainer.removeClass("active");
  });

  chikusaClose.on("click", function () {
    chikusaContainer.removeClass("active");
  });

  ozoneClose.on("click", function () {
    ozoneContainer.removeClass("active");
  });

  moriyamaClose.on("click", function () {
    moriyamaContainer.removeClass("active");
  });

  imaikeClose.on("click", function () {
    imaikeContainer.removeClass("active");
  });
});
