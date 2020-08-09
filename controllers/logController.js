const Log = require('../models/Log')

// @desc   Get all logs
// @route  GET /api/v1/logs
// @access Public
exports.getLogs = async (req, res, next) => {

    try {
        const logs = await Log.find();

        return res.status(200).json({
            success: true,
            count: logs.length,
            data: logs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'

        })
    }
}
// @desc   Add Logs
// @route  POST /api/v1/logs
// @access Public
exports.addLog = async (req, res, next) => {
    console.log(req.body);

    try {
        const { technonolgy, errCode, errMsg, solutions } = req.body
        const log = await Log.create(req.body);
        
       /*  const solArr = solutions.split(",")
console.log(solArr); */
        return res.status(201).json({
            success: true,
            data: log
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'

            })
        }

    }
}
// @desc   Get all logs
// @route  DELETE /api/v1/logs/:id
// @access Public
exports.removeLog = async (req, res, next) => {
 try {
     const log = await Log.findById(req.params.id);
     
     if(!log){
         return res.status(404).json({
             success: false,
             error: 'No Log Found.'
         })
     }

     await log.remove();

     return res.status(200).json({
         success: true,
         data: log

     })
 } catch (error) {
      return res.status(500).json({
                success: false,
                error: 'Server Error'

            })
 }
}