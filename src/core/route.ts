import { Resend } from "resend";

// Instância do Resend para enviar o e-mail
const resend = new Resend("re_7JCcQ8uU_3LLH4pxUyoFZfdKUhWYxMfaJ");

export async function Post() {
resend.emails
  .send({
    from: 'onboarding@resend.dev', // E-mail de envio
    to: 'g4buda@gmail.com', // E-mail de destino
    subject: 'Resultado do Cálculo DPVAT', // Assunto do e-mail
    html: `<p>testestes</p>`, // Corpo do e-mail
  })
  .then(response => {
    console.log("E-mail enviado com sucesso", response);
  })
  .catch(error => {
    console.error("Erro no envio do e-mail:", error);
  });
  }