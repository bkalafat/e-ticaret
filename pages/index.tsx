import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/background-jew.png" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>GLORY</h3>
          <h2>Jewellerys</h2>
          <p>En <strong>güzel takılar</strong> bir tık uzağınızda.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "nextjs_halfmoon", name: "Bileklik", price: 2500, image: "../static/pirlanta-bileklik.jfif", description: "Bu pırlanta bileklikle kendinizi şımartın."} as IProduct,
      {id: "nextjs_dragonscale", name: "Kolye", price: 3500, image: "../static/elmas-kolye.jpg",description: "Özel tasarım kolye ile farklı görüneceksiniz."} as IProduct,
      {id: "nextjs_crowntail", name: "Küpe", price: 750, image: "../static/inci-kupe.jpg", description: "Zerafetinizi bu küpelerle taçlandırın."} as IProduct,
      {id: "nextjs_veiltail", name: "Yüzük", price: 500, image: "../static/inci-yuzuk.jpg", description: "İnci yüzük ile parmaklarınız ışıldasın."} as IProduct,
    ]
  }
}

export default Index