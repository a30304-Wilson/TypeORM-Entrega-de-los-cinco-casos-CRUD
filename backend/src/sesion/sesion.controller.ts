import { Body, Controller, Get, Post, Delete, Param, ParseIntPipe, Patch } from "@nestjs/common";
import { SesionService } from "./sesion.service";

@Controller("sesiones")
export class SesionController {
  constructor(private readonly service: SesionService) {}

  @Post()
  crear(@Body() body: { nombre: string; plazas: number; gimnasio: { id: number } }) {
    return this.service.crear(body);
  }

  @Get("gimnasio/:principalId")
  listarPorPrincipal(@Param("principalId", ParseIntPipe) principalId: number) {
    return this.service.listarPorPrincipal(principalId);
  }

  @Patch(":id/gimnasio")
  cambiarPrincipal(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: { principalId: number },
  ) {
    return this.service.cambiarPrincipal(id, body.principalId);
  }

  @Delete("gimnasio/:principalId")
  eliminarPorPrincipal(@Param("principalId", ParseIntPipe) principalId: number) {
    return this.service.eliminarPorPrincipal(principalId);
  }
}