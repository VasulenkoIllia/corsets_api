import { RoleEnum } from "./role.enum";
import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "./roles.guard";

export const ROLES_KEY = 'roles';

export const Roles = (...roles:RoleEnum[]) => applyDecorators(ApiBearerAuth(), UseGuards(JwtAuthGuard),SetMetadata(ROLES_KEY, roles),UseGuards(RolesGuard))

