


//单选框按钮
import { useState } from 'react';
import { Radio } from 'antd';

function Radiobutton() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Radio.Group onChange={handleOptionChange} value={selectedOption}>
      <Radio.Button value="option1" style={{width:150,height:40,fontSize:'16px',
        borderColor: selectedOption === 'option1' ? 'red' : 'black',
        color: selectedOption === 'option1' ? 'red' : 'black',
        display: 'flex',
        justifyContent: 'center',alignItems:'center'}}>在线支付</Radio.Button>
    </Radio.Group>
  );
}

export default Radiobutton;
