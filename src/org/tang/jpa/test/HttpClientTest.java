package org.tang.jpa.test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;

public class HttpClientTest {
	
	public static void mobilePost(String msg) throws ClientProtocolException, IOException{
			 
			 String url = "http://192.168.2.116:11111/springmvc/mobile/addChatMsg";
			 HttpClient hc = new DefaultHttpClient();
			 HttpPost hp = new HttpPost(url);
			 
			 List<NameValuePair> params = new ArrayList<NameValuePair>();  
	            params.add(new BasicNameValuePair("fromUserId", "FA862CA20FB81588E040007F010047D1"));  
	            params.add(new BasicNameValuePair("toUserId", "F00D8F6848F046DBE040007F0100468C"));  
	            params.add(new BasicNameValuePair("fromUserName", "test"));    
	            
	            params.add(new BasicNameValuePair("toUserName", "tang"));  
	            params.add(new BasicNameValuePair("msgType", "1"));  
	            params.add(new BasicNameValuePair("content", msg));    
	            
	            hp.setEntity(new UrlEncodedFormEntity(params,"UTF-8"));  
	            HttpResponse httpresponse = hc.execute(hp);  
	            System.out.println(httpresponse.getEntity().toString());
	}
	
	
	@SuppressWarnings("deprecation")
	public static void main(String args[]) throws ClientProtocolException, IOException{
		String msg = " 我也66 ";
		mobilePost(msg);
	}
}