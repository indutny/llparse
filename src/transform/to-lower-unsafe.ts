import { Compilation, IRBasicBlock, IRValue } from '../compilation';
import { Transform } from './base';

export class ToLowerUnsafe extends Transform {
  constructor() {
    super('to_lower_unsafe');
  }

  public build(ctx: Compilation, bb: IRBasicBlock, value: IRValue): IRValue {
    return bb.binop('or', value, value.ty.val(0x20));
  }
}
