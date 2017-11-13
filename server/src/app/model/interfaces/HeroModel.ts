/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface HeroModel extends mongoose.Document {
    department: string;
    year: number;
    firstname: string;
    lastname: string;
}

export = HeroModel;