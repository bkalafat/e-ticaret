import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

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
        <title>Glory Jewellery tasarım kolye takı kuyumculuk.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Glory Jewellery takı kolye özel tasarım."
        />
        <meta name="title" content="Kolye takı gloryjewellerys.com" />
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-MB7Z4ZXDQQ'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-MB7Z4ZXDQQ');
              `
          }}>
        </script>
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
      { id: "nextjs_1", name: "Kolye", price: 400, image: "../static/1.jpeg", description: "En güzel kolyeler için Bize Ulaşın." } as IProduct,
      { id: "nextjs_2", name: "Kolye", price: 400, image: "../static/2.jpeg", description: "En güzel kolyeler için Bize Ulaşın." } as IProduct,
      { id: "nextjs_3", name: "Kolye", price: 400, image: "../static/3.jpeg", description: "En güzel kolyeler için Bize Ulaşın." } as IProduct,
      { id: "nextjs_4", name: "Kolye", price: 400, image: "../static/4.jpeg", description: "En güzel kolyeler için Bize Ulaşın." } as IProduct,
      { id: "nextjs_5", name: "Kolye", price: 400, image: "../static/5.jpeg", description: "En güzel kolyeler için Bize Ulaşın." } as IProduct,
      { id: "nextjs_6", name: "Kolye", price: 400, image: "../static/6.jpeg", description: "En güzel kolyeler için Bize Ulaşın." } as IProduct,
      { id: "nextjs_7", name: "Kolye", price: 400, image: "../static/7.jpeg", description: "En güzel kolyeler için Bize Ulaşın." } as IProduct
    ]
  }
}

export default Index