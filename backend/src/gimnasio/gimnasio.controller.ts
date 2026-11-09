import { Body, Controller, Get, Post, Delete, Param, ParseIntPipe, Patch } from "@nestjs/common";
import { GimnasioService } from "./gimnasio.service";

@Controller("gimnasios")
export class GimnasioController {
  constructor(private readonly service: GimnasioService) {}

  @Post()
  crear(@Body() body: { nombre: string }) {
    return this.service.crear(body.nombre);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Delete(":id")
  eliminar(@Param("id", ParseIntPipe) id: number) {
    return this.service.eliminar(id);
  }

  @Patch(":id")
  modificar(@Param("id", ParseIntPipe) id: number, @Body() body: { nombre: string }) {
    return this.service.modificar(id, body.nombre);
  }
}