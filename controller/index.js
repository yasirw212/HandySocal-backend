const supaBase = require('../model/database')

require('dotenv').config()

const getCategories = async (req, res) => {
    try {
        const {data} = await supaBase.from('categories').select('*, categories(name)')
        console.log(data)
        if(!data) {
            throw new Error('failed')
        }
        return res.status(200).json({status: "Success", data: data})
    } catch (error) {
        res.status(404).json({status: 'Failed', error: error})
    }
}

const getCategoryById = async (req, res) => {

}

const getServices = async (req, res) => {
    
    try {
        const {data} = await supaBase.from('services').select('*, categories(name)')
        console.log(data)
        if(!data) {
            throw new Error('failed')
        }
        return res.status(200).json({status: "Success", data: data})
    } catch (error) {
        res.status(404).json({status: 'Failed', error: error})
    }
}

const getServicesById = async (req, res) => {
    const {categoryId, id} = req.params
    console.log(categoryId)
    try {
        const {id} = req.params
        const {data} = await supaBase.from('services').select(`name, description`).eq(`id`, `${id}`)
        console.log(data)
        if(!data) {
            throw new Error('failed')
        }
        return res.status(200).json({status: "Success", data: data})
    } catch (error) {
        res.status(404).json({status: 'Failed', error: error})
    }
}

const getPopularServices = async (req, res) => {
    try {
        const {data} = await supaBase.from('popular_services').select('services(id, name, photos), categories(name)')
        
        console.log(data)
        // console.log(error)
        return res.status(200).json({data: data})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const createInquiry = async (req, res) => {
    const {name, email, services_id, phone, message} = req.body
    const date = new Date()

    try {
        const {error} = await supaBase.from('inquiries').insert({services_id: services_id, name: name, email: email, phone: phone, message: message, created_at: date })
        if(error){
            console.log(error)
            throw new Error
        }
        return res.status(201).json({message: 'Client inquiry succesfully sent'})
    } catch (error) {
        console.log(error)
        return res.status(404).json({message: 'Unable to send inquiry at this time'})
    }
}

module.exports = {
    getServices,
    getServicesById,
    getPopularServices,
    createInquiry
}