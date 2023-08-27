import { Info, Pencil, Plus, Trash } from "@phosphor-icons/react"
import Link from "../components/Link"
import Container from "../layout/Container"
import Divider from "../components/Divider"
import Paragraph from "../components/Paragraph"
import Input from "../components/Input"
import Row from "../components/Row"
import Table from "../components/Table"
import { useEffect, useState } from "react"
import InfoContainer from "../components/InfoContainer"
import Card from "../components/Card"
import Modal from "../components/Modal"
import Button from "../components/Button"

const formatDate = dateString => {
  const meses = [
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

  const data = new Date(dateString)
  const dia = data.getUTCDate()
  const mes = meses[data.getUTCMonth()]
  const ano = data.getUTCFullYear()

  const date = `${dia} de ${mes} de ${ano}`

  return date
}

const Home = () => {
  const [users, setUsers] = useState([])
  const [currentUserForDelete, setCurrentUserForDelete] = useState({})
  const [filter, setFilter] = useState("")
  const [modelVisibility, setModalVisibility] = useState(false)

  const loadUsers = async () => {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
  }

  const deleteUser = async () => {
    await fetch(`http://localhost:3000/users/${currentUserForDelete.id}`, {
      method: "delete",
    })

    setModalVisibility(false)
    loadUsers()
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.id.toString().includes(filter) ||
      user.email.toLowerCase().includes(filter.toLowerCase()) ||
      (user.contact || "").toLowerCase().includes(filter.toLowerCase()) ||
      formatDate(user.date_of_birth || "")
        .toLowerCase()
        .includes(filter.toLowerCase()) ||
      ("Não informado".toLowerCase().includes(filter.toLowerCase()) &&
        !user.contact) ||
      ("Não informado".toLowerCase().includes(filter.toLowerCase()) &&
        !user.date_of_birth),
  )

  const confirmUserDelete = user => {
    setCurrentUserForDelete(user)
    setModalVisibility(true)
  }

  return (
    <>
      <Container alignItems="flex-start">
        <Row>
          <Input
            id="filter-input"
            type="text"
            placeholder="Pesquisar por Nome, E-mail, Telefone ou Data de Nascimento"
            onChange={e => {
              setFilter(e.target.value)
            }}
            value={filter}
          />
          <Link to="/user/create">
            <span className="text">Adicionar</span>
            <Plus size={20} color="#F7F7F7" weight="bold" />
          </Link>
        </Row>
        <Divider />
        {users.length <= 0 ? (
          <Paragraph>
            Seus usuários aparecerão aqui quando adicionados
          </Paragraph>
        ) : filteredUsers.length <= 0 ? (
          <Paragraph>Usuários não encontrados para esse termo</Paragraph>
        ) : (
          <Row height="fit-content" overflowX="auto" paddingBottom="1.6rem">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>Data de Nascimento</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td title={user.name}>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        {user.contact || (
                          <span className="missing">Não informado</span>
                        )}
                      </td>
                      <td>
                        {user.date_of_birth ? (
                          formatDate(user.date_of_birth)
                        ) : (
                          <span className="missing">Não informado</span>
                        )}
                      </td>
                      <td>
                        <Row height="4rem" gap="0.8rem" justifyContent="center">
                          <Link
                            to={`/user/${user.id}`}
                            variant="square"
                            backgroundColor="#888"
                          >
                            <Info size={20} color="#F7F7F7" weight="bold" />
                          </Link>
                          <Link
                            to={`/user/update/${user.id}`}
                            variant="square"
                            backgroundColor="#ffd700"
                          >
                            <Pencil size={20} color="#F7F7F7" weight="bold" />
                          </Link>
                          <Button
                            variant="square"
                            backgroundColor="#ff4136"
                            onClick={() => confirmUserDelete(user)}
                          >
                            <Trash size={20} color="#F7F7F7" weight="bold" />
                          </Button>
                        </Row>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Row>
        )}
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

            <InfoContainer borderBottom="1px solid #0000001A" rowGap="0.4rem">
              <Paragraph align="left" color="#00000080">
                <strong>ID</strong>: {currentUserForDelete.id}
              </Paragraph>
              <Paragraph align="left" color="#00000080">
                <strong>Nome</strong>: {currentUserForDelete.name}
              </Paragraph>
              <Paragraph align="left" color="#00000080">
                <strong>E-mail</strong>: {currentUserForDelete.email}
              </Paragraph>
              <Paragraph align="left" color="#00000080">
                <strong>Telefone</strong>:{" "}
                {currentUserForDelete.contact || "Não informado"}
              </Paragraph>
              <Paragraph align="left" color="#00000080">
                <strong>Data de Nascimento</strong>:{" "}
                {currentUserForDelete.date_of_birth || "Não informado"}
              </Paragraph>
            </InfoContainer>

            <InfoContainer>
              <Row justifyContent="flex-end">
                <Button
                  to="/"
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

export default Home
