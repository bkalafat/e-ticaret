import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"
import Document, { Html, Main, NextScript } from "next/document"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>

              <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js"></script>

              <script>
                var firebaseConfig = {
                  apiKey: "AIzaSyBQrO7hG0Z0__tKNayLcBLkc7w7P-lBPTc",
                  authDomain: "gloryjewellerys.firebaseapp.com",
                  databaseURL: "https://gloryjewellerys.firebaseio.com",
                  projectId: "gloryjewellerys",
                  storageBucket: "gloryjewellerys.appspot.com",
                  messagingSenderId: "470679224327",
                  appId: "1:470679224327:web:353e0af22afda8e4b4eaa2",
                  measurementId: "G-MB7Z4ZXDQQ"
                };
                firebase.initializeApp(firebaseConfig);
                firebase.analytics();
              </script>`
          }}
        />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/background-jew.png" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>GLORY</h3>
          <h2>Jewellery</h2>
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
      { id: "nextjs_halfmoon", name: "İnci Altın Kolye", price: 500, image: "../static/inci-altin-kolye.jpeg", description: "Bu inci ve altın kolye ile kendinizi şımartın." } as IProduct,
      { id: "nextjs_dragonscale", name: "İnci Kolye", price: 400, image: "../static/inci-kolye.jpeg", description: "Özel tasarım inci kolye ile farklı görüneceksiniz." } as IProduct,
      { id: "nextjs_crowntail", name: "Taş Kolye", price: 350, image: "../static/tas-kolye.jpeg", description: "Zerafetinizi bu taş kolye ile taçlandırın." } as IProduct,
      { id: "nextjs_veiltail", name: "Tuğra Kolye", price: 400, image: "../static/tugra-kolye.jpeg", description: "Tuğra kolye ile güzelliğiniz ön plana çıksın." } as IProduct,
    ]
  }
}

export default Index