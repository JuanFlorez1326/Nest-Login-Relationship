import { PartialType } from '@nestjs/swagger';
import { CreateDataDto } from './create-datum.dto';

export class UpdateDatumDto extends PartialType(CreateDataDto) {}
