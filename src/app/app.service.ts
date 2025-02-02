import { BadRequestException, Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary.service';

@Injectable()
export class AppService {
  constructor(private cloudinary: CloudinaryService){}

  async uploadImageOnCloudinary(file:Express.Multer.File){
    const result = await this.cloudinary.uploadImage(file).catch(error=>{
      console.log(error);
      throw new BadRequestException('invalid file type.')
    })
    return result.secure_url;
  }

  async deleteImageFromCloudinary(publicId:string){
    try {
        const res = await this.cloudinary.deleteImg(publicId)
        return res.result === 'ok';
    } catch (error) {
        console.log("error deleting image from cloudinary: ", error);
    }
}

  getHello(): string {
    return 'Hello World!';
  }
}
