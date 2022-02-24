"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_module_1 = require("./products/products.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("./config");
const users_module_1 = require("./users/users.module");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
let serveStatic = serve_static_1.ServeStaticModule.forRoot({
    rootPath: (0, path_1.join)(__dirname, '..', 'client'),
});
let imports = [products_module_1.ProductsModule, users_module_1.UsersModule, mongoose_1.MongooseModule.forRoot(config_1.default.db_uri)];
if (process.env.NODE_ENV == "production") {
    imports.push(serveStatic);
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: imports,
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map