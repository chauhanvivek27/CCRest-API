const express = require('express');
const ds = require('./data');
const request = require('request');

const router = express.Router();

router.get('/getall', (req, res) => {    
    const result =  ds.getAllCC();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(result);
});

router.get('/clear', (req, res) => {    
    const result = ds.clearStore();
    res.send(result);
});



router.post('/add', (req, res) => {
    const body = req.body;    
    res.setHeader('Access-Control-Allow-Origin', '*');
    const record = ds.addCC(body);
    
    if(record.result === 'failed') {
        res.status(500).json({success: false, error: ds.addCC(body)});        
    } else {
        res.send(record);
    }
    
});


module.exports = router;