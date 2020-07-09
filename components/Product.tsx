import { withRouter, Router  } from 'next/router'

export interface IProduct {
  id: string
  name: string
  price: number
  url: string
  description: string
  image: string
}

interface IProductProps {
  product: IProduct
  router: Router
}

const Product = (props: IProductProps) => {

  const handleClick = () => {
    let text = props.product.name + " ile ilgili soru sormak istiyorum."

    let re = /\ /gi;
    let result = text.replace(re, "%20");

    window.location.href = "https://api.whatsapp.com/send?phone=905323969261&text=" + result + "&source=&data=&app_absent="
  }

  return (
    <div className="product">
      <h2 className="product__title">{props.product.name}</h2>
      <p className="product__description">{props.product.description}</p>
      <img src={props.product.image} alt="" className="product__image" />
      <div className="product__price-button-container">
        <div className="product__from-price">₺{props.product.price.toFixed(2)}</div>
        <div className="product__price">₺{(props.product.price*(0.9)).toFixed(2)}</div>
        <button
          onClick={handleClick}
          className="product__button"
          data-item-id={props.product.id}
          data-item-name={props.product.name}
          data-item-price={props.product.price}
          data-item-url={props.router.pathname}
          data-item-image={props.product.image}>
          Whatsapp'tan Sor
        </button>
      </div>
    </div>
  )
}

export default withRouter(Product)