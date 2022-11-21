/**
		title:字符串，默认是温馨提示。
		context:字符串,默认是温馨提示。
		okBtnValue:字符串 为空时默认为确定
		cancleBtnValue：字符串 为空时默认为确定
		okBtnFn:function，默认是undefined 可选择
		cancleBtnFn:function,默认是undefined 可选择
		closeFn:function,默认是undefined 可选择
		init:默认是空函数，可选择,
		cancleNoClose:true,
		okBtnNoClose:true,
		需要导入promptCss.css文件
		需要导入promptDialog.js文件
		需要图片../images/jbox-close1.gif，../images/jbox-icons.png,
		基于Jquery和Jquery UI 
	*/

var m = {
    promptDialog: function (cparam) {
        var param = {
            title: "温馨提示",
            context: "请输入内容",
            okBtnValue: "确定",
            cancleBtnValue: "取消",
            cancleBtnFn: undefined,
            okBtnFn: undefined,
            contObj: "",
            init: function () { },
            zIndex: 991,
            closeFn: undefined,
            cancleNoClose: true,
            okBtnNoClose: true,
            noBottom: false
        }
        if (cparam.title != undefined && typeof (cparam.title) == "string") {
            param.title = cparam.title
        }
        if (cparam.context != undefined && typeof (cparam.context) == "string") {
            param.context = cparam.context
        }
        if (cparam.cancleNoClose == true || cparam.cancleNoClose == undefined) {
            param.cancleNoClose = true
        } else {
            param.cancleNoClose = false
        }
        if (cparam.okBtnNoClose == true || cparam.okBtnNoClose == undefined) {
            param.okBtnNoClose = true
        } else {
            param.okBtnNoClose = false
        }
        if (cparam.noBottom == "nobottom") {
            param.noBottom = true
        } else {
            param.noBottom = false
        }
        //动态随机ＩＤ
        var Num = "";
        for (var i = 0; i <= 6; i++) {
            Num += Math.floor(Math.random() * 100);
        }
        var id = "m" + Num;
        var btnStatus = false;
        if ((cparam.okBtnValue != undefined && typeof (cparam.okBtnValue) == "string") || (cparam.cancleBtnValue != undefined && typeof (cparam.cancleBtnValue) == "string")) {
            btnStatus = true
        } else {
            btnStatus = false;
        }
        if (cparam.zIndex != undefined) {
            $(".prompt-box").css({
                "z-index": 989
            })
        }

        //基础布局
        var promptLayer = $('<div class="prompt-layer"></div>');

        promptLayer.height($("body").get(0).scrollHeight <= 650 ? $(window).height() : $("body").get(0).scrollHeight).width($(document).width());
        var promptMaskLayer = $('<div class="prompt-mask-layer"></div>');
        var promptBox = $('<div class="prompt-box" id="' + id + '"></div>');
        var promp = $('<div class="prompt"></div>');
        var promptHead = $('<div class="prompt-title"><b>' + param.title + '</b><a class="prompt-close" href="javascript:;"></a></div>');

        if (cparam.closeFn != undefined) {
            promptHead.find(".prompt-close").bind("click", cparam.closeFn)
        }
        var promptBody;
        if (cparam.contObj != undefined) {
            promptBody = $('<div class="prompt-cont"></div>');
            var contObj = cparam.contObj
            promptBody.html(contObj.clone().show());
						
        } else {
            promptBody = $('<div class="prompt-cont"><div class="prompt-ico"></div><table class="prompt-text"><tr><td>' + param.context + '</td></tr></table></div>');
        }
        var promptBottom = $('<div class="prompt-bottom"></div>');
        if (!param.noBottom) {


            //按钮事件绑定
            if (btnStatus) {
                if (cparam.okBtnValue != undefined) {
                    param.okBtnValue = cparam.okBtnValue;
                    if (param.okBtnNoClose) {
                        var btn = $('<input type="button" class="prompt-btn" value="' + param.okBtnValue + '" close="no"/>');
                    } else {
                        var btn = $('<input type="button" class="prompt-btn" value="' + param.okBtnValue + '" close="yes"/>');
                    }
                    if (typeof (cparam.okBtnFn) == "function") {
                        btn.click(cparam.okBtnFn);
                    }
                    promptBottom.append(btn);
                }
                if (cparam.cancleBtnValue != undefined) {
                    param.cancleBtnValue = cparam.cancleBtnValue;
                    if (param.cancleNoClose) {
                        var btn = $('<input type="button" class="prompt-btn" value="' + param.cancleBtnValue + '" close="no"/>');
                    } else {
                        var btn = $('<input type="button" class="prompt-btn" value="' + param.cancleBtnValue + '" close="yes"/>');
                    }
                    if (typeof (cparam.cancleBtnFn) == "function") {
                        btn.click(cparam.cancleBtnFn);
                    }
                    promptBottom.append(btn);
                }
            } else {
                var btn = $('<input type="button" class="prompt-btn" value="取消" close="yes"/>');
                promptBottom.append(btn);
            }

        }
        //关闭按钮绑定时间

        //追加到页面
        promp.append(promptHead).append(promptBody).append(promptBottom);
        promptBox.append(promp);

        promptLayer.append(promptMaskLayer).append(promptBox);
        $('body').append(promptLayer);
        //对话框居中
        $("#" + id).find(".prompt").width($("#" + id).find(".prompt").innerWidth())
        $("#" + id).width($("#" + id).find(".prompt").width());
        var halftop = ($(window).height() - $("#" + id).height()) / 2;
        var left = ($(window).width() - $("#" + id).width()) / 2;
        $("#" + id).css({
            left: left,
            top: halftop
        });
        //关闭对话框
        $(".prompt-close,.prompt-btn").live("click", function () {
            if ($(this).attr('close') == 'no' || $(this).attr('close') == undefined) {
                $(this).parents(".prompt-layer").remove();
            }
        });
        //拖动
        $(".prompt-title").bind("mousedown", function () {
            $(this).parents(".prompt-box").draggable({ disabled: false });
        }).bind("mouseup", function () {
            $(this).parents(".prompt-box").draggable({ disabled: true });
        })
        //方法初始化
        if (typeof cparam.init === 'function') {
            cparam.init();
			
        };
		//$('.prompt-layer').css({'width':'100%'});
    }
}
function indexInit() {
    $(".prompt-box").css({
        "z-index": 991
    })
}