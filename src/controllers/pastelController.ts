import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Pastel } from "../entities/Pastel";

const pastelRepository = AppDataSource.getRepository(Pastel);

//GET-Obtener todos los productos
export const getAllPastel = async(red: Request, res: Response) => {
    try {
        const pastel = await pastelRepository.find();
        res.json(pastel);
    } catch(error) {
        res.status(500).json({ message:"Error al obtener productos."});
    }
};

// Get by ID- Obtener producto por ID
export const getPastelById = async(req: Request, res: Response) => {
    try {
        const pastel = await pastelRepository.findOneBy({
            id: parseInt(req.params.id),
        });
        if(pastel) {
            res.json(pastel);
        }else {
            res.status(404).json({ message: "Producto no encontrado"});
        }
    } catch(error){
        res.status(500).json({ message: "Error al obtener el producto."});
    }
};

// Crear (POST) un producto
export const createPastel = async(req: Request, res: Response) =>{
    try {
        const { name, description, price, imgUrl } = req.body; //Sacando los datos del request
        const pastel = new Pastel();
        pastel.name = name;
        pastel.description = description;
        pastel.price = price;
        pastel.imgUrl = imgUrl;
        await pastelRepository.save(pastel);
        res.status(201).json(pastel);
    } catch(error){
        res.status(500).json({
            message: "Error al crear el producto. "
        });
        
    }
};

// Actualizar (PUT) un producto
export const updatePastel = async(req: Request, res: Response) =>{
    try {
        const { name, description, price, imgUrl } = req.body;
        const pastel = await pastelRepository.findOneBy({
            id: parseInt(req.params.id)
        })

        if (pastel) {
            pastel.name = name ?? pastel.name;
            pastel.description = description ?? pastel.description;
            pastel.price = price ?? pastel.price;
            pastel.imgUrl = imgUrl ?? pastel.imgUrl
            await pastelRepository.save(pastel);
            res.json(pastel);
        } else {
            res.status(404).json({
                message: "Producto no encontrado."
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error al actualizar el producto."
        });
    }
};

// Borrar (DELETE) un producto
export const deletePastel = async(req: Request, res: Response) =>{
    try {
        
        const pastel = await pastelRepository.findOneBy({
            id: parseInt(req.params.id)
        });

        if (pastel) {
            
            await pastelRepository.remove(pastel);
            res.json({
                message: "Producto eliminado."
            });
        } else {
            res.status(404).json({
                message: "Producto no encontrado."
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error al borrar el producto."
        });
        
    }
};

