import Layout from "../components/Layout"
import BootstrapTable from "react-bootstrap-table-next"
import * as API from "../utils/api"
import { IIndexProps } from "./index"

const Panel = (props: IIndexProps) => {
  const navigateForCreate = () => console.log("navigate to detail")
  // history.push({
  //   pathname: "/NewsEditor"
  // })

  const navigateForUpdate = news => console.log("navigate to detail")

  // history.push({
  //   pathname: "/NewsEditor",
  //   state: { news: news }
  // })

  //{ id: "nextjs_2", name: "Ahenk", fromPrice: 160, price: 149, image: "../static/2.jpeg", description: "Kuvars Detaylı İnci Kolye" }

  const columns = [
    {
      dataField: "name",
      text: "Adı",
      sort: true
    },
    {
      dataField: "fromPrice",
      text: "Ücret",
      sort: true
    },
    {
      dataField: "price",
      text: "İndirimli Ücret"
    },
    {
      dataField: "description",
      text: "Açıklama"
    }
  ]



  const rowEvents = {
    onClick: (e, row) => {
      navigateForUpdate(row)
    }
  }
  if (props.products) {
    return (
      <Layout>
        <div className="center-item">
          <input
            onClick={navigateForCreate}
            type="submit"
            value="Ekle"
          />
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={props.products}
            columns={columns}
            rowEvents={rowEvents}
            striped
            hover
            condensed
          />
        </div></Layout>
    )
  }
}

Panel.getInitialProps = async () => {

  const res = await API.getJewelleryList()
  const jewelleryList = await res.json()
  return {
    products: jewelleryList
  }
}

export default Panel

