import express from 'express'
import { Restuarants } from '../models/restuarantModel.js'

const router = express.Router()

router.get('/allres', async (req, res) => {
    try {

        const resturants = await Restuarants.findAll()
        return res.json(resturants)
    } catch (error) {
        return res.json(error)
    }
})

router.post('/create', async (req, res) => {
    try {

        const newres = await Restuarants.create(req.body)
        return res.json(newres)
    } catch (error) {
        return res.json(error)
    }
})

router.put('/update/:id', async (req, res) => {

    let id = req.params.id
    try {

        const updateRes = await Restuarants.update(req.body, { where: { id: id } })
        return res.json(updateRes)
    } catch (error) {
        return res.json(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    let id = req.params.id
    try {
        const deleteRes = await Restuarants.destroy({ where: { id: id } })
        res.json({
            message: "deleted"
        })
    } catch (error) {
        res.json(error)
    }

})

export default router