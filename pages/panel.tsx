import Layout from "../components/Layout"
import BootstrapTable from "react-bootstrap-table-next"
import { useState, useEffect } from "react"
import * as API from "../utils/api"

const Panel = () => {
  const [jewelleryList, setJewelleryList] = useState([])

  useEffect(() => {
    API.getJewelleryList().then(result => {
      console.log(result)
    })
  },[])



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
      text: "Başık",
      sort: true
    },
    {
      dataField: "price",
      text: "Tip"
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
  if (jewelleryList) {
    return (
      <Layout>
        <div className="center-item">
          <input
            onClick={navigateForCreate}
            type="submit"
            value="Yeni Haber Ekle"
          />
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={jewelleryList}
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

export default Panel