import React, {Component, createRef, RefObject} from 'react'
import {ITouch, Touch} from '../../modules/Touch';
import {cn} from '@bem-react/classname';

import './Walle.scss';

export const cnWalle = cn('Walle');

export class Walle extends Component<{}> {
  imgNode: RefObject<HTMLImageElement>;
  zoomNode: RefObject<HTMLInputElement>;
  brightnessNode: RefObject<HTMLInputElement>;
  touch: ITouch | null;

  constructor(props: {}) {
    super(props);
    this.imgNode  = createRef<HTMLImageElement>();
    this.zoomNode = createRef<HTMLInputElement>();
    this.brightnessNode = createRef<HTMLInputElement>();
    this.touch = null;
  }

  render() {
    return (
      <div className={cnWalle()}>
        <div className={cnWalle('ImgContianer')} touch-action="none">
          <img ref={this.imgNode} className={cnWalle('Img')} touch-action="none"
               sizes="(max-width: 2496px) 100vw, 2496px"
               srcSet="
                    assets/robot_em9jpf_c_scale,w_580.jpg 580w,
                    assets/robot_em9jpf_c_scale,w_1166.jpg 1166w,
                    assets/robot_em9jpf_c_scale,w_1577.jpg 1577w,
                    assets/robot_em9jpf_c_scale,w_1984.jpg 1984w,
                    assets/robot_em9jpf_c_scale,w_2358.jpg 2358w,
                    assets/robot_em9jpf_c_scale,w_2496.jpg 2496w
                    assets/bitmap1x.png 1x
                    assets/bitmap2x.png 2x
                    assets/bitmap3x.png 3x"
               src="assets/robot_em9jpf_c_scale,w_2496.jpg"
               alt="walle"
               title="walle"
          />
        </div>
        <div className={cnWalle('Control')}>
          <div className={cnWalle('Zoom')}>
            <span className={cnWalle('ValueName')}>Приближение:</span>
            <span className={cnWalle('Value', {zoom: true})}>0</span>
            <input ref={this.zoomNode} className={cnWalle('Range', {zoom: true})}
                   type={'range'} min={'0'} max={'100'} defaultValue={'0'}/>
          </div>
          <div className={cnWalle('Brightness')}>
            <span className={cnWalle('ValueName')}>Яркость:</span>
            <span className={cnWalle('Value', {brightness: true})}>100</span>
            <input ref={this.brightnessNode} className={cnWalle('Range', {brightness: true})}
                   type={'range'} min={'0'} max={'200'} defaultValue={'100'}/>
          </div>
        </div>
      </div>
    )
  }
}
