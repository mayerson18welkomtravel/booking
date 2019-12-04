import gql from 'graphql-tag'

export const GET_RATES_BY_DATE = gql`mutation ($input: InputReservation!) {
    reservationMain(inputReservation: $input) {
        id
        checkIn
        checkOut
        status
    }
}`;

export const ADD_RESERVATION = gql`mutation ($input: InputReservation!) {
    reservationMain(inputReservation: $input) {
        id
        checkIn
        checkOut
        status
    }
}`;
