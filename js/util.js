$(function(){
	//页签切换处理
		$("#hand").click(function(){
			$("#market-info-hand").show();
			$("#market-info-system").hide();
			$("#hand-li").addClass('on');
			$("#system-li").removeClass('on');
			$(".yq_ts").hide();
		});

		$("#system").click(function(){
			$("#market-info-hand").hide();
			$("#market-info-system").show();
			$("#hand-li").removeClass('on');
			$("#system-li").addClass('on');
			$(".yq_ts").show();
		});
		//查询条件处理
	$("#btn-packUp").click(function(){
	  $(".search-bar").hide();
	  $("#btn-search").hide(); 
	  $("#btn-packUp").hide(); 
	  $("#btn-show").show(); 
	});
	$("#btn-show").click(function(){
	  $(".search-bar").show();
	  $("#btn-search").show(); 
	  $("#btn-packUp").show(); 
	  $("#btn-show").hide(); 
	});
})
/*<!--关闭页面-->*/
function CloseWebPage(){
 if (navigator.userAgent.indexOf("MSIE") > 0) {
	if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
	 window.opener = null;
	 window.close();
	} else {
	 window.open('', '_top');
	 window.top.close();
	}
 }
 else if (navigator.userAgent.indexOf("Firefox") > 0) {
	window.location.href = 'about:blank ';
 } else {
	window.opener = null;
	window.open('', '_self', '');
	window.close();
 }
}
var showTips=function(txt){
		var wid = $(window).width() - $("#pcl").width() - 5
		$(".showTips").stop().show().html(txt).width(wid).animate({bottom:'0px'},1000,function(){
			setTimeout(function(){
				$(".showTips").fadeOut().animate({bottom:'-39px'},1)
			},1000)
		});
}
var greenTips =function(txt){
		var wid = $(window).width() - $("#pcl").width() - 5
		$(".greenTips").stop().show().html(txt).width(wid).animate({bottom:'0px'},1000,function(){
			setTimeout(function(){
				$(".greenTips").fadeOut().animate({bottom:'-39px'},1)
			},1000)
		});
	}
var utils ={
	/*
		obj:表格【JQuery对象】
		evenColor：单行的背景色
		oddColor：双行的背景色
		start:从哪一行开始，如果不定义或者定义为0，则从第0行开始
	
	*/
	tableEventOddBgColor:function(obj,evenColor,oddColor,start){
		
		if(isNaN(new Number(start))||new Number(start)==0){
			obj.find("tr:even td").css({
					"background":evenColor,
					"color":"#333"
			});
			obj.find("tr:odd td").css({
					"background":oddColor,
					"color":"#333"
			});
			
		}else{
			for(var i=new Number(start);i<obj.find("tr").length;i++){
				if((i-start)%2==0){
					obj.find("tr:eq("+i+") td").css({
						"background":evenColor
					});	
				}else{
					obj.find("tr:eq("+i+") td").css({
						"background":oddColor
					});
				}
			}
			
		}
	},
	listTable:function(){
		$(".list-table tbody tr").hover(function(){
			alert(1)
			$(this).find('td').addClass('listTdHover')
		},function(){
			$(this).find('td').removeClass('listTdHover')

		})
	
	},
	rsLisetHover:function(){
		$(".rs-list").hover(function(){
			$(this).addClass("rs-listhover");	
		},function(){
			$(this).removeClass("rs-listhover")
		})
	},
	
		//关闭对话框
		closeDialog : function(selecter,type){
			if(type==undefined||type==''){
				$(".coverlayer").remove();
				$(".dialogbox").remove();
			}else{
				selecter.parents(".dialogbox").remove();
				$(".dialogbox").css("z-index",'991')
		  }
		},
		listHover:function(){
			$(".list-table tbody tr").hover(function(){
				$(this).find("td").css("background","#FFFFE1")
			},function(){
				utils.tableEventOddBgColor($(".list-table"),"#fdfefe","#f5fafa","1");
			});
		},
		autowinSize:function(){
			//自适应
			$(window).resize(function () {
			   $("#pcr").width($("html body").width() - 200).height("auto");
			});
			$("#pcr").width($("html body").width() - 200).height("auto");
		},

		/*全选
			
		*/
		allCheck:function($all,$item){
			
			$all.click(function(){
				
				if($(this).prop('checked')==true){
					
					$item.each(function(i){
						if(!$(this).prop('disabled')){
							$(this).prop('checked',true);
						}
					})
					
					
				}else{
					$item.each(function(){
						if(!$(this).prop('disabled')){
							$(this).prop('checked',false);
						}
					})
					
				}
			});
			$item.click(function(){
				//alert($($item+"[name='"+$item.attr('name')+"']:checked").length)
				if($("input[name='"+$item.attr('name')+"']:checked").length==$item.length){
					
					$all.prop('checked',true);
				}else{
					$all.prop('checked',false);
				}
			})
		},
		setValue:function(name,value){
			if ( $.browser.msie ){
				setCookie(name,value,50)	
			}else{
				var store = new Persist.Store('My Data Store');
				store.set(name, value);
			}
		},
		getValue:function(name){
			if ( $.browser.msie ){
				return getCookie(name)
			}else{
				var store = new Persist.Store('My Data Store');
				var value=""
				store.get(name, function(ok, val) {
				  if (ok)
					value =val;
				});
				
				return value;
				
			}
			
		},
		romove:function(name){
			if ( $.browser.msie ){
				setCookie(name,"",-1)	
			}else{
				var store = new Persist.Store('My Data Store');
				store.remove(name);
			}
		}
		

		
}
$(function(){
	$(".common-btn").hover(function(){
		$(this).addClass('common-btnhover')
	},function(){
		$(this).removeClass('common-btnhover')
	})
	
	
	
	
	utils.listHover();
	utils.listTable();
	utils.autowinSize();
	setTimeout(function(){
		$(window).resize()
	},200)
	//列表间隔颜色
	utils.tableEventOddBgColor($(".list-table"),"#fdfefe","#f5fafa","1");
	utils.rsLisetHover();
	

})
	
