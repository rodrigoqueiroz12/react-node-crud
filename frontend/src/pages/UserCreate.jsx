import InfoContainer from "../components/InfoContainer"
import InputControl from "../components/InputControl"
import Input from "../components/Input"
import Row from "../components/Row"
import Container from "../layout/Container"
import Divider from "../components/Divider"
import Link from "../components/Link"
import Button from "../components/Button"
import Form from "../components/Form"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const formatDate = dateString => {
  if (dateString === "" || dateString.length !== 10) return null

  const parts = dateString.split("/")

  const [dia, mes, ano] = parts
  return `${ano}-${mes}-${dia}`
}

const UserUpdate = () => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    date_of_birth: "",
  })

  const createUser = async event => {
    event.preventDefault()

    if (
      userData.name === "" ||
      userData.email === "" ||
      (userData.date_of_birth.length >= 1 &&
        userData.date_of_birth.length !== 10)
    )
      return

    await fetch("http://localhost:3000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData,
        contact: userData.contact.length !== 16 ? null : userData.contact,
        date_of_birth: formatDate(userData.date_of_birth),
      }),
    })

    navigate("/")
  }

  return (
    <Container alignItems="flex-start">
      <InfoContainer rowGap="3.2rem" columnGap="3.2rem">
        <Form onSubmit={e => createUser(e)}>
          <Row
            gap="3.2rem"
            height="fit-content"
            justifyContent="center"
            flexWrap="wrap"
          >
            <InputControl htmlFor="name" label="Nome">
              <Input
                type="text"
                id={"name"}
                value={userData.name}
                onChange={e =>
                  setUserData({ ...userData, name: e.target.value })
                }
                required
              />
            </InputControl>
            <InputControl htmlFor="email" label="E-mail">
              <Input
                type="email"
                id={"email"}
                value={userData.email}
                onChange={e =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required
              />
            </InputControl>
          </Row>
          <Row
            gap="3.2rem"
            height="fit-content"
            justifyContent="center"
            flexWrap="wrap"
          >
            <InputControl htmlFor="contact" label="Telefone (Opcional)">
              <Input
                type="tel"
                id={"contact"}
                value={userData.contact}
                onChange={e =>
                  setUserData({ ...userData, contact: e.target.value })
                }
                mask="(99) 9 9999-9999"
              />
            </InputControl>
            <InputControl
              htmlFor="date_of_birth"
              label="Data de Nascimento (Opcional)"
            >
              <Input
                id={"date_of_birth"}
                type="text"
                value={userData.date_of_birth}
                onChange={e =>
                  setUserData({ ...userData, date_of_birth: e.target.value })
                }
                mask="99/99/9999"
                maskPlaceholder={null}
              />
            </InputControl>
          </Row>
          <Divider />
          <Row justifyContent="flex-end" flexWrap="wrap">
            <Link to="/" backgroundColor="#888" color="#f7f7f7">
              <span className="text">Voltar para o início</span>
            </Link>
            <Button>
              <span className="text">Adicionar usuário</span>
            </Button>
          </Row>
        </Form>
      </InfoContainer>
    </Container>
  )
}

export default UserUpdate
