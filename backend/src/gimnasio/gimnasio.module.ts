import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gimnasio } from "./entities/gimnasio.entity";
import { Sesion } from "../sesion/entities/sesion.entity";
import { GimnasioService } from "./gimnasio.service";
import { GimnasioController } from "./gimnasio.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Gimnasio, Sesion])],
  providers: [GimnasioService],
  controllers: [GimnasioController],
})
export class GimnasioModule {}