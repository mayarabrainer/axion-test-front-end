import { useEffect, useState } from 'react';
import logoImg from '../../assets/logo.png';
import '../home/Home.css';
import api from '../../services/api';

const Home = () => {
  const [activeTab, setActiveTab] = useState('foods');
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get(`/${activeTab}`)
      .then((res) => {
        const sortedItems = res.data
          .map((item) => ({
            id: item.id,
            name: item.name,
            link: item.link,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)); 

        setItems(sortedItems);
      })
      .catch((err) => {
        console.error('Erro ao buscar dados:', err);
      });
  }, [activeTab]);

  return (
    <div className="container">
      <header className="navbar">
        <div className="navbar-content">
          <img src={logoImg} alt="Orange Logo" className="logo-img" />
          <nav className="menu">
            <a
              className={activeTab === 'foods' ? 'active' : ''}
              onClick={() => setActiveTab('foods')}
            >
              FOODS
            </a>
            <a
              className={activeTab === 'people' ? 'active' : ''}
              onClick={() => setActiveTab('people')}
            >
              PEOPLE
            </a>
            <a
              className={activeTab === 'places' ? 'active' : ''}
              onClick={() => setActiveTab('places')}
            >
              PLACES
            </a>
          </nav>
        </div>
      </header>

      <section className="foods-section">
        <h2 className="section-title">LIST OF {activeTab.toUpperCase()}</h2>

        <div className="section-container">
          <div className="gradient-bar" />

          <div className="food-grid">
            {items.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.link} alt={item.name} />
                <div className="card-title">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
