import {Touch} from '../../modules/Touch';
import {Walle as Base} from './Walle';

export class Walle extends Base {
  componentDidMount() {
    if (this.imgNode.current && this.zoomNode.current && this.brightnessNode.current) {
      this.touch = new Touch(this.imgNode.current, this.zoomNode.current, this.brightnessNode.current);
      this.touch.initTouch();
    }
  }
}
