import { capture } from "../../../utils/payment";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(404).end()
        return
    }
    //TODO: Validate input
    let data = await capture(req.body.data);
    if (data?.code !== 'SUCCESS' || data?.transactionResponse?.state !== 'APPROVED') {
        console.log(data)
        res.status(500).json(data)
        return
    }

    res.status(200).end()
}