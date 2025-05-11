// /components/pages/NotificationSender.jsx
import { useState, useEffect } from 'react';
import './NotificationSender.css';

// API endpoints (replace with your actual database API URLs)
const USERS_API = '/api/database/users';
const CARS_API = '/api/database/cars';
const EMAIL_API = '/api/database/send-email';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(USERS_API);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="card">
      <div className="card-header">
        <h3>Users</h3>
      </div>
      <div className="card-body">
        <table className="data-table">
          <thead>
            <tr className="table-header">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Register</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="table-row">
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.register}</td>
                <td>{user.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(CARS_API);
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <div className="loading">Loading cars...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="card">
      <div className="card-header">
        <h3>Cars</h3>
      </div>
      <div className="card-body">
        <table className="data-table">
          <thead>
            <tr className="table-header">
              <th>ID</th>
              <th>Plate Number</th>
              <th>Mark</th>
              <th>Model</th>
              <th>Location</th>
              <th>Build Year</th>
              <th>Fuel Type</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id} className="table-row">
                <td>{car.id}</td>
                <td>{car.plateNumber}</td>
                <td>{car.markName}</td>
                <td>{car.modelName}</td>
                <td>{car.location}</td>
                <td>{car.buildYear}</td>
                <td>{car.fuelType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const EmailForm = () => {
  const [formData, setFormData] = useState({
    recipient: 'amgalan.ochir@gmail.com',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(EMAIL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      alert('Email sent successfully!');
      console.log('Email sent:', result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Send Email</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="email-form">
          <div className="form-group">
            <input
              type="email"
              value={formData.recipient}
              onChange={(e) =>
                setFormData({ ...formData, recipient: e.target.value })
              }
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
              className="form-control"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="form-control"
              placeholder="Random string/description"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      </div>
    </div>
  );
};

const NotificationSender = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Data Management Dashboard</h1>
      </header>
      <main className="dashboard">
        <UserList />
        <CarList />
        <EmailForm />
      </main>
    </div>
  );
};

export default NotificationSender;
