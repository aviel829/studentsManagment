/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IHeroModel = require("./../../model/interfaces/HeroModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class HeroSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            firstname : {
                type: String,
                required: true
            },
            lastname : {
                type: String,
                required: true
            },
            department: {
                type: String,
                required: true
            },
            year: {
                type: Number,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IHeroModel>("Heroes", HeroSchema.schema);
export = schema;""