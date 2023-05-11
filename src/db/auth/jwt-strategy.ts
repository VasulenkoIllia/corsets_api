import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import * as process from "process";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, // TODO: change to true
            secretOrKey: process.env.JWT_SECRET,
        });
    }

}