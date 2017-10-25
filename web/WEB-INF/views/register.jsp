
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!doctype html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Website to cooporate a charity">
        <meta name="author" content="CunyCode_closetShare">

        <link href="/resources/CSS/bootstrap.min.css" rel="stylesheet" />
        <link href="/resources/CSS/signin.css" rel="stylesheet" />
        <script src="/resources/Scripts/bootstrap.min.js"></script>

        <title>Register - Closet Share</title>
    </head>

    <body>
        <div class="container">

            <form class="form-signin" action="reg">
            <h2 class="form-signin-heading">Registration</h2>
            <label for="fname" class="sr-only">First Name: </label>
            <input type="text" id="fname" class="form-control" placeholder="First Name" required autofocus>
            <label for="lname" class="sr-only">Last Name: </label>
            <input type="text" id="lname" class="form-control" placeholder="Last Name" required autofocus>

            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>

            <label for="login" class="sr-only">Login: </label>
            <input type="text" id="login" class="form-control" placeholder="Login: " required autofocus>

            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
        </form>

        </div> <!-- /container -->

    </body>
</html>
