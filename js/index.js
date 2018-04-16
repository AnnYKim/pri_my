console.log("hello");


$(function(){
    
    
    //변수 선언
    var $signUpBtn = $("#signUpBtn");
    var $signup = $("#signup");
    var $loginForm = $("#loginForm");
    var $introSite = $("#introSite");
    var $goToLoginBtn = $("#goToLoginBtn");
    
    
    //[가입하기] 버튼 클릭 이벤트
    $signUpBtn.on("click",function(){
        
        //로그인 폼 숨기기
        $loginForm.slideUp();
        
        //회원가입 폼 보이기
        $signup.slideDown();
        
        //내가 만드는... 문구 숨기기
        $introSite.slideUp();
    });
    
    
    //[로그인하기] 버튼 클릭 이벤트
    $goToLoginBtn.on("click",function(){
        
        //로그인 폼 보이기
        $loginForm.slideDown();
        
        //회원가입 폼 숨기기
        $signup.slideUp();
        
        //내가 만드는... 문구 보이기
        $introSite.slideDown();
    });
    
    
});