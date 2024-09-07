'use strict';
function handleSubmit() {
  //lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById('email').value.toLocaleLowerCase();

  //lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById('error-email');

  // điều kiện của một email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // console.log('check value email', emailValue);
  // dùng match kiểm tra email vừa nhập
  const check = emailValue.match(regex);
  // consolog.log('email', check);
  const liInFor = document.querySelector('.li-infor');
  // console.log('check', liInFor);
  //lay element de kiem soat submit
  const submitControl = document.querySelector('.submit-email');
  if (check) {
    liInFor.style.display = 'block';
    submitControl.style.display = 'none';
    errorEmail.innerHTML = '';
  } else {
    errorEmail.innerHTML = 'Vui lòng nhập đúng định dạng email';
  }
}

// Js view-more

document.querySelectorAll('.view-more').forEach(bt => {
  bt.addEventListener('click', () => {
    const skillContainer = bt.closest(
      '.skill-content1, .skill-content2, .skill-content3, .skill-content4, .skill-content5, .skill-content6'
    );
    if (bt.innerHTML === 'View Less') {
      skillContainer.querySelector('.skill-wrapper').classList.add('hidden');
      bt.innerHTML = 'View More';
    } else {
      skillContainer.querySelector('.skill-wrapper').classList.remove('hidden');
      bt.innerHTML = 'View Less';
    }
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.view-more').forEach(button => {
//     button.addEventListener('click', () => {
//       const skillContainer = button.closest(
//         '.skill-content1, .skill-content2, .skill-content3, .skill-content4, .skill-content5, .skill-content6'
//       );
//       const skillWrapper = skillContainer.querySelector('.skill-wrapper');
//       if (button.textContent === 'View Less') {
//         skillWrapper.classList.add('hidden');
//         button.textContent = 'View More';
//       } else {
//         skillWrapper.classList.remove('hidden');
//         button.textContent = 'View Less';
//       }
//     });
//   });
// });
