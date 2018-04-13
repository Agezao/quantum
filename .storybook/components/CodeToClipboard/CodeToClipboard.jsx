import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyIco from '../../../stories/static/copy-to.svg';
import CopyLoveIco from '../../../stories/static/copy-love.svg';

const AsideCopyToClipboard = styled(CopyToClipboard)`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: row-reverse;
`;

const CopyCodeIco = styled.div`
  width: 26px;
  height: 26px;
  margin: 10px 8px 10px 0;

  background: ${props => `url(${props.hasJustCopied ? CopyLoveIco : CopyIco})`};
  background-size: 100%;

  font-family: monospace;
`;

const IcoTooltip = styled.div`
  display: none;
  margin:18px 10px 0 0;
  color: #CCC;

  &:before {
    content: "${props => `${props.hasJustCopied ? props.success : props.tip[Math.floor(Math.random() * (props.tip.length - 0)) + 0]}`}";
  }
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;

  &:hover ${IcoTooltip}{
    display: block;
  }
`;

class CodeToClipboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasJustCopied: false,
    };
  }

  loveCallback = () => {
    this.setState({ hasJustCopied: true });

    setTimeout(() => {
      this.setState({ hasJustCopied: false });
    }, 1000);
  }

  render() {
    const { code } = this.props;
    const tips = [
      'I\'m lazy.',
      'Loved it, copy.',
      'Wow! copy now!',
      'My precious!',
      'Gimme that!',
      'I, I NEED THIS!!',
    ];

    return (
      <AsideCopyToClipboard text={code}>
        <Button onClick={this.loveCallback}>
          <CopyCodeIco hasJustCopied={this.state.hasJustCopied} />
          <IcoTooltip
            tip={tips}
            hasJustCopied={this.state.hasJustCopied}
            success="Copied!"
          />
        </Button>
      </AsideCopyToClipboard>
    );
  }
}

CodeToClipboard.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeToClipboard;