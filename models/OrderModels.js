export default class OrderModels{
    constructor(oid,date,cid,iid,qty,total) {
        this._oid = oid;
        this._date = date;
        this._cid = cid;
        this._iid = iid;
        this._qty = qty;
        this._total = total;
    }


    get oid() {
        return this._oid;
    }

    set oid(value) {
        this._oid = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get cid() {
        return this._cid;
    }

    set cid(value) {
        this._cid = value;
    }

    get iid() {
        return this._iid;
    }

    set iid(value) {
        this._iid = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }
}