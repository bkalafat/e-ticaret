import { Form, Button } from "react-bootstrap"
import Layout from "../../components/Layout"
import { useState, useRef } from "react"
import { useRouter } from 'next/router'
import * as API from '../../utils/api'
import Router from 'next/router'

const Editor = (props) => {

  const fileInput = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const router = useRouter()
  const { name } = router.query
  const isUpdate = name != 'new';
  const [jewellery, setJewellery] = useState(props.product ? props.product : null)

  const fileSelectorHandler = event => {
    setSelectedFile(event.target.files[0])
  }

  const handleSubmit = async event => {
    event.preventDefault()
    await API.upsertJewellery(jewellery)
    API.uploadFile(selectedFile)
      .then(res => {
        console.log(res)
        debugger
        setJewellery({ ...jewellery, image: res.data.fileUrl })
        Router.push('/panel')
      })
  }

  return (
    <Layout>
      <div className="center-item">
        <div className="center">
          <Button
            variant={selectedFile ? "info" : "primary"}
            onClick={() => fileInput.current.click()}
          >
            {isUpdate ? "Fotoğrafı Güncelle" : "Fotoğraf Ekle"}
          </Button>
          <p>{selectedFile ? selectedFile.name : "Fotoğraf Seç"}</p>
        </div>
        <input
          ref={fileInput}
          style={{ display: "none" }}
          id="imageSelector"
          type="file"
          onChange={fileSelectorHandler}
        />

        <div>
          <Form onSubmit={handleSubmit} className="col-md-10 col-xl-10">
            <Form.Group>
              <Form.Label>Adı</Form.Label>
              <Form.Control
                value={jewellery.name}
                onChange={e => setJewellery({ ...jewellery, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Açıklama</Form.Label>
              <Form.Control
                value={jewellery.description}
                onChange={e => setJewellery({ ...jewellery, description: e.target.value })}
                as="textarea"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ücret</Form.Label>
              <Form.Control
                value={jewellery.fromPrice}
                onChange={e => setJewellery({ ...jewellery, fromPrice: Number.parseInt(e.target.value) })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>İndirimli Ücret</Form.Label>
              <Form.Control
                value={jewellery.price}
                onChange={e => setJewellery({ ...jewellery, price: Number.parseInt(e.target.value) })}
              />
            </Form.Group>
            <Button style={{ marginRight: 7 }} variant="primary" type="submit">
              {isUpdate ? "Güncelle" : "Ekle"}
            </Button>
            <Button style={{ marginRight: 7 }} variant="warning" onClick={() => Router.push('/panel')}>Geri</Button>
            {isUpdate && (
              <Button
                variant="danger"
                onClick={() =>
                  //API.deleteNews(jewellery.id).then(function (res) {
                  console.log("Silinecek")
                  //})
                }
              >
                Sil
              </Button>
            )}
          </Form>
        </div>
      </div>
    </Layout>)
}

Editor.getInitialProps = async ({ query: { name } }) => {
  const res = await API.getJewellery(name)
  const jewellery = await res.json()
  return {
    product: jewellery
  }
}

export default Editor


