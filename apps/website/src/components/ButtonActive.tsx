import React, { useState } from 'react';
import { Button} from 'antd';

const ButtonActive: React.FC<{Icon: any, alert?: any}> = ({Icon, alert}) => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };

  return (
        <Button
          type="default"
          icon={Icon}
          loading={loadings[3]}
          onClick={() => {enterLoading(3),alert()}}
        />
  );
};

export const ButtonCreated = () => {
    const [loadings, setLoadings] = useState<boolean[]>([]);
  
    const enterLoading = (index: number) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
  
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 3000);
    };
  return (
    <Button
    type="default"
    loading={loadings[2]}
    onClick={() => enterLoading(2)}
    iconPosition="end"
  >
    Created
  </Button>
  )
}

export default ButtonActive;