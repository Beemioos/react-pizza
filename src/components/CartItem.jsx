import React from 'react'

const CartItem = () => {
  return (
	<div class="cart__item">
  <div class="cart__item-img">
    <img
      class="pizza-block__image"
      src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
      alt="Pizza"
    />
  </div>
  <div class="cart__item-info">
    <h3>Сырный цыпленок</h3>
    <p>тонкое тесто, 26 см.</p>
  </div>
  <div class="cart__item-count">
    <div class="button button--outline button--circle cart__item-count-minus">
      {/* <% include ../../../public/img/plus.svg %> */}
    </div>
    <b>2</b>
    <div class="button button--outline button--circle cart__item-count-plus">
      {/* <% include ../../../public/img/plus.svg %> */}
    </div>
  </div>
  <div class="cart__item-price">
    <b>770 ₽</b>
  </div>
  <div class="cart__item-remove">
    <div class="button button--outline button--circle">
      {/* <% include ../../../public/img/plus.svg %> */}
    </div>
  </div>
</div>
  )
}

export default CartItem