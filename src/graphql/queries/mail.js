import gql from 'graphql-tag'

export const SEND_MAIL = gql`mutation sendMail ($input: MailExcludingIdInput!){
    mailControllerSendMail(mailExcludingIdInput: $input) {
      id
    }
}`;
