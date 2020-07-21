import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    res.json(await req.db.collection('Jewellery').find({}).toArray())
});

handler.post(async (req, res) => {
    let data = req.body
    data = JSON.parse(data);
    await req.db.collection('Jewellery').updateOne({ id: data.id }, { $set: data }, { upsert: true })
    res.json({ message: 'ok' });
})

export default (req, res) => handler.apply(req, res)