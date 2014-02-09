
$(function() {
	
	$.ajax({
	   type: "POST",
	   url:"../../public/showArticleInformationTopFive?random"+parseInt(Math.random()*100000),
       dataType:'json',
       async:true, 
   	   data: {
			articleType:'政协工作'
	   },
	   success: function(data){
			  var dataRow = data.data;
			  var content = "";
			  var message_content=""
			  var option = "";
			  var message_option="";
			  var date = "<p  height='29'>&nbsp;&nbsp;</p>";
			  var param = escape("政协工作");
			  for(var i = 0 ; i < dataRow.length;i++){
				  
				   var temp_date = dataRow[i].createTime;
				   date = "<span class='text-right text-muted'>["+temp_date.substring(2,4)+"-"+temp_date.substring(4,6)+"-"+temp_date.substring(6,8)+"]</span>";
				   option = option + "<p><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a>"+date+"</p>";
			  	   message_option = message_option +	"<p><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a></p>";
			  }
			  content = "<a href='./index_part.html?articleType="+param+"' target='_blank' ><img src='../../resources/img/public_01.gif' width='405' height='29' border='0'></a>" + option;
			  message_content = "<a href='#'>&nbsp;&nbsp;&nbsp;&nbsp;通知公告&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多>></a>" + message_option;
			  $("#gzdt").empty().append(content);
			  $("#gzdt_date").empty().append(date);
			  $("#index_message").empty().append(message_content);
			  
	   }
	});
	
	
	$.ajax({
	   type: "POST",
	   url:"../../public/showArticleInformationTopFive?random"+parseInt(Math.random()*100000),
       dataType:'json',
       async:true, 
   	   data: {
			articleType:'政协会议'
	   },
	   success: function(data){
			  var dataRow = data.data;
			  var content = "";
			  var option = "";
			  for(var i = 0 ; i < dataRow.length;i++){
				   option = option + "<p><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a><p>";
			  }
			  content = "<img src='../../resources/img/middle_01.gif' width='383' height='25' border='0'>" + option;
			  $("#zxhy").empty().append(content);
	   }
	});
	

	$.ajax({
	   type: "POST",
	   url:"../../public/showArticleInformationTopFive?random"+parseInt(Math.random()*100000),
       dataType:'json',
       async:true, 
   	   data: {
			articleType:'建言献策'
	   },
	   success: function(data){
			  var dataRow = data.data;
			  var content = "";
			  var option = "";
			  for(var i = 0 ; i < dataRow.length;i++){
				   option = option + "<p><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a><p>";
			  }
			  content = "<img src='../../resources/img/middle_02.gif' width='383' height='25' border='0'>" + option;
			  $("#jyxc").empty().append(content);
	   }
	});
	
	
	$.ajax({
	   type: "POST",
	   url:"../../public/showArticleInformationTopFive?random"+parseInt(Math.random()*100000),
       dataType:'json',
       async:true, 
   	   data: {
			articleType:'政协提案'
	   },
	   success: function(data){
			  var dataRow = data.data;
			  var index_zxta="";
			  var content = "";
			  var option = "";
			  var subject_option="";
			  for(var i = 0 ; i < dataRow.length;i++){
				   option = option + "<p><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a  id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a><p>";
			  	   subject_option = subject_option + "<p class='col-lg-12 col-md-12 text-overflow' ><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a  id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a><p>";
			  }
			 content = "<img src='../../resources/img/middle_03.gif' width='383' height='25' border='0'>" + option;
			  index_zxta = "<a   href='#'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专题活动&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多>></a>" + subject_option;
			  $("#zxta").empty().append(content);
			  $("#index_subject").empty().append(index_zxta);
	   }
	});
	
	
	$.ajax({
	   type: "POST",
	   url:"../../public/showArticleInformationTopFive?random"+parseInt(Math.random()*100000),
       dataType:'json',
       async:true, 
   	   data: {
			articleType:'规章制度'
	   },
	   success: function(data){
			  var dataRow = data.data;
			  var content = "";
			  var option = "";
			  for(var i = 0 ; i < dataRow.length;i++){
				   option = option + "<p><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a><p>";
			  }
			  content = "<img src='../../resources/img/middle_04.gif' width='383' height='25' border='0'>" + option;
			  $("#gzzd").empty().append(content);
	   }
	});
	 
		
	$.ajax({
	   type: "POST",
	   url:"../../public/showArticleInformationTopFive?random"+parseInt(Math.random()*100000),
       dataType:'json',
       async:true, 
   	   data: {
			articleType:'学习园地'
	   },
	   success: function(data){
			  var dataRow = data.data;
			  var content = "";
			  var option = "";
			  for(var i = 0 ; i < dataRow.length;i++){
				   option = option + "<p><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a><p>";
			  }
			  content = "<img src='../../resources/img/xxyd_top.gif' width='383' height='25' border='0'>" + option;
			  $("#xxyd").empty().append(content);
	   }
	});
	
	
	$.ajax({
	   type: "POST",
	   url:"../../public/showArticleInformationTopFive?random"+parseInt(Math.random()*100000),
       dataType:'json',
       async:true, 
   	   data: {
			articleType:'文史资料'
	   },
	   success: function(data){
			  var dataRow = data.data;
			  var content = "";
			  var option = "";
			  var index_media="";
			  var media_option="";
			  for(var i = 0 ; i < dataRow.length;i++){
				   option = option + "<p><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a><p>";
			 	   media_option = media_option +"<p class='col-lg-12 col-md-12 text-overflow' ><img src='../../resources/img/arrow.gif' width='5' height='8' border='0'/><a  id='"+dataRow[i].articleId+"' href='./web_content.html?articleId="+dataRow[i].articleId+"' title='"+dataRow[i].articleTitle+"' target='_blank' >"+dataRow[i].articleTitle+"</a><p>";
			  }
			   content = "<img src='../../resources/img/wszy_top.gif' width='383' height='25' border='0'/>" + option;
			   index_media  = "<a href='#'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;媒体活动&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多>></a>" + media_option;
			   
			  $("#wszl").empty().append(content);
			  $("#index_media").empty().append(index_media);
	   }
	});
	
});
