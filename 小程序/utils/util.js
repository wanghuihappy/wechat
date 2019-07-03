function convertToStarsArray(stars) {
  var num = stars.toString().substring(0, 1);
  var array = [];//定义存储用的数组
  for (var i = 1; i <= 5; i++) {//循环获取星星真假
  //比较num与i的大小，比较五次，每次num大于i则 输出一个真
    if (i <= num) {
      array.push(1);
    }
    else {
      array.push(0);
    }
  }
  return array;//返回给convertToStarsArray
}

function http(url, callBack) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
      callBack(res.data);
    },
    fail: function (error) {
      console.log(error)
    }
  })
}

function convertToCastString(casts) {
  var castsjoin = "";
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / ";
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
  var castsArray = []
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}

module.exports = {
  convertToStarsArray: convertToStarsArray,
  http: http,
  convertToCastString:convertToCastString,
  convertToCastInfos:convertToCastInfos
}