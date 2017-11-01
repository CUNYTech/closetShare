<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<!DOCTYPE html>
<html>
<title> Home </title>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Website to cooporate a charity">
    <meta name="author" content="CunyCode_closetShare">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="/resources/CSS/ClosetShare.css" rel="stylesheet" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <title>ClosetShare</title>
    <script src="jquery.js"></script>
  </head>
  <body>
    
  <nav class="navbar navbar-default">
  <div class="container-fluid">
  <ul class="nav nav-tabs nav-justified">
    <li> <a href="#">WOMEN</a></li>
    <li> <a href="#">MEN</a></li>
    <li> <a href="#">SHOES</a></li>
    <li> <a href="#">KIDS</a></li>
    <li> <a href="#">BRANDS</a></li>
    <li> <a href="#">CHARITIES</a></li>
  </ul>
 </div>
 
 <div class="header">
 <ul class="nav nav-tabs nav-justified">
   <li><input type="text"  name="search" placeholder="Search here ...." class="glyphicon glyphicon-search"></li>
   <li>
       <div class="dropdown">
          <button class="dropbtn">MY ACCOUNT
              <span class="caret"></span>
          </button>
          <div class="dropdown-content" id="myDropdown">
              <a href="#">Inbox</a>
              <a href="#">Order History</a>
              <a href="#">Sales History</a>
              <a href="#">Donations</a>
              <a href="#">Profile</a>
              <a href="#">Account Settings</a>
              <a href="#">Log Out</a>
          </div>
       </div>
   </li>
   <li><a href="#"><span class="glyphicon glyphicon-user"></span>Sign up</a></li>
   <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Sign in</a></li>
 </ul>
 </div>
 </nav>
 
<div class="container">
  <br>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">

      <div class="item active">
          <a href="https://www.stjude.org/give.html">
            <img src="https://static.wixstatic.com/media/3bc938_e0a4c2fef46d46769328eaaf92089025~mv2.jpg" alt="St Jude's">
          </a>
          <div class="carousel-caption"></div>
      </div>

      <div class="item">
          <a href="https://www.volunteer.va.gov/apps/VolunteerNow/">
            <img src= "http://www.midland.edu/images/for_students/studentservices/va/roundlogo.gif" alt="Veterans Affair" >
          </a>
          <div class="carousel-caption"></div>
      </div>
    
      <div class="item">
          <a href="https://www.cancer.org/involved/donate.html">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/American_Cancer_Society_Logo.svg/1200px-American_Cancer_Society_Logo.svg.png"  alt="American Cancer Society" >
          </a>
          <div class="carousel-caption"></div>
      </div>

      <div class="item">
          <a href="https://www.unicefusa.org/donate/help-save-childrens-lives/29161">
            <img src="https://shop.unicef.ca/sites/default/files/styles/share_fb/public/images/share/facebook/UNG4-1-tent.jpg?itok=yzIZEvkE" alt="UNICEF" >
          </a>
          <div class="carousel-caption"></div>
      </div>
  
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>