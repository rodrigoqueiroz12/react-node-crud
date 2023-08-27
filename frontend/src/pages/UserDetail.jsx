import Container from "../layout/Container"
import Card from "../components/Card"
import Paragraph from "../components/Paragraph"
import InfoContainer from "../components/InfoContainer"
import Divider from "../components/Divider"
import Row from "../components/Row"
import Button from "../components/Button"
import Link from "../components/Link"
import Modal from "../components/Modal"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const formatDate = dateString => {
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ]

  const date = new Date(dateString)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  const options = { timeZone: "America/Sao_Paulo" }
  const formattedTime = date.toLocaleTimeString("pt-BR", options)

  const formatedDate = `${day} de ${month} de ${year} às ${formattedTime}`
  return formatedDate
}

const formatDateOfBirthDate = dateString => {
  const date = new Date(dateString)
  const day = String(date.getUTCDate()).padStart(2, "0")
  const month = String(date.getUTCMonth() + 1).padStart(2, "0") // Meses são base 0
  const year = date.getUTCFullYear()

  return `${day}/${month}/${year}`
}

const UserDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [modelVisibility, setModalVisibility] = useState(false)

  const loadUser = async () => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => setUser(data[0]))
      .catch(() => {
        navigate("/")
      })
  }

  const deleteUser = async () => {
    await fetch(`http://localhost:3000/users/${user.id}`, {
      method: "delete",
    })

    navigate("/")
  }

  useEffect(() => {
    loadUser()
  })

  return (
    <>
      <Container alignItems="flex-start">
        <Card>
          <InfoContainer borderBottom="1px solid #0000001A">
            <Paragraph align="left" color="#00000080">
              <strong>ID</strong>: {user.id}
            </Paragraph>
            <Paragraph align="left" color="#00000080">
              <strong>Nome</strong>: {user.name}
            </Paragraph>
            <Paragraph align="left" color="#00000080">
              <strong>E-mail</strong>: {user.email}
            </Paragraph>
            <Paragraph align="left" color="#00000080">
              <strong>Telefone</strong>: {user.contact || "Não informado"}
            </Paragraph>
            <Paragraph align="left" color="#00000080">
              <strong>Data de Nascimento</strong>:{" "}
              {user.date_of_birth
                ? formatDateOfBirthDate(user.date_of_birth)
                : "Não informado"}
            </Paragraph>
          </InfoContainer>
          <InfoContainer>
            <Paragraph align="left">
              Registro criado em <strong>{formatDate(user.created_at)}</strong>
            </Paragraph>
            <Paragraph align="left">
              Modificado pela última vez em{" "}
              <strong>{formatDate(user.updated_at)}</strong>
            </Paragraph>
          </InfoContainer>
        </Card>
        <Divider />
        <Row justifyContent="flex-end">
          <Link to="/" backgroundColor="#888">
            <span className="text">Voltar ao início</span>
          </Link>
          <Link to={`/user/update/${id}`} backgroundColor="#ffd700">
            <span className="text">Editar informações</span>
          </Link>
          <Button
            backgroundColor="#ff4136"
            onClick={() => setModalVisibility(true)}
          >
            <span className="text">Excluir usuário</span>
          </Button>
        </Row>
      </Container>

      {modelVisibility ? (
        <Modal>
          <Card width="min(100%, 576px)">
            <InfoContainer borderBottom="1px solid #0000001A">
              <Paragraph align="left" color="#00000080">
                <strong>Confirmar ação</strong>
              </Paragraph>
            </InfoContainer>
            <InfoContainer>
              <Paragraph align="left" color="#00000080">
                <strong>Excluir este usuário?</strong>
              </Paragraph>
            </InfoContainer>

            <InfoContainer>
              <Paragraph align="left" color="#00000080">
                <strong>ID</strong>: {user.id}
              </Paragraph>
              <Paragraph align="left" color="#00000080">
                <strong>Nome</strong>: {user.name}
              </Paragraph>
              <Paragraph align="left" color="#00000080">
                <strong>E-mail</strong>: {user.email}
              </Paragraph>
              <Paragraph align="left" color="#00000080">
                <strong>Telefone</strong>: {user.contact || "Não informado"}
              </Paragraph>
              <Paragraph align="left" color="#00000080">
                <strong>Data de Nascimento</strong>:{" "}
                {user.date_of_birth || "Não informado"}
              </Paragraph>
            </InfoContainer>

            <InfoContainer>
              <Row justifyContent="flex-end">
                <Button
                  backgroundColor="#888"
                  onClick={() => setModalVisibility(false)}
                >
                  <span className="text">Cancelar</span>
                </Button>
                <Button backgroundColor="#ff4136" onClick={() => deleteUser()}>
                  <span className="text">Excluir</span>
                </Button>
              </Row>
            </InfoContainer>
          </Card>
        </Modal>
      ) : null}
    </>
  )
}

export default UserDetail
