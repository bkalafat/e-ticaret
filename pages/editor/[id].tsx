import { Form, Button } from "react-bootstrap"
import Layout from "../../components/Layout"
import { useState, useEffect, useRef } from "react"
import { useRouter } from 'next/router'

const Editor = () => {

  const fileInput = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const isUpdate = id != '0';
  const [jewellery, setJewellery] = useState({ id: "nextjs_2", name: "Ahenk", fromPrice: 160, price: 149, image: "../static/2.jpeg", description: "Kuvars Detaylı İnci Kolye" })

  const fileSelectorHandler = event => {
    setSelectedFile(event.target.files[0])
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log("Submitted")
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

        <div className="centerFlex">
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


            <Button variant="primary" type="submit">
              {isUpdate ? "Güncelle" : "Ekle"}
            </Button>

            <Button variant="warning" onClick={() => console.log("/AdminPanel e yönlendir")}>
              Geri
          </Button>

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

export default Editor