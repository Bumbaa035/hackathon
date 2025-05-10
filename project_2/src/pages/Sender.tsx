import React, { useState, useEffect } from 'react';
import './../sender.css';

type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  register: string;
  location: string;
};

type CarData = {
  id: string;
  axleCount: string;
  buildYear: string;
  cabinNumber: string;
  capacity: string;
  className: string;
  colorName: string;
  countryName: string;
  fuelType: string;
  height: string;
  importDate: string;
  length: string;
  manCount: string;
  markName: string;
  mass: string;
  modelName: string;
  motorNumber: string;
  ownerType: string;
  plateNumber: string;
  type: string;
  wheelPosition: string;
  width: string;
  location: string;
};

const FormGroup = ({
  data,
  type,
  handleInputChange,
}: {
  data: Record<string, string>;
  type: 'user' | 'car';
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, type: 'user' | 'car') => void;
}) => (
  <>
    {Object.entries(data).map(([key, value]) => (
      <div key={key} style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>{key}</label>
        <input
          type={key.toLowerCase().includes('date') ? 'date' : 'text'}
          name={key}
          value={value}
          onChange={(e) => handleInputChange(e, type)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>
    ))}
  </>
);

const Sender = () => {
  const [userData, setUserData] = useState<UserData>({
    id: '',
    firstName: '',
    lastName: '',
    register: '',
    location: '',
  });

  const [carData, setCarData] = useState<CarData>({
    id: '',
    axleCount: '',
    buildYear: '',
    cabinNumber: '',
    capacity: '',
    className: '',
    colorName: '',
    countryName: '',
    fuelType: '',
    height: '',
    importDate: '',
    length: '',
    manCount: '',
    markName: '',
    mass: '',
    modelName: '',
    motorNumber: '',
    ownerType: '',
    plateNumber: '',
    type: '',
    wheelPosition: '',
    width: '',
    location: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const userResponse: UserData = {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        register: '2025-01-01',
        location: 'New York',
      };

      const carResponse: CarData = {
        id: '1',
        axleCount: '2',
        buildYear: '2020',
        cabinNumber: '12345',
        capacity: '5 tons',
        className: 'SUV',
        colorName: 'Red',
        countryName: 'USA',
        fuelType: 'Diesel',
        height: '1.8m',
        importDate: '2021-06-15',
        length: '4.5m',
        manCount: '5',
        markName: 'Toyota',
        mass: '2 tons',
        modelName: 'RAV4',
        motorNumber: 'MTR123456',
        ownerType: 'Individual',
        plateNumber: 'ABC-123',
        type: 'Car',
        wheelPosition: 'Left',
        width: '2m',
        location: 'New York',
      };

      setUserData(userResponse);
      setCarData(carResponse);
    };

    fetchData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'user' | 'car'
  ) => {
    const { name, value } = e.target;
    if (type === 'user') {
      setUserData((prev) => ({ ...prev, [name]: value }));
    } else {
      setCarData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      <h2>User Information</h2>
      <form>
        <FormGroup data={userData} type="user" handleInputChange={handleInputChange} />
      </form>

      <h2>Car Information</h2>
      <form>
        <FormGroup data={carData} type="car" handleInputChange={handleInputChange} />
      </form>
    </div>
  );
};

export default Sender;
