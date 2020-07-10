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
      { id: "nextjs_1", name: "Grace", price: 249, image: "../static/1.jpeg", description: "Barok İnci Kolye" } as IProduct,
      { id: "nextjs_2", name: "Ahenk", fromPrice: 160, price: 149, image: "../static/2.jpeg", description: "Kuvars Detaylı İnci Kolye" } as IProduct,
      { id: "nextjs_3", name: "Mihrap", fromPrice: 200, price: 179, image: "../static/3.jpeg", description: "Ametist Kolye, Barok İnci Detaylı" } as IProduct,
      { id: "nextjs_4", name: "Leon", fromPrice: 130, price: 119, image: "../static/4.jpeg", description: "Lapis Lazuli Ve Hematit Kolye" } as IProduct,
    ]
  }
}

export default Index