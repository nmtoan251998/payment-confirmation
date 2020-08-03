import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

import UserService from './user.service';

const _userService : UserService = new UserService();

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    try {
        const data = await _userService.createUser({
            email,
            password,
            firstName,
            lastName,
        });

        const response = {
            message: 'Created',
            code: httpStatus.CREATED,
            data: data,
        }
    
        res.status(response.code).json(response).end();
    } catch (error) {
        next(error);
    }
}

export const getCollection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const collection = await _userService.getCollection();

        const response = {
            message: 'OK',
            code: httpStatus.OK,
            collection,
        }
    
        res.status(response.code).json(response).end();
    } catch (error) {
        next(error);
    }
}

export const dropCollection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await _userService.dropCollection();

        const response = {
            message: 'OK',
            code: httpStatus.NO_CONTENT,
        }
    
        res.status(response.code).end();
    } catch (error) {
        next(error);
    }
}

export const findById = async (req: Request, res: Response, next: NextFunction) => {
    const id : string = req.params.id;

    try {
        const data = await _userService.findById(id);

        const response = {
            message: 'OK',
            code: httpStatus.OK,
            data,
        }
    
        res.status(response.code).json(response).end();
    } catch (error) {
        next(error);
    }
}

export const findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await _userService.findAll();

        const response = {
            message: 'OK',
            code: httpStatus.OK,
            data,
        }
    
        res.status(response.code).json(response).end();
    } catch (error) {
        next(error);
    }
}
