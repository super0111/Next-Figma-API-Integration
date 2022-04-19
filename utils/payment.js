import axios from 'axios';
import md5 from './security';

const PAYU_URL_TEST =
  'https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi';
const PAYU_URL_PROD = 'https://api.payulatam.com/payments-api/4.0/service.cgi';
const PAYU_URL = PAYU_URL_TEST;

const API_KEY_TEST = '4Vj8eK4rloUd272L48hsrarnUA';
const API_KEY = API_KEY_TEST;

const API_LOGIN_TEST = 'pRRXKOl8ikMmt9u';
const API_LOGIN = API_LOGIN_TEST;

const ACCOUNT_ID_TEST = '512324';
const ACCOUNT_ID = ACCOUNT_ID_TEST;

const MERCHANT_ID_TEST = 508029;
const MERCHANT_ID = MERCHANT_ID_TEST;

export async function authorizePayment(data) {
  const { totalPrice } = data;
  //ApiKey~merchantId~referenceCode~tx_value~currency
  let referenceCode = 'MYSALE0001';
  let ref = `${API_KEY}~${MERCHANT_ID}~${referenceCode}~${totalPrice.amount}~${totalPrice.currency}`;

  let req = {
    language: 'es',
    command: 'SUBMIT_TRANSACTION',
    merchant: {
      apiKey: API_KEY,
      apiLogin: API_LOGIN,
    },
    transaction: {
      order: {
        accountId: ACCOUNT_ID_TEST,
        referenceCode: referenceCode,
        description: 'payment test',
        language: 'es',
        signature: md5(ref),
        notifyUrl: 'http://www.payu.com/notify',
        additionalValues: {
          TX_VALUE: {
            value: totalPrice.amount,
            currency: totalPrice.currency,
          },
        },
        //  "buyer": {
        //     "merchantBuyerId": "1",
        //     "fullName": "First name and second buyer name",
        //     "emailAddress": "buyer_test@test.com",
        //     "contactPhone": "7563126",
        //     "dniNumber": "123456789",
        //     "shippingAddress": {
        //        "street1": "Av. Domingo Diez 1589",
        //        "street2": "5555487",
        //        "city": "Cuernavaca",
        //        "state": "Morelos",
        //        "country": "MX",
        //        "postalCode": "000000",
        //        "phone": "7563126"
        //     }
        //  },
        //   shippingAddress: {
        //     street1: 'Av. Domingo Diez 1589',
        //     street2: '5555487',
        //     city: 'Cuernavaca',
        //     state: 'Morelos',
        //     country: 'MX',
        //     postalCode: '0000000',
        //     phone: '7563126',
        //   },
      },
      // payer: {
      //   merchantPayerId: '1',
      //   fullName: 'First name and second payer name',
      //   emailAddress: 'payer_test@test.com',
      //   contactPhone: '7563126',
      //   dniNumber: '5415668464654',
      //   birthdate: '1994-06-21',
      //   billingAddress: {
      //     street1: 'Av. Domingo Diez 1589',
      //     street2: '125544',
      //     city: 'Cuernavaca',
      //     state: 'Morelos',
      //     country: 'MX',
      //     postalCode: '000000',
      //     phone: '7563126',
      //   },
      // },
      creditCard: {
        number: '4097440000000004',
        securityCode: '321',
        expirationDate: '2022/12',
        name: 'APPROVED',
      },
      //  "extraParameters": {
      //     "INSTALLMENTS_NUMBER": 1
      //  },
      type: 'AUTHORIZATION',
      paymentMethod: 'VISA',
      paymentCountry: 'MX',
      //  "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
      //  "ipAddress": "127.0.0.1",
      //    "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
      //    "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
    },
    //  test: false,
  };
  try {
    let res = await axios.post(PAYU_URL, req);
    return res.data;
  } catch (err) {
    console.log({ err });
    return err;
  }
}

export async function capture(data) {
  const { orderId, transactionId } = data;

  let req = {
    language: 'es',
    command: 'SUBMIT_TRANSACTION',
    merchant: {
      apiLogin: API_LOGIN,
      apiKey: API_KEY,
    },
    transaction: {
      order: {
        id: orderId,
      },
      type: 'CAPTURE',
      parentTransactionId: transactionId,
    },
  };
  let res = await axios.post(PAYU_URL, req);
  return res.data;
}
