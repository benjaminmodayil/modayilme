const getTransitionStyles = (timeout, location) => {
  // for the normal pages
  // -- side to side

  // for the articles/work specific pages
  //-- from the bottom

  // Also need to think about what page it's going to

  // check for /blog or /work and what it is going to

  let transitionType

  location.pathname.split('/').length === 3
    ? (transitionType = 'upAndDown')
    : (transitionType = 'leftToRight')

  if (transitionType === 'leftToRight') {
    return {
      entering: {
        transform: `translate(-500px, 0)`,
        opacity: 0
      },
      entered: {
        transform: `translate(0px, 0)`,
        transition: `all 500ms ease-in-out`,
        opacity: 1
      },
      exiting: {
        transform: `translate(1000px, 0)`,
        transition: `all 500ms ease-in-out`,
        opacity: 0
      }
    }
  } else {
    return {
      entering: {
        opacity: 0,
        transform: `translate(0, 100%)`
      },
      entered: {
        opacity: 1,
        transform: `translate(0px, 0)`,
        transition: `all 1s ease-in-out`
      },
      exiting: {
        opacity: 0,
        transform: `translate(0, 100%)`,
        transition: `all 1s ease-in-out`
      }
    }
  }
}

const getTransitionStyle = ({ timeout, status }, location) =>
  getTransitionStyles(timeout, location)[status]

export default getTransitionStyle
