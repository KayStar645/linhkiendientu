
//Panel
const swiper = new Swiper('.swiper-panel', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
  nextEl: '.panel-next',
  prevEl: '.panel-prev',
  },
  autoplay: {
    delay: 3000,
  },
});

var width = screen.width;
if(1024 <= width)
{
  //Linh kiện điện tử
  var swipers1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".main__right-sensor-next",
      prevEl: ".main__right-sensor-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });

  //Mạch điện
  var swipers2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".main__right-electrical-next",
      prevEl: ".main__right-electrical-prev",
    },
    autoplay: {
      delay: 4000,
    },
  });
}
else if(740 <= width && width <= 1023)
{
  //Linh kiện điện tử
  var swipers1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".main__right-sensor-next",
      prevEl: ".main__right-sensor-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });

  //Mạch điện
  var swipers2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".main__right-electrical-next",
      prevEl: ".main__right-electrical-prev",
    },
    autoplay: {
      delay: 4000,
    },
  });
}

else {
  //Linh kiện điện tử
  var swipers1 = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".main__right-sensor-next",
      prevEl: ".main__right-sensor-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });

  //Mạch điện
  var swipers2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".main__right-electrical-next",
      prevEl: ".main__right-electrical-prev",
    },
    autoplay: {
      delay: 4000,
    },
  });
}

//Cái menu trên tablet nè
    var header = document.getElementById('header__table');
    var mobileMenu = document.getElementById('header__mobile-menu');
    var mobileMenuB = document.getElementById('header__table-menu');

		//Mở menu
		mobileMenu.onclick = function() 
		{
      header.style.display = 'block';
		}
    //Đoạn này là đóng menu khi kích ra ngoài
    mobileMenuB.onclick = function()
    {
      header.style.display = 'none';
    }

//Xử lý menu cấp 2 trong table nè
    var sanPham = document.getElementById('header__table-list2');
    var clickSP = document.getElementById('header__table-items2-icon');
    var x = document.getElementById('SP');


    clickSP.onclick = function()
    {
        if(sanPham.style.display === 'none')
        {
            sanPham.style.display = 'block';
            x.style.fontWeight = 'bold';
            x.style.color = '#666';

        }
        else
        {
            sanPham.style.display = 'none';
            x.style.fontWeight = '500';
            x.style.color = '#999';
        }

    }