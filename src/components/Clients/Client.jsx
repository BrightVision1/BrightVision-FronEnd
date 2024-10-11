import './client.css';
import client from '../../assets/client/1.png';
import client2 from '../../assets/client/2.png';
import client3 from '../../assets/client/3.png';
import client4 from '../../assets/client/4.png';
import client5 from '../../assets/client/5.png';
import client6 from '../../assets/client/6.png';
import client7 from '../../assets/client/7.png';

const Client = () => {
  return (
    <div className="client-gallery mt-16">
      <h1>Our Clients</h1>
      <div className="client-images">
        <img src={client} alt="Client 1" />
        <img src={client2} alt="Client 2" />
        <img src={client3} alt="Client 3" />
        <img src={client4} alt="Client 4" />
        <img src={client5} alt="Client 5" />
        <img src={client6} alt="Client 6" />
        <img src={client7} alt="Client 7" />
      </div>
    </div>
  );
};

export default Client;
