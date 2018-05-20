<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
  <!-- struts taglib 以s开头 -->
  	<!-- 调用aciton 的get方法获取action 里的属性 -->
  	<p>I've said hello <s:property value="helloCount" /> times!</p>
    <h2><s:property value="messageStore.message" /></h2>
    <a href="<s:url action='index'/>">Home Page</a>
  </body>
</html>