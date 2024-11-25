import React,{useState} from 'react';
import {Card, Typography} from 'antd';
import FormComponent from './Components/FormComponent';

const {Title} = Typography;

function App() {
  const [SubmittedData, setSubmittedData] = useState(null);
  const handleSubmit = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style ={{padding: '20px', maxWidht: '600px', margin: '0 auto'}}>
      <Title level={2}>Форма с использованием Ant Design</Title>
        <FormComponent onSubmit={handleSubmit}/>
    {SubmittedData && (
      <Card style = {{marginTop: '20px'}}>
        <Title level={4}>Отправленные данные</Title>
        <p> <strong> Имя:</strong>{SubmittedData.name}</p>
        <p><strong>Описание:</strong>{SubmittedData.description}</p>
      </Card>
      )}
      </div>
  );
}

export default App;