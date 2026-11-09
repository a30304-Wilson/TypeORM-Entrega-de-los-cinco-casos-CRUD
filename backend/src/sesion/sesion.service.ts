import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Sesion } from "./entities/sesion.entity";

@Injectable()
export class SesionService {
  constructor(
    @InjectRepository(Sesion) private readonly repo: Repository<Sesion>,
  ) {}

  crear(data: { nombre: string; plazas: number; gimnasio: { id: number } }) {
    return this.repo.createQueryBuilder()
      .insert().into(Sesion)
      .values({
        nombre: data.nombre,
        plazas: data.plazas,
        gimnasio: { id: data.gimnasio.id },
      })
      .returning(["id"])
      .execute();
  }

  listarPorPrincipal(principalId: number) {
    return this.repo.createQueryBuilder("registro")
      .innerJoinAndSelect("registro.gimnasio", "principal")
      .where("principal.id = :principalId", { principalId })
      .orderBy("registro.id", "ASC")
      .getMany();
  }

  cambiarPrincipal(id: number, principalId: number) {
    return this.repo.createQueryBuilder()
      .update(Sesion).set({ gimnasio: { id: principalId } })
      .where('"ID" = :id', { id })
      .execute();
  }

  eliminarPorPrincipal(principalId: number) {
    return this.repo.createQueryBuilder()
      .delete().from(Sesion)
      .where('"ID_GIMNASIO" = :principalId', { principalId })
      .execute();
  }
}