import { Controller, Get, Route } from 'tsoa';

interface OkResponse {
  a: number,
}

@Route('sample')
export class SampleController extends Controller {
  @Get('ok')
  async ok() {
    return { a: 1 } as OkResponse;
  }

  @Get('ng')
  async ng() {
    interface NgResponse {
      a: number,
    }
    return { a: 1 } as NgResponse;
  }
}
