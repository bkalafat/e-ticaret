import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { _id } = req.query;
    if (_id) {
        const jewellery = await req.db.collection('Jewellery').findOne({ _id: _id });
        const empty = { _id: "", name: "", fromPrice: 0, price: 0, image: "", description: "" }

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
    await req.db.collection('Jewellery').updateOne({ _id: jewellery._id }, { $set: jewellery }, { upsert: true })
    res.json({ message: 'ok' });
})

handler.delete(async (req, res) => {
    const { _id } = req.query;
    if (_id) {
        await req.db.collection('Jewellery').deleteOne({ _id: _id })
    }
    res.json({ message: 'ok' });
})

export default (req, res) => handler.apply(req, res)