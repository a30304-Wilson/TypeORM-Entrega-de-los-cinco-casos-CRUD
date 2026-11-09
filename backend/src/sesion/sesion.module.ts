import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Sesion } from "./entities/sesion.entity";
import { Gimnasio } from "../gimnasio/entities/gimnasio.entity";
import { SesionService } from "./sesion.service";
import { SesionController } from "./sesion.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Sesion, Gimnasio])],
  providers: [SesionService],
  controllers: [SesionController],
})
export class SesionModule {}