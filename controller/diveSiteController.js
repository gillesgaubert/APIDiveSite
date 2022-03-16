const DiveSite = require('../models/diveSiteModel');

// controller methods called by router
// get all sites
exports.getDiveSites = (req, res, next) => {
    DiveSite.fetchAll(diveSites => {
        res.json(diveSites)
    });
};

// get site by id
exports.getDiveSite = (req, res, next) => {
    const siteId = req.params.id;
    DiveSite.findById(siteId, diveSite => {
        res.json(diveSite)
    });
};

// create site
exports.postEditDiveSite = (req, res, next) => {
    // storing the values from the request req
    const id = req.body.id;
    const location = req.body.location;
    const name = req.body.name;
    const maxDepth = req.body.description;
    const minLevel = req.body.minLevel;
    const comments = req.body.comments;
    const otherds = req.body.otherds;

    // using the constructor of the class DiveSite
    const updatedDiveSite = new DiveSite(
        id,location,name,maxDepth,minLevel,comments,otherds
    );
    updatedDiveSite.save();
    res.status(200).json({ message: id ? 'Dive Site Updated Successfully' : 'Dive Site Added Successfully' })
};

// delete site
exports.DeleteDiveSites = (req, res, next) => {
    const siteId = req.params.id;
    DiveSite.deleteById(siteId);
    res.status(200).json({ message: "Dive Site deleted successfully" })
};
