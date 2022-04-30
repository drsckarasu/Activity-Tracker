const Activity = require('../models/Activity');

exports.getActivities = async (req, res, next) => {
    try {
        const activities = await Activity.find();

        return res.status(200).json({
            success: true,
            count: activities.length,
            data: activities
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addActivity = async (req, res, next) => {
    try {
        const { startTime, finishTime, distance, typeActivity } = req.body;
    
        const activity = await Activity.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: activity
        });  
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
