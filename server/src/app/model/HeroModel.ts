/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IHeroModel = require('./interfaces/HeroModel');

class HeroModel {

    private _heroModel: IHeroModel;

    constructor(heroModel: IHeroModel) {
        this._heroModel = heroModel;
    }
    get firstname (): string {
        return this._heroModel.firstname;
    }
    get lastname (): string {
        return this._heroModel.lastname;
    }

    get department (): string {
        return this._heroModel.department;
    }

    get year (): number {
        return this._heroModel.year;
    }
    
}
Object.seal(HeroModel);
export =  HeroModel;