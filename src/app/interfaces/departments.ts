export interface IDepartment {
    _id: string;
    name: string;

}

export class NewDepartment implements IDepartment {
    _id: string;
    name: string;

    constructor (_id:string, name:string) {
        this._id = _id
        this.name = name;

    }
}