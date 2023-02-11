import swaggerJSDoc from 'swagger-jsdoc';

export class SwaggerConfig {
  private options;
  constructor() {
    this.options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'My API',
          version: '1.0.0',
        },
      },
      apis: ['../routes/*ts'],
    };
  }
  public getOptions() {
    return this.options;
  }
}
