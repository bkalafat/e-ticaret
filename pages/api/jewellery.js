import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { name } = req.query;
    if (name) {
        const jewellery = await req.db.collection('Jewellery').findOne({ name: name });
        const empty = { id: "", name: "", fromPrice: 0, price: 0, image: "", description: "" }

        if (jewellery)
            res.json(jewellery)
        else
            res.json(empty)

    } else {
        res.json(await req.db.collection('Jewellery').find({}).toArray())
    }
});

handler.post(async (req, res) => {
    let jewellery = req.body
    jewellery = JSON.parse(jewellery);
    await req.db.collection('Jewellery').updateOne({ id: jewellery._id }, { $set: jewellery }, { upsert: true })
    res.json({ message: 'ok' });
})

export default (req, res) => handler.apply(req, res)