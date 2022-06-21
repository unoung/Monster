$(document).ready(function(){

    $(window).scroll(function(){
        sct = $(window).scrollTop();
        
        sec_top1 = $('.section_1').offset().top;
        sec_top2 = $('.section_2').offset().top;
        sec_top4 = $('.section_4').offset().top;
        sec_top5 = $('.section_5').offset().top;
  
     
    
        if(sct >= sec_top2*0.2){
            console.log(sec_top2*0.3);
            $('.motion_title').addClass('title_active');
            
        }

        if(sct >= sec_top4){
            console.log(123);
            $('.motion_title_4').addClass('title_active');
            
        }

        if(sct >= sec_top5){
            console.log(123);
            $('.motion_title_5_1').addClass('title_active');
            
        }

        if(sct >= sec_top5*1.2){
            console.log(123);
            $('.motion_title_5_2').addClass('title_active');
            
        }


    })

    


})