function topinit(dialog){
	var slltop = $(document).scrollTop();
	if(slltop>120){
		var top = ($(window).height()-dialog.height())/2+slltop-90
	}else{
		var offsetTop=$(".coverlayer").offset().top;
		var top = ($(window).height()-121-dialog.height())/2+30+(slltop/2);
	}
	return top;
}
function menu(){
	$(".menu_ico3").click(function(){
				alert(1)
			})
}
function hideMenu(){
	$(".menu_ico1").click(function(){
		$("#pcl").animate({width:0},200,function(){
			$("#pcr").width($("html body").width() - 0).height("auto");
		})
	});
	$(".menushow").click(function(){
		$(this).find('.box_submenu').slideUp(function(){
			$(this).parents("li").find(".menu_ico3").removeClass("menu_ico3");
			$(this).parents("li").addClass("menuhide").removeClass("menushow");
		});
		
	});
	$(".menuhide").live('click',function(){
		$(this).find('.box_submenu').slideDown(function(){
			$(this).parents("li").find(".menu_ico2").addClass("menu_ico3");
			$(this).parents("li").removeClass("menuhide").addClass("menushow");
		});
	})
}
function showMenu(){
	$(".menu_ico1").click(function(){
		$("#pcl").animate({width:200},200,function(){
			$("#pcr").width($("html body").width() - 200).height("auto");
		})
	})
}
$(".radio-txt").live("click",function(){
	$(this).prev().click();
})
function viewRule(){
	//查看模板
		$("a[name=viewMod]").click(function(){
			m.promptDialog({title:"模板信息",cancleBtnValue:"关闭",cancleBtnFn:indexInit,contObj:$("#dial-mob"),zIndex:"add",closeFn:indexInit});
		})
		//商品要求
		$("a[name=viewRegRule]").click(function(){
			m.promptDialog({title:"商品要求",cancleBtnValue:"关闭",cancleBtnFn:indexInit,contObj:$("#regDetail"),zIndex:"add",closeFn:indexInit});
		})
		//头图
		$("a[name=viewimg]").click(function(){
			m.promptDialog({title:"查看头图",cancleBtnValue:"关闭",cancleBtnFn:indexInit,contObj:$("#viewimgbox"),zIndex:"add",closeFn:indexInit});
		})
		//商户要求
		$("a[name=viewRule]").click(function(){
			m.promptDialog({title:"商户要求",cancleBtnValue:"关闭",cancleBtnFn:indexInit,contObj:$("#ruleDetail"),zIndex:"add",closeFn:indexInit});
		})
		//活动详情
		$("a[name=viehdxq]").click(function(){
			m.promptDialog({title:"活动详情",cancleBtnValue:"关闭",cancleBtnFn:indexInit,contObj:$("#hdxq"),zIndex:"add",closeFn:indexInit});
		})
		//查看服务协议
		$(".dealFile").click(function(){
			m.promptDialog({title:"服务协议",cancleBtnValue:"关闭",cancleBtnFn:indexInit,contObj:$("#deal"),zIndex:"add",closeFn:indexInit});
		})
}
function getParam(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   var r = window.location.search.substr(1).match(reg);
   if (r!=null) return unescape(r[2]); return null;
}
//时间选择器!DOCTYPE   
$(".Wdate").click(function(){
	WdatePicker({ dateFmt: 'yyyy-MM-dd HH:mm:ss', skin: 'whyGreen' })
})