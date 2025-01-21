import { BadRequestException, Body, Controller, Delete, Get, InternalServerErrorException, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ProjectsDto } from '../dtos/projects.dto';
import { AppService } from 'src/app/app.service';
import { ProjectsService } from '../services/projects.service';

@Controller('projects')
export class ProjectsController {

    constructor(
        private projectsService: ProjectsService,
        private appService: AppService){}

    @Post()
    @UseInterceptors(
        FilesInterceptor('images', 1, {
            fileFilter:(req,file,cb)=>{
                if(!file.mimetype.match(/^image\/(jpg|jpeg|png|gif)$/)){
                    cb(new Error('only image files are allowed!'), false)
                }
                cb(null, true)
            }
        })
    )
    async create(
        @Body()projectData: Omit<ProjectsDto, 'images'>,
        @UploadedFiles() files: Express.Multer.File[]
    ) {
        if(!files || files.length===0){
            throw new BadRequestException('at least one image must be uploaded')
        }

        try {
            const imageUrls = await Promise.all(
                files.map(file=>this.appService.uploadImageOnCloudinary(file))
            )

            return this.projectsService.create({
                ...projectData,
                images: imageUrls
            })

        } catch (error) {
            throw new InternalServerErrorException('Failed to process images or create project')
        }
    }

    @Get()
    findAll() {
        return 'find all projects';
    }


    @Get(':id')
    findOne(){
        return 'fetch the project by id'
    }

    @Put(':id')
    update(){
        return 'update the project by id'
    }

    @Delete(':id')
    delete(){
        return 'delete the project by id'
    }
}
