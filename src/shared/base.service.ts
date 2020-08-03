import { Document, Model, Types } from 'mongoose';

export class BaseService<T extends Document> {
    protected _model: Model<T>;

    private get modelName() : string {
        return this._model.modelName;
    }

    private toObjectId(id : string) : Types.ObjectId {
        return Types.ObjectId(id);
    }

    async getCollection() : Promise<T[]> {
        return this._model.find({}).exec();
    }

    async dropCollection() : Promise<void> {
        this._model.deleteMany({}).exec();
    }

    async findById(id: string) : Promise<T> {
        return this._model.findById(this.toObjectId(id)).exec();
    }

    async findOne(filter = {}) : Promise<T> {
        return this._model.findOne(filter).exec();
    }

    async findAll(filter = {}) : Promise<T[]> {
        return this._model.find(filter).exec();
    }

    async delete(id: string) : Promise<T> {
        return this._model.findByIdAndRemove(this.toObjectId(id)).exec();
    }

    async update(id: string, data : T) : Promise<T> {
        return this._model.findByIdAndUpdate(this.toObjectId(id), data).exec();
    }
}