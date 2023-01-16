import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/auth.entity';
import { Repository } from 'typeorm';
import { CreateDataDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { Data } from './entities/datum.entity';

@Injectable()
export class DataService {

  constructor(
    @InjectRepository(Data)
    private dataRepository: Repository<Data>,
  ) {}

  async create(createDatumDto: CreateDataDto, user: User) {
    try {
      const data = this.dataRepository.create({ 
        ...createDatumDto,
        user
      });
      await this.dataRepository.save(data);
      return { data };
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return `This action returns all data`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datum`;
  }

  update(id: number, updateDatumDto: UpdateDatumDto) {
    return `This action updates a #${id} datum`;
  }

  remove(id: number) {
    return `This action removes a #${id} datum`;
  }
}
