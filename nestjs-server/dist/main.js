"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const { PORT } = process.env;
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    try {
        await app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map