const generateFooter = () => {
  const footer = document.querySelector('.footer');
  const template = `<div class="wrapper">
<div class="container">
  <aside class="footer__left">
    <h2 class="section__title">
      Sip, Savor, Smile.
      <br />
      <span> It’s coffee time!</span>
    </h2>
    <ul class="social__list">
      <li class="social__item">
        <a
          href="https://twitter.com/?lang=ru"
          class="icon__button light"
          target="_blank"
        >
        <object data="./img/general/icons/twitter.svg"></object>
        </a>
      </li>
      <li class="social__item">
        <a
          href="https://www.instagram.com/"
          class="icon__button light"
          target="_blank"
        >
        <object data="./img/general/icons/instagram.svg"></object>
        </a>
      </li>
      <li class="social__item">
        <a
          href="https://www.facebook.com/"
          class="icon__button light"
          target="_blank"
        >    
        <object data="./img/general/icons/facebook.svg"></object>
        </a>
      </li>
    </ul>
  </aside>
  <aside class="footer__right">
    <h3 class="contact__title">Contact us</h3>

    <ul class="contact__list">
      <li class="contact__item">
        <a
          href="https://www.google.com/maps?ll=34.1212822,-118.2140382"
          class="contact__link"
          target="_blank"
        >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="pin-alt">
        <path id="Ellipse" d="M16.6673 8.33333C16.6673 12.0152 10.0007 18.3333 10.0007 18.3333C10.0007 18.3333 3.33398 12.0152 3.33398 8.33333C3.33398 4.65144 6.31875 1.66667 10.0007 1.66667C13.6825 1.66667 16.6673 4.65144 16.6673 8.33333Z" stroke="#E1D4C9" stroke-width="1.5"/>
        <path id="Vector" d="M9.99935 9.16667C10.4596 9.16667 10.8327 8.79357 10.8327 8.33333C10.8327 7.8731 10.4596 7.5 9.99935 7.5C9.53911 7.5 9.16602 7.8731 9.16602 8.33333C9.16602 8.79357 9.53911 9.16667 9.99935 9.16667Z" fill="#E1D4C9" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
          8558 Green Rd., LA
        </a>
      </li>
      <li class="contact__item">
        <a href="tel:+16035550123" class="contact__link">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="phone">
        <path id="Path" d="M15.0984 12.7517L11.6665 13.4167C9.34845 12.2532 7.91654 10.9167 7.08321 8.83332L7.72483 5.39157L6.51197 2.16666L3.72946 2.16666C2.60191 2.16666 1.71466 3.09961 1.90108 4.21164C2.29888 6.58457 3.37231 10.5391 6.24987 13.4167C9.27338 16.4402 13.5661 17.8318 16.1378 18.4288C17.299 18.6984 18.3332 17.7908 18.3332 16.5988L18.3332 13.9843L15.0984 12.7517Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
        
          +1 (603) 555-0123
        </a>
      </li>
      <li class="contact__item">
        <p class="contact__date">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="clock">
        <path id="Vector" d="M10 5.5L10 10.5L15 10.5" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M10.0003 18.8333C14.6027 18.8333 18.3337 15.1024 18.3337 10.5C18.3337 5.89762 14.6027 2.16666 10.0003 2.16666C5.39795 2.16666 1.66699 5.89762 1.66699 10.5C1.66699 15.1024 5.39795 18.8333 10.0003 18.8333Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
          Mon-Sat: 9:00 AM – 23:00 PM
        </p>
      </li>
    </ul>
  </aside>
</div>
</div>`;
  footer.innerHTML = template;
};

export default generateFooter;
