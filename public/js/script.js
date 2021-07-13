
$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
var num;
  if(screen.width < 700){
    num=1;
  }
  else if(screen.width < 800){
    num=1.65;
  }
  else if (screen.width < 1100){
    num=2;
  }
  else if(screen.width < 1400){
    num=3
  }
  else if(screen.width > 1400){
    num=4;
  }
 $('.slider-nav').slick({
  
  slidesToShow: num,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: true,
   focusOnSelect: true
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });

 // for nav mid nave part starts

 //nav part ends

 //article submisiion form js starts
    function getFileName() {
        var x = document.getElementById('entry_value')
        document.getElementById('fileName').innerHTML = x.value.split('\\').pop()
    }
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function(form) {
                form.addEventListener('submit', function(event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()

  // form checkbox and submit validation
  
  
  var checker = document.getElementById('invalidCheck2');
var sendbtn = document.getElementById('submitbtn');
sendbtn.disabled = true;
checker.onchange = function() {
  sendbtn.disabled = !this.checked;
};
  // form checkbox and submit validation

 //article submission form starts

