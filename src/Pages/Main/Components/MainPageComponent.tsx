
import * as React from 'react';
import {connect} from 'react-redux';
import {Link, NavLinkProps} from 'react-router-dom';
import {toggleTrigger} from '../Actions/MainPageActions';

interface IProps extends NavLinkProps {
  trigger: boolean;
  toggleTrigger: (trigger: boolean) => void;
};

interface IState {

};

class MainPageComponent extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = {};
  };

  handleClick = () => {
    const {trigger} = this.props;
    this.props.toggleTrigger(!trigger);
  };

  render() {
    return (
      <div className='title'>
        Это компонент, который отрисовывается на каждой странице
                {this.props.location.pathname === '/' && (
          <div>
            <br />
            <div>
              Для проверки работы Redux нажмите
              <button className='button' onClick={this.handleClick}>здесь</button>
            </div>
            <div>Поле, которое должно меняться:
              <span className='span'> {this.props.trigger.toString()}</span>
            </div>
            <br />
            <div>
              Для проверки библиотеки react-router-dom нажмите
              <Link className='link' to='/some-route'> сюда</Link>
            </div>
          </div>
        )}

      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    trigger: state.mainPage.trigger
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleTrigger: function (trigger) {
      dispatch(toggleTrigger(trigger));
    }
  };
};

export const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);
