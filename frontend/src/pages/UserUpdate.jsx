import InfoContainer from "../components/InfoContainer"
import InputControl from "../components/InputControl"
import Input from "../components/Input"
import Row from "../components/Row"
import Container from "../layout/Container"
import Divider from "../components/Divider"
import Link from "../components/Link"
import Button from "../components/Button"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Form from "../components/Form"

const formatDate = dateString => {
  if (
    dateString === "" ||
    dateString.length !== 10 ||
    dateString === null ||
    dateString === undefined
  )
    return "default"

  const parts = dateString.split("/")

  const [dia, mes, ano] = parts
  return `${ano}-${mes}-${dia}`
}

const formatDateDMY = dateString => {
  const date = new Date(dateString)
  const dia = String(date.getUTCDate()).padStart(2, "0")
  const mes = String(date.getUTCMonth() + 1).padStart(2, "0") // Meses são base 0
  const ano = date.getUTCFullYear()

  return `${dia}/${mes}/${ano}`
}

const UserUpdate = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    date_of_birth: "",
  })

  const loadUser = async () => {
    await fetch("http://localhost:3000/users/" + id)
      .then(response => response.json())
      .then(json => json[0])
      .then(data => {
        setUser({
          name: data.name || "",
          email: data.email || "",
          contact: data.contact || "",
          date_of_birth: formatDateDMY(data.date_of_birth),
        })
      })
      .catch(() => {
        navigate("/")
      })
  }

  const updateUser = async event => {
    event.preventDefault()

    if (
      user.name === "" ||
      user.email === "" ||
      user.contact === "" ||
      user.date_of_birth === "" ||
      (user.date_of_birth.length >= 1 && user.date_of_birth.length !== 10)
    )
      return

    console.log({
      name: user.name,
      email: user.email,
      contact: user.contact || "default",
      date_of_birth: formatDate(user.date_of_birth),
    })

    await fetch(`http://localhost:3000/users/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        contact: user.contact || "default",
        date_of_birth: formatDate(user.date_of_birth),
      }),
    })

    navigate("/")
  }

  const handleUserNameChange = e => {
    setUser({ ...user, name: e.target.value })
  }

  const handleUserEmailChange = e => {
    setUser({ ...user, email: e.target.value })
  }

  const handleUserContactChange = e => {
    setUser({ ...user, contact: e.target.value })
  }

  const handleUserDateOfBirthChange = e => {
    setUser({ ...user, date_of_birth: e.target.value })
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <Container alignItems="flex-start">
      <InfoContainer rowGap="3.2rem" columnGap="3.2rem">
        <Form onSubmit={e => updateUser(e)}>
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
                value={user.name}
                onChange={e => handleUserNameChange(e)}
                required
              />
            </InputControl>
            <InputControl htmlFor="email" label="E-mail">
              <Input
                type="email"
                id={"email"}
                value={user.email}
                onChange={e => handleUserEmailChange(e)}
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
                value={user.contact}
                onChange={e => handleUserContactChange(e)}
                mask="(99) 9 9999-9999"
                required
              />
            </InputControl>
            <InputControl
              htmlFor="date_of_birth"
              label="Data de Nascimento (Opcional)"
            >
              <Input
                id={"date_of_birth"}
                type="text"
                value={user.date_of_birth}
                onChange={e => handleUserDateOfBirthChange(e)}
                mask="99/99/9999"
                maskPlaceholder={null}
                required
              />
            </InputControl>
          </Row>
          <Divider />
          <Row justifyContent="flex-end" flexWrap="wrap">
            <Link to="/" backgroundColor="#888" color="#f7f7f7">
              <span className="text">Voltar para o início</span>
            </Link>
            <Button>
              <span className="text">Atualizar usuário</span>
            </Button>
          </Row>
        </Form>
      </InfoContainer>
    </Container>
  )
}

export default UserUpdate
