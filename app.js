const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var count = 0;

$(".dropdown dt").click(function(){
    $(this).next(".dropdown_content").toggle("slow");
});

if (isMobile) {
    $("menu .details a").click(function(){
        if ($(this).index() == 0){
            $(this).attr("href", "tel:1234567890");
        }
        if ($(this).index() == 3){
            popup('<i class="fa fa-times"></i></a><iconify-icon icon="bx:error"></iconify-icon><aside><h3 class="title small">Timings may vary</h3><p>For accurate timings please connect through a call & confirm.</p></aside>', 'alert');
        }
    });
} else {
    $("menu .details a").click(function(){
        switch($(this).index()){
            case 0:
                return popup('<i class="fa fa-times"></i></a><iconify-icon icon="subway:error" class="error"></iconify-icon><aside><h3 class="title small">Unsupported device</h3><p>It looks like your device won\'t support for <b>calling</b>. Kindly use a Mobile device.</p></aside>', 'alert');
                break;
            case 3:
                 popup('<i class="fa fa-times"></i></a><iconify-icon icon="bx:error"></iconify-icon><aside><h3 class="title small">Timings may vary</h3><p>For accurate timings please connect through a call & confirm.</p></aside>', 'alert');
                break;
            default:
                break;
        }
    });
}

const slides1 = document.querySelectorAll(".slide1")
var counter1 = 0;
slides1.forEach((slide1,index1) => {
    slide1.style.left = `${index1 *100}%`
})

const goNext1 = () => {
    counter1++;
    slideImage1();
}
const goPrev1 = () => {
    
    counter1--;
    if(counter1 < 0)
    {
        counter1 = 0;
    }
    slideImage1();
}

const slideImage1 = () =>{
    slides1.forEach(
        (slide1) => {
            slide1.style.transform = `translateX(-${counter1*100}%)`
        }
    )
}

const slides2 = document.querySelectorAll(".slide2")
var counter2 = 0;
slides2.forEach((slide2,index2) => {
    slide2.style.left = `${index2 *100}%`
})

const goNext2 = () => {
    counter2++;
    slideImage2();
}
const goPrev2 = () => {
    
    counter2--;
    if(counter2 < 0)
    {
        counter2 = 0;
    }
    slideImage2();
}

const slideImage2 = () =>{
    slides2.forEach(
        (slide2) => {
            slide2.style.transform = `translateX(-${counter2*100}%)`
        }
    )
}

const slides3 = document.querySelectorAll(".slide3")
var counter3 = 0;
slides3.forEach((slide3,index3) => {
    slide3.style.left = `${index3 *100}%`
})

const goNext3 = () => {
    counter3++;
    slideImage3();
}
const goPrev3 = () => {
    
    counter3--;
    if(counter3 < 0)
    {
        counter3 = 0;
    }
    slideImage3();
}

const slideImage3 = () =>{
    slides3.forEach(
        (slide3) => {
            slide3.style.transform = `translateX(-${counter3*100}%)`
        }
    )
}




function popup(mssg, type){
    if(type == "alert"){
        if ($(".alert").length < 2){
            count++;
            $(".additional").append('<section class="alert alert_'+count+' flex padding_1x"><a href="javascript:void(0)" onclick="closer(\'modal\',\'alert_'+count+'\')" class="close">'+mssg+'</section>');
            setTimeout(function(){$(".alert_"+count).remove();}, 10000);
            if ($(".alert").length > 0){ setTimeout(function(){$(".alert_"+count).prev().remove();}, 4000); }
        }
    }
}

$(".ham").click(function(){
    if ($("menu").css("left") != "0px"){
        $(this).addClass(" hamburger");
        $("body").append('<div class="overlay" onclick="closer()"></div>');
        $("menu").css("left","0px");
        $("body").css({'overflow-y':'hidden'});
    }
});


$(".close").click(function(){
    $(".overlay").remove();
    if ($("menu").css("left") >= "0px"){
        $(".ham").removeClass(" hamburger");
        $("menu").css("left","-105%");
        $("body").css({'overflow-y':'visible'});
    }
});
function closer(type, el){
        if(type=="modal"){
        $("."+el).remove();
        return 1;
        }
    $(".overlay").remove();
    if ($("menu").css("left") >= "0px"){
        $(".ham").removeClass(" hamburger");
        $("menu").css("left","-105%");
        $("body").css({'overflow-y':'visible'});
    }
}

window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color","var(--dark)") ;
        document.getElementById("roll_back").style.display = "flex";
    } else {
        $("nav").css("background-color","transparent") ;
        document.getElementById("roll_back").style.display = "none";
    }
}


