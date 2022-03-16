const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(__dirname),
    'data',
    'diveSite.json'
);

const getDiveSitesFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err)
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

// class Divesite : constructor + instance method save + 2 static methods :
// deleteById, fetchAll and findById
module.exports = class DiveSite {
    contructor(id,location,name,maxDepth,minLevel,comments,otherds) {
        this.id = id;
        this.location = location;
        this.name = name;
        this.maxDepth = maxDepth;
        this.minLevel = minLevel;
        this.comments = comments;
        this.otherds = otherds;
    }

    save() {
        getDiveSitesFromFile(diveSites => {
            if (this.id) {
                const existingDiveSiteIndex = diveSites.findIndex(
                    site => site.id === this.id
                );
                const updatedDiveSites = [...diveSites];
                updatedDiveSites[existingDiveSiteIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedDiveSites), err => {
                    console.log(err);
                });
            } else {
                //this.id = (new Date()).getTime().toString();
                this.id = diveSites.length()+1;
                diveSites.push(this);
                fs.writeFile(p, JSON.stringify(diveSites), err => {
                    console.log(err);
                });
            }
        });
    }

    static deleteById(id) {
        getDiveSitesFromFile(diveSites => {
            const updatedDiveSites = diveSites.filter(site => site.id !== id);
            fs.writeFile(p, JSON.stringify(updatedDiveSites), err => {
            });
        });
    }

    static fetchAll(cb) {
        getDiveSitesFromFile(cb);
    }

    static findById(id, cb) {
        getDiveSitesFromFile(diveSites => {
            const diveSite = diveSites.find(ds => ds.id === id);
            cb(diveSite);
        });
    }
};