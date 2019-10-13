
import ReactDOM from "react-dom";
import {Component} from "react";
import styles from './confirm.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page confirm</h1>
      <App></App>
    </div>
  );
}

class App extends Component{
  async componentDidMount(){
    let res = await confirm("确定删除吗")
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
  }
  render(){
    return (<div></div>)
  }
}

class Loading extends Component{
	render() {
		return (
			<div className={styles.confirm}>
				<div className={styles.confirm__mask}></div>
				<div className={styles.confirm__content}>
          <div>{this.props.text}</div>
					<button onClick={()=>{this.props.onConfirm(true)}}>是</button>
          <button onClick={()=>{this.props.onConfirm(false)}}>否</button>
				</div>
			</div>
		);
	}
}

function confirm(options){
  let text = '';
  let node = null;
  if(typeof options === 'string'){
    text = options;
  }
  if(options && typeof options === 'object'){
    text = options.text;
  }
  return new Promise((resolve)=>{
    node = document.createElement('div');
    document.body.appendChild(node);
    ReactDOM.render(<Loading onConfirm={resolve} text={text} />, node);
  }).then(res=>{
    if(node) {
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
    }
    return res;
  });
}

