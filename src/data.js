const store = require('data-store')('CC', { cwd: 'data/detail' });
const Joi = require('joi');

const clearStore = () => {
    if(store.data) {
        store.clear();
        return {
            status: "success",
        }
    }
}

const getAllCC = () =>{
    if(store.data) {
        return {
           data: store.data,
           status: "success",
        };
    } else {
        return {
            data : "no data",
            status: "failed",
        }
    }     
}

const schema =  Joi.object().keys({
    Name: Joi.string().alphanum().min(3).max(30).required(),
    CCNumber: Joi.string().regex(/^[0-9]{1,19}$/).required(),
    Limit: Joi.number().required(),
})

const addCC = (payload) => {   
        if(payload) {
            const valid = Joi.validate(payload, schema);
            if(valid.error === null){
                const cc  = {
                    "name" : payload.Name,
                    "cardno": payload.CCNumber,
                    "limit": payload.Limit,
                    "balance": "£0",
                }
                store.set(Math.random().toString(36).substring(7), cc);
                return {
                    "result": "success" 
                }
            } else {
                return {
                    "result": "failed",
                     "error": valid.error,

                };
            }      
        }        
}

module.exports = {
    getAllCC,
    addCC,
    clearStore,
}