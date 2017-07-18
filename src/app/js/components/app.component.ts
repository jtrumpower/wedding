import {AfterViewInit, Component} from '@angular/core';
import 'jquery';

@Component({
  selector: 'app-my-app',
  templateUrl: '../../html/app.component.html',
  styleUrls: ['../../css/app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.offcanvasMenu();
    this.burgerMenu();
    this.mobileMenuOutsideClick();
  }

  closeMenu() {
    $('.js-fh5co-nav-toggle').click();
  }

  mobileMenuOutsideClick() {

    $(document).click(function (event) {
      const container = $('#fh5co-offcanvas, .js-fh5co-nav-toggle');
      if (!container.is(event.target) && container.has(event.target).length === 0) {

        if ( $('body').hasClass('offcanvas') ) {

          $('body').removeClass('offcanvas');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }
      }
    });

  }


  offcanvasMenu() {

    // $('#page').prepend('<div id="fh5co-offcanvas" />');
    $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
    /*var clone1 = $('.menu-1 > ul').clone();
    $('#fh5co-offcanvas').append(clone1);
    var clone2 = $('.menu-2 > ul').clone();
    $('#fh5co-offcanvas').append(clone2);*/

    $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#fh5co-offcanvas')
        .find('li')
        .removeClass('has-dropdown');

    // Hover dropdown menu on mobile
    $('.offcanvas-has-dropdown').mouseenter(function(){
      const $this = $(this);

      $this
          .addClass('active')
          .find('ul')
          .slideDown(500, 'easeOutExpo');
    }).mouseleave(function(){

      const $this = $(this);
      $this
          .removeClass('active')
          .find('ul')
          .slideUp(500, 'easeOutExpo');
    });


    $(window).resize(function(){

      if ( $('body').hasClass('offcanvas') ) {

        $('body').removeClass('offcanvas');
        $('.js-fh5co-nav-toggle').removeClass('active');

      }
    });
  }


  burgerMenu() {

    $('body').on('click', '.js-fh5co-nav-toggle', function(event){
      const $this = $(this);


      if ( $('body').hasClass('overflow offcanvas') ) {
        $('body').removeClass('overflow offcanvas');
      } else {
        $('body').addClass('overflow offcanvas');
      }
      $this.toggleClass('active');
      event.preventDefault();

    });
  }
}
