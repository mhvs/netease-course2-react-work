
import {useState} from 'react';
import styles from './InputNumber.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page InputNumber</h1>
      <App></App>
    </div>
  );
}

function App(){
  const [value,setValue] = useState('aaa')
  return (
      <div>
      <InputNumber value={value} onChange={e=>{
        console.log('受控组件', e);
      }}/>
      <InputNumber defaultValue={value} onChange={e=>{
        console.log('非受控组件', e);
      }}/>
      </div>
  )
}

function InputNumber(props){
  if(Object.hasOwnProperty.call(props,'value')){
    // 设置value时认为是受控组件
    return (
      <input value={props.value} onChange={props.onChange} />
    )
  } else {
    // 不设置value时认为是非受控组件，
    return (
      <input defaultValue={props.defaultValue} onChange={props.onChange} />
    )
  }
}

