
export default class CustomerModels{
    constructor(id,name,address,tel) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._tel = tel;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get tel() {
        return this._tel;
    }

    set tel(value) {
        this._tel = value;
    }
}