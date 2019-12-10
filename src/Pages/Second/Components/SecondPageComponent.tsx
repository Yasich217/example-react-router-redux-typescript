
import * as React from 'react';
import {Link} from 'react-router-dom';

interface IProps {

};

interface IState {

};

export function SecondPageComponent(_: IProps, __: IState) {
  return (
    <div className='title'>
      <br />
      Если вы это видете, значит библиотека работает.
            <br />
      <Link className='link' to='/'>Вернуться</Link>
      <br />
      <span className='span small'>Не забудьте редеректить все запросы на корневой путь</span>
    </div>
  );
};
