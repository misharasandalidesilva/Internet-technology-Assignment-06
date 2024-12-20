export default class CartModels{
    constructor(icode,description,unitPrice,qtyOnHand,qty) {
        this._icode = icode;
        this._description = description;
        this._unitPrice = unitPrice;
        this._qtyOnHand = qtyOnHand;
        this._qty = qty;
    }


    get icode() {
        return this._icode;
    }

    set icode(value) {
        this._icode = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }

    get qtyOnHand() {
        return this._qtyOnHand;
    }

    set qtyOnHand(value) {
        this._qtyOnHand = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }
}