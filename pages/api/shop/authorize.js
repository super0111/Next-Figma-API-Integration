import { authorizePayment } from '../../../utils/payment';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  //TODO: Validate input
  let data = await authorizePayment(req.body.data);
  if (data?.code !== 'SUCCESS')
  {
    res.status(400).json(data)
    return
  }
  if (data?.transactionResponse?.state !== 'APPROVED')
  {
    res.status(401).json(data);
    return;
  }

  res.status(200).json({
    transactionId: data.transactionResponse.transactionId,
    orderId: data.transactionResponse.orderId,
  });
}
