// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickrightarrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevstate => ({
        activeIndex: prevstate.activeIndex + 1,
      }))
    }
  }

  renderActiveReview = currentreviewdetails => {
    const {imgUrl, username, companyName, description} = currentreviewdetails

    return (
      <div className="content">
        <img src={imgUrl} alt={username} className="image" />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onClickleftarrow = () => {
    const {activeIndex} = this.state
    // const {reviewsList} = this.props

    if (activeIndex > 0) {
      this.setState(prevstate => ({
        activeIndex: prevstate.activeIndex - 1,
      }))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const currentreviewdetails = reviewsList[activeIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>

        <div className="container">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickleftarrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentreviewdetails)}

          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickrightarrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
