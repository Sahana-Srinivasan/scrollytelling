/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import { Card } from "react-bootstrap";
import { Scrollama, Step } from 'react-scrollama';
const narration = require("./assets/data/narration.json");


const narrativeStyle = css`
  img {
    max-width: 500px;
  }
  .main {
    padding: 10vh 2vw;
    display: flex;
    justify-content: space-between;
  }
  .graphic {
    flex-basis: 50%;
    position: sticky;
    top: 15vh;
    width: 100%;
    height: 75vh;
    align-self: flex-start;
  }
  .data {
    font-size: 5rem;
    text-align: center
  }
  .scroller {
    flex-basis: 30%;
  }
  .card-text {
    font-size: 18px !important;
    line-height: 1.3;
  }
  .step {
    margin-right: 50px;
    padding-top: 200px;
    padding-bottom: 200px;
    '&:last-child': {
      margin-bottom: 0;
    }
    font-size: 20px;
  }
  .card {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
    margin-left:20px;
    margin-right:20px;
    text-align: center;
    padding: 10%;
  }
  .blurb {
    margin: 10%;
    margin-top: 3%;
    text-align: center;
    font-size: 24px;
    min-height: 100%;
  }
  .desc {
    margin-left:20px;
    margin-right:20px;
  }
  .btn {
    color: #575757;
  }
  .card-text-s {
    padding: 10%;
    font-size: 24px !important;
  }
`
;

const introBlurb = (
  <div>
    <left>
    <br></br>
    <p>
    You can intro your story here, or delete this by deleting the "introBlurb" constant from being defined and from being rendered.
    </p>
    <br></br>
    </left>
  </div>
);


export default class Narrative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "1",
      progress: 0,
      src: ""
    }
  }

  onStepEnter = ({ element, data }) => {
    this.setState( { data });
    console.log(data)
    //this.update(data);
  }

  onStepExit= ({ element }) => {
    element.style.backgroundColor = '#fff';
  }

  onStepProgress = ({ element, progress }) => {
    this.setState({ progress });
  }

  update = data => {
    var src = "./assets/images/" + data + ".png";
    this.setState({src});
  }


  render() {
    const { data } = this.state;
    console.log(data)
    const src = './assets/images/' + data + '.png';
    console.log(src)

    return (
      <div>
        <div css={narrativeStyle}>

          <div className="blurb">
            <Card>
              <div className="card-text-s">
                {introBlurb}
              </div>
            </Card>
          </div>
          <div className='main'>
            <div className='graphic'>
            <Card>
              <Card.Img variant="top" src={require(`./assets/images/${this.state.data}.png`)}/>
            </Card>
            </div>
            <div className='scroller'>
              <Scrollama
                onStepEnter={this.onStepEnter}
                onStepExit={this.onStepExit}
                progress
                onStepProgress={this.onStepProgress}
                offset={0.33}
              >
                {narration.map ( narr => (
                  <Step data={narr.key} key={narr.key}>
                    <div className="step" >
                      <p className = "desc" id={"desc" + narr.key}>
                        <Card>
                          <Card.Body>
                            <Card.Text>{narr.description}</Card.Text>
                          </Card.Body>
                        </Card>
                      </p>
                    </div>
                  </Step>
                ))}
              </Scrollama>
            </div>
          </div>
        </div>
      </div>
      )
  }
}
