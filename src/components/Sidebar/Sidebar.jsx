import './sidebar.scss'
import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/logo.png'

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
]

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
]

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: true,
    }
  }

  toggleSidebar = () => {
    this.setState(state => ({ isOpened: !state.isOpened }))
  }

  goToRoute = path => {
    console.log(`going to "${path}"`)
  }

  toggleActiveItem = e => {
    document.querySelectorAll('.sidebar__item').forEach(item=> item.classList.remove('active'))
    e.target.classList.add('active')
  }

  render() {
    const { isOpened } = this.state
    const containerClassnames = classnames('sidebar', { opened: isOpened })

    return (
      <div className={containerClassnames}>
        <div className='sidebar__logo'>
          <img src={logo} alt='TensorFlow logo' />
          <span>TensorFlow</span>
          <button onClick={this.toggleSidebar} className='sidebar__btn'>
            <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
          </button>
        </div>
        <div className='sidebar__top'>
          {routes.map(route => (
            <div
              key={route.title}
              onClick={e => {
                this.toggleActiveItem(e)
                this.goToRoute(route.path)
              }}
              className='sidebar__item'
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </div>
          ))}
        </div>
        <div className='sidebar__bottom'>
          {bottomRoutes.map(route => (
            <div
              key={route.title}
              onClick={(e) => {
								this.toggleActiveItem(e)
								this.goToRoute(route.path)}
							}
              className='sidebar__item'
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
