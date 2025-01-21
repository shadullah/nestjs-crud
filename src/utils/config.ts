import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions } from "@nestjs/mongoose";


export const connectDB = (
    ConfigService:ConfigService
): MongooseModuleOptions=>({
    uri: ConfigService.get<string>('MONGODB_URI'),
    autoIndex:true 
})

export const corsConfig = (): CorsOptions=>({
    origin: process.env.CLIENT_URL,
    methods:'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    credentials:true,
})