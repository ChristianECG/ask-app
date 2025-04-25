import {
  FormContainer,
  Header,
  TextBox,
  SendButton,
  HighlightedLinks,
} from './AnonymousMessageForm.styles';

const AnonymousMessageForm = () => {
  return (
    <>
      <Header>
        <h1>Enviar Mensajes Anónimos</h1>
        <p>Comparte tus pensamientos de forma anónima y segura.</p>
      </Header>
      <FormContainer>
        <TextBox placeholder="Escribe tu mensaje anónimo" />
        <SendButton>Enviar</SendButton>
        <HighlightedLinks>
          <a href="#link1">Enlace destacado 1</a>
          <a href="#link2">Enlace destacado 2</a>
        </HighlightedLinks>
      </FormContainer>
    </>
  );
};

export default AnonymousMessageForm;
