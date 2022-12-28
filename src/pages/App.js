import {Button} from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { GlobalStyle } from "../styleGlobal";
import {MdEmail, MdLock} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
import {Column, Container, CriarText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./style"


function App() {

  const cadastrar = () => {
    console.log('cadastrou')
  }

  return (
    <div>
      <GlobalStyle/>
            <Header/>
            <Container>
                <Column>
                    <Title> 
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais
                        rápido nas empresas desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                        <form>
                            <Input placeholder="Nome Completo" leftIcon={<FaUserAlt/>}/>
                            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input placeholder="Senha" leftIcon={<MdLock/>}/>
                            <Button title="Cadastrar" onClick={cadastrar} type="button"/>
                        </form>
                        <Row>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas
                            de Privacidade e os Termos de Uso da DIO.
                        </Row>
                        <Row>
                          <CriarText>Já tenho conta. <span>Fazer login</span></CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
    </div>
  );
}

export default App;
