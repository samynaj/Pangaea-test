import { gql } from '@apollo/client';

export const GET_PRODUCTS = (currency) => gql`
    query {
        products {
            id
            title
            image_url
            price(currency: ${currency})
            product_options {
                options {
                    value
                }
            }
        }
        currency
    }
`;
