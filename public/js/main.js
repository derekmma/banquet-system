
function headBar(){
	/*document.write('<div class="container-fluid" style="background: var(--white4); text-align: center;">');
	document.write('<div class="row"><div class="col-lg-1 col-xl-2"></div><div class="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-1"><img src="img/LOGO.png" alt="Hotel ICONIA" style="max-height: 120px;"/></div>');
	document.write('<div class="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7" style="text-align:center; margin:auto; color:darkslategray;"><h2>Banquet Registration &amp; Managing System</h2></div>');
	document.write('<div class="col-lg-1 col-xl-1"></div></div></div>');*/
	document.write('<div class="container-fluid" style="background: var(--white4); text-align: center;">');
	document.write('<div class="container">');
	document.write('<div class="row"><div class="col-lg-1 col-xl-1"></div><div class="col" style="text-align:center; display: flex; justify-content: space-between;"> <img src="img/LOGO.png" alt="Hotel ICONIA" style="max-height: 120px;display:inline-block; vertical-align: middle;"/> ');
	document.write('<div style="text-align:center; margin:auto; color:darkslategray;display:inline-block; vertical-align: middle; "><h2>Banquet Managing System</h2> </div></div>');
	document.write('<div class="col-lg-1 col-xl-1"></div></div></div></div>');
}

/*
	FOR DEBUGGING, PLEASE DON'T DELETE THIS.
	
	<nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Hotel ICONIA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropup">
                <a class="nav-link dropdown-toggle" id="dropdown10" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact Us</a>
                <div class="dropdown-menu" aria-labelledby="dropdown10">
                <a class="dropdown-item" href="#">&nbsp;<span class="oi oi-phone"></span>&nbsp;&nbsp;(+852) 56781234 (office hour)</a>
                <a class="dropdown-item" href="mailto:yiran.cheng@polyu.edu.hk"><span class="oi oi-envelope-closed"></span>&nbsp;&nbsp;yiran.cheng+polyu.edu.hk (replace + with @)</a>
                <a class="dropdown-item" href="#"><span class="oi oi-compass"></span>&nbsp;&nbsp;The Hong Kong Polytechnic University</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="admin-login.html"><span class="oi oi-key"></span>Admin</a>
            </li>
            </ul>
        </div>
	</nav>
*/

function btmNavBar(){
	a = "";
	a += '<nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">';
	a += '    <a class="navbar-brand" href="#">Hotel ICONIA</a>';
	a += '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">';
	a += '        <span class="navbar-toggler-icon"></span>';
	a += '    </button>';
	a += '    <div class="collapse navbar-collapse" id="navbarCollapse">';
	a += '        <ul class="navbar-nav mr-auto"><li class="nav-item active">';
	a += '            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>';
	a += '        </li><li class="nav-item"><a class="nav-link" href="#">Link</a></li>';
	a += '<li class="nav-item dropup">';
	a += '<a class="nav-link dropdown-toggle" id="dropdown10" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact Us</a>';
	a += '<div class="dropdown-menu" aria-labelledby="dropdown10">';
	a += '<a class="dropdown-item" href="#">&nbsp;<span class="oi oi-phone"></span>&nbsp;&nbsp;(+852) 56781234 (office hour)</a>';
	a += '<a class="dropdown-item" href="mailto:yiran.cheng@polyu.edu.hk"><span class="oi oi-envelope-closed"></span>&nbsp;&nbsp;yiran.cheng+polyu.edu.hk (replace + with @)</a>';
	a += '<a class="dropdown-item" href="#"><span class="oi oi-compass"></span>&nbsp;&nbsp;The Hong Kong Polytechnic University</a>';
	a += '</div>';
	a += '</li>';
	a += '</li>';
	a += '<li class="nav-item">';
	a += '	<a class="nav-link disabled" href="admin-login.html"><span class="oi oi-key"></span>Admin</a>';
	a += '</li>';
	a += '</ul>';
	a += '</div>';
	a += '</nav>';
	document.write(a);
}

$('.popover-dismiss').popover({
	trigger: 'focus'
});

$(function () {
	$('[data-toggle="popover"]').popover()
});

function Login() {
	//add encryption here
	//document.getElementById("login-form").submit();
	if(document.getElementById("staff-id").value == "1234" && document.getElementById("password").value == "1234") window.location.href="manage.html";
	else{
		alert("Invalid ID or incorrect password. Please check again.");
	}
}
