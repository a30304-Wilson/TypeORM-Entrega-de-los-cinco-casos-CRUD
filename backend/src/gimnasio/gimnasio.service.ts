import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Gimnasio } from "./entities/gimnasio.entity";

@Injectable()
export class GimnasioService {
  constructor(
    @InjectRepository(Gimnasio) private readonly repo: Repository<Gimnasio>,
  ) {}

  crear(nombre: string) {
    return this.repo.createQueryBuilder()
      .insert().into(Gimnasio)
      .values({ nombre })
      .returning(["id", "nombre"])
      .execute();
  }

  listar() {
    return this.repo.createQueryBuilder("principal")
      .orderBy("principal.id", "ASC")
      .getMany();
  }

  eliminar(id: number) {
    return this.repo.createQueryBuilder()
      .delete().from(Gimnasio)
      .where('"ID" = :id', { id })
      .execute();
  }

  modificar(id: number, nombre: string) {
    return this.repo.createQueryBuilder()
      .update(Gimnasio).set({ nombre })
      .where('"ID" = :id', { id })
      .execute();
  }
